import {Component, OnInit} from '@angular/core';
import {Color} from '../../classes/color';
import {BehaviorSubject} from 'rxjs';
import {ColorsApiService} from '../../services/api/colors-api.service';
import {ColorsApiRequest} from '../../classes/requests/colors-api.request';
import {ColorsApiResponse} from '../../classes/responses/colors-api.response';
import {ColorSchemeTypes} from '../../enums/color-scheme-types.enum';
import {TinyColor} from '@ctrl/tinycolor';
import {ColorGroup} from '../../classes/colorGroup';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'sgg-colors',
  templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit {
  // Public vars
  colorSwatches: BehaviorSubject<Color[]> = new BehaviorSubject<Color[]>([]);
  groups: ColorGroup[] = [];
  supportingColorModes: string[] = [
    ColorSchemeTypes.monochrome,
    ColorSchemeTypes.monochromeLight,
    ColorSchemeTypes.monochromeDark
  ];

  // Private vars
  private _colorSwatches: Color[] = [];

  constructor(private colorsApiService: ColorsApiService) {
  }

  ngOnInit() {
    // Initialize data set listeners
    this.colorSwatches.next(this._colorSwatches);

    this.colorSwatches.subscribe(newColorSwatches => {
      this._colorSwatches = newColorSwatches;
    });
  }

  addColor(color: Color): void {
    const conflicts = this.getColorConflicts(color);

    if (conflicts.hasValue) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    if (conflicts.hasLabel) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    // Set manually added color as a primary color
    color.isPrimary = true;

    this.addPrimaryColorToGroup(color);

    this.addColorToSwatches(color);
  }

  editColor(color: Color): void {
    this._colorSwatches.forEach((colorSwatch: Color) => {
      if (colorSwatch.value === color.value) {
        Object.assign(colorSwatch, color);
      }
    });
  }

  deleteColor(color: Color): void {
    this.deleteColorFromSwatches(color);
  }

  private getColorConflicts(color: Color) {
    let conflictedValue = false;
    let conflictedLabel = false;

    this._colorSwatches.forEach((existingColor: Color) => {
      conflictedValue = color.value === existingColor.value && !conflictedValue;
      conflictedLabel = color.label === existingColor.label && !conflictedLabel;
    });

    return {
      hasValue: conflictedValue,
      hasLabel: conflictedLabel
    };
  }

  // Generate color palettes
  generateAnalogous(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.analogic,
      'json',
      2
    );

    this.getAndCreateColors(request);
  }

  generateAnalogousComplimentary(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.analogicComplement,
      'json',
      2
    );

    this.getAndCreateColors(request);
  }

  generateComplementary(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.complement,
      'json',
      1
    );

    this.getAndCreateColors(request);
  }

  generateMonochromatic(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochrome,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  generateMonochromaticDark(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochromeDark,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  generateMonochromaticLight(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochromeLight,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  generateTriadic(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.triad,
      'json',
      2
    );

    this.getAndCreateColors(request);
  }

  generateQuadratic(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.quad,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  getAndCreateColors(request: ColorsApiRequest) {
    this.colorsApiService.getColorScheme(request)
      .subscribe((response: ColorsApiResponse) => {
        // Cut out extra values returned by API
        response.colors.length = request.count;

        const colors = response.colors
          .filter(color => !!color)
          .map(color => {
            const newColor = new Color(
              color.name.value,
              color.name.value,
              color.hex.value,
              this.generateVariableFromColorName(color.name.value),
              new TinyColor(color.rgb.value)
            );

            // Find color group that matches the input color object on the request (primary color)
            if (this.supportingColorModes.indexOf(request.mode) > -1) {
              const group = this.groups.find((colorGroup: ColorGroup) => {
                const matchingColorGroup = colorGroup.colorSwatches.find(
                  (groupColor: Color) => {
                    return groupColor.value === `#${request.hex}`;
                  });

                return !isNullOrUndefined(matchingColorGroup);
              });

              // Add supporting color to matching primary color's group
              this.addSupportingColorToGroup(group, newColor);
            } else {
              // Add new primary color to it's own group
              this.addPrimaryColorToGroup(newColor);
            }

            return newColor;
          });

        colors.forEach((color: Color) => {
          this.addColorToSwatches(color);
        });
      });
  }

  // Private functions
  private addColorToSwatches(color: Color) {
    this._colorSwatches.push(color);

    this.colorSwatches.next(this._colorSwatches);

    return color;
  }

  private deleteColorFromSwatches(color: Color) {
    const index = this._colorSwatches.findIndex(colorSwatch => colorSwatch.value === color.value);

    if (index < 0) {
      return;
    }

    this._colorSwatches.splice(index, 1);

    this.colorSwatches.next(this._colorSwatches);
  }

  private generateVariableFromColorName(colorName: string): string {
    const firstLetter = colorName.charAt(0).toLowerCase();
    const remaining = colorName.substr(1).replace(' ', '');

    return firstLetter + remaining;
  }

  private addPrimaryColorToGroup(color: Color) {
    const colorGroupLabel = `Primary color: ${color.label} (${color.value}) - Color Group`;

    this.groups.push(
      new ColorGroup(colorGroupLabel, [color])
    );
  }

  private addSupportingColorToGroup(group: ColorGroup, color: Color) {
    group.colorSwatches.push(color);
    // TODO: THIS DOESN'T WORK
    // const colorSwatchesClone = Object.assign([], group.colorSwatches);
    // const sortedMutatedArray = sortColors(
    //   colorSwatchesClone.map(colorOnSwatch => {
    //     return [
    //       colorOnSwatch.tinyColor.r,
    //       colorOnSwatch.tinyColor.g,
    //       colorOnSwatch.tinyColor.b
    //     ];
    //   })
    // );
    // const sortedColorSwatchArray = [];
    // sortedMutatedArray.forEach(mutatedColor => {
    //   const matchingColor = colorSwatchesClone.find(colorSwatch => {
    //     return colorSwatch.tinyColor.r === mutatedColor[0]
    //       && colorSwatch.tinyColor.g === mutatedColor[1]
    //       && colorSwatch.tinyColor.b === mutatedColor[2];
    //   });
    //
    //   sortedColorSwatchArray.push(matchingColor);
    // });
    //
    // group.colorSwatches.length = 0;
    // Object.assign(group.colorSwatches, sortedColorSwatchArray);
  }
}
