import {Component, OnInit} from '@angular/core';
import {Color} from './models/color';
import {BehaviorSubject} from 'rxjs';
import {ColorSchemeTypes} from './enums/color-scheme-types.enum';
import {TinyColor} from '@ctrl/tinycolor';
import {ColorGroup} from './models/colorGroup';
import {getDialogConfig} from '../../../core/helpers/dialogs';
import {AddEditColorDialogComponent} from './add-edit-color-dialog/add-edit-color-dialog.component';
import {FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ConfirmationDialogComponent} from '../../../core/dialogs/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ExternalColorApiGateway} from './rest/external-color-api.gateway';
import {InternalColorApiGateway} from './rest/internal-color-api-gateway';
import {ColorApiRequest} from './rest/color-api.request';
import {ColorApiResponse} from './rest/color-api.response';
import {StringHelper} from '../../../core/helpers/string';
import {ObjectHelper} from '../../../core/helpers/object';

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

  constructor(
    private externalColorsApiGateway: ExternalColorApiGateway,
    private internalColorsApiGateway: InternalColorApiGateway,
    private dialog: MatDialog,
    private toastrService: ToastrService) {
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

    this.externalColorsApiGateway.getColorInfo(
      new ColorApiRequest(
        color.tinyColor,
        null,
        'json'
      ))
      .subscribe((response: ColorApiResponse) => {
        if (response.name &&
          response.name.value &&
          color.label !== response.name.value) {
          const config = getDialogConfig();

          config.data = {
            title: 'Recommended Color Name',
            colorName: response.name.value
          };

          const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

          dialogRef.afterClosed().subscribe(result => {
            if (result.confirm) {
              color.label = response.name.value;
              color.variable = StringHelper.generateVariableFromName(response.name.value);

              this.addPrimaryColorToGroup(color);

              this.addColorToSwatches(color);
            }
          });
        } else {
          color.variable = StringHelper.generateVariableFromName(color.label);

          this.addPrimaryColorToGroup(color);

          this.addColorToSwatches(color);
        }
      });
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

    this.deleteColorFromGroup(color);
  }

  startAddingColor() {
    const config = getDialogConfig();

    config.data = {
      title: 'Add new color',
      color: null
    };

    const dialog = this.dialog.open(AddEditColorDialogComponent, config);

    dialog.afterClosed().subscribe((result: { color: Color, form: FormGroup }) => {
      if (result.color) {
        result.color.tinyColor = new TinyColor(result.color.value);
        result.color.variable = StringHelper.generateVariableFromName(result.color.label);

        this.addColor(result.color);

        this.toastrService.success('Added new color');
      }
    });
  }

  // Generate color palettes
  generateAnalogous(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.analogic,
      'json',
      2
    );

    this.getAndCreateColors(request);
  }

  generateAnalogousComplimentary(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.analogicComplement,
      'json',
      2
    );

    this.getAndCreateColors(request);
  }

  generateComplementary(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.complement,
      'json',
      1
    );

    this.getAndCreateColors(request);
  }

  generateMonochromatic(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochrome,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  generateMonochromaticDark(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochromeDark,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  generateMonochromaticLight(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.monochromeLight,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  generateTriadic(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.triad,
      'json',
      2
    );

    this.getAndCreateColors(request);
  }

  generateQuadratic(color: Color) {
    const request = new ColorApiRequest(
      color.tinyColor,
      ColorSchemeTypes.quad,
      'json',
      3
    );

    this.getAndCreateColors(request);
  }

  getAndCreateColors(request: ColorApiRequest) {
    this.externalColorsApiGateway.getColorScheme(request)
      .subscribe((response: ColorApiResponse) => {
        // Cut out extra values returned by API
        response.colors.length = request.count;

        const colors = response.colors
          .filter(color => !!color)
          .map(color => {
            const newColor = new Color(
              color.name.value,
              color.name.value,
              color.hex.value,
              StringHelper.generateVariableFromName(color.name.value),
              new TinyColor(color.rgb.value)
            );

            // Find color group that matches the input color object on the request (primary color)
            if (this.supportingColorModes.indexOf(request.mode) > -1) {
              const group = this.groups.find((colorGroup: ColorGroup) => {
                const matchingColorGroup = colorGroup.colorSwatches.find(
                  (groupColor: Color) => {
                    return groupColor.value === `#${request.hex}`;
                  });

                return ObjectHelper.hasValue(matchingColorGroup);
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

  private addColorToSwatches(color: Color) {
    this.internalColorsApiGateway.create('', color)
      .subscribe(result => {
        color.id = result.id;

        this._colorSwatches.push(color);

        this.colorSwatches.next(this._colorSwatches);

        return color;
      });
  }

  private addPrimaryColorToGroup(color: Color) {
    const colorGroupLabel = `Primary color: ${color.label} (${color.value}) - Color Group`;

    this.groups.push(
      new ColorGroup(colorGroupLabel, [color])
    );
  }

  private addSupportingColorToGroup(group: ColorGroup, color: Color) {
    group.colorSwatches.push(color);
  }

  private deleteColorFromSwatches(color: Color) {
    const index = this._colorSwatches.findIndex(colorSwatch => colorSwatch.value === color.value);

    if (index < 0) {
      return;
    }

    this._colorSwatches.splice(index, 1);

    this.colorSwatches.next(this._colorSwatches);
  }

  private deleteColorFromGroup(color: Color) {
    const colorGroup = this.groups.find(group => group.title === color.groupName);
    const index = colorGroup.colorSwatches.findIndex(colorSwatch => colorSwatch.value === color.value);

    if (index < 0) {
      return;
    }

    colorGroup.colorSwatches.splice(index, 1);
  }
}
