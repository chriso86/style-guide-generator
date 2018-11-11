import {Component, OnInit} from '@angular/core';
import {Color} from '../../classes/color';
import {BehaviorSubject} from 'rxjs';
import {ColorsApiService} from '../../services/api/colors-api.service';
import {ColorsApiRequest} from '../../classes/requests/colors-api.request';
import {ColorsApiResponse} from '../../classes/responses/colors-api.response';
import {ColorSchemeTypes} from '../../enums/color-scheme-types.enum';
import {TinyColor} from '@ctrl/tinycolor';

@Component({
  selector: 'sgg-colors',
  templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit {
  // Public vars
  colorSwatches: BehaviorSubject<Color[]> = new BehaviorSubject<Color[]>([]);

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
      ColorSchemeTypes.analogic
    );

    this.getAndCreateColors(request);
  }

  generateAnalogousComplimentary(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.analogicComplement
    );

    this.getAndCreateColors(request);
  }

  generateComplementary(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.complement
    );

    this.getAndCreateColors(request);
  }

  generateMonochromatic(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochrome
    );

    this.getAndCreateColors(request);
  }

  generateMonochromaticDark(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochromeDark
    );

    this.getAndCreateColors(request);
  }

  generateMonochromaticLight(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochromeLight
    );

    this.getAndCreateColors(request);
  }

  generateTriadic(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.triad
    );

    this.getAndCreateColors(request);
  }

  generateQuadratic(color: Color) {
    const request = new ColorsApiRequest(
      color.tinyColor,
      ColorSchemeTypes.quad
    );

    this.getAndCreateColors(request);
  }

  getAndCreateColors(request: ColorsApiRequest) {
    this.colorsApiService.getColorScheme(request)
      .subscribe((response: ColorsApiResponse) => {
        const colors = response.colors
          .filter(color => !!color)
          .map(color => {
            return new Color(
              color.name.value,
              color.name.value,
              color.hex.value,
              this.generateVariableFromColorName(color.name.value),
              new TinyColor(color.rgb.value)
            );
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
}
