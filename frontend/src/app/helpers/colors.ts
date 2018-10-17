import {ColorGroup} from '../classes/colorGroup';
import * as findColor from 'find-color';

export class ColorHelper {
  static colorGroups: ColorGroup[] = [
    new ColorGroup('red', '#ff0000', [255, 0, 0]),
    new ColorGroup('blue', '#0000ff', [0, 0, 255]),
    new ColorGroup('yellow', '#ffff00', [255, 255, 0]),
    new ColorGroup('green', '#00ff00', [0, 255, 0]),
    new ColorGroup('purple', '#800080', [128, 0, 128]),
    new ColorGroup('orange', '#ffa500', [255, 165, 0])
  ];

  static getColorGroupFromHex(color: string): ColorGroup {
    const closestColor = this.getClosestColorInColorsGroupsFromHex(color);

    return this.colorGroups.find(group => group.hex === closestColor);
  }

  static getColorGroupFromRGB(color: number[]): ColorGroup {
    const closestColor = this.getClosestColorInColorsGroupsFromRGB(color);

    return this.colorGroups.find(group => group.hex === closestColor);
  }

  private static getClosestColorInColorsGroupsFromHex(color: string): string | false {
    // Only color hex values as array from groups
    const colors = this.colorGroups.map(group => group.hex);
    const closestColor = findColor.fromHex(colors).find(color);

    // Return base encoded 16 string result or false (not found)
    return (closestColor >= 0 ? '#' + closestColor.toString(16) : false);
  }

  private static getClosestColorInColorsGroupsFromRGB(color: number[]): string | false {
    // Only color hex values as array from groups
    const colors = this.colorGroups.map(group => group.rgbTuple);
    const closestColor = findColor.fromRGB(colors).find(color);

    // Return base encoded 16 string result or false (not found)
    return (closestColor >= 0 ? '#' + closestColor.toString(16) : false);
  }
}
