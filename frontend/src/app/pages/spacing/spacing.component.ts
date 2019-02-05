import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Spacing} from '../../classes/spacing';

@Component({
  selector: 'sgg-spacing',
  templateUrl: './spacing.component.html'
})
export class SpacingComponent implements OnInit {
  // Public vars
  fonts: BehaviorSubject<Spacing[]> = new BehaviorSubject<Spacing[]>([]);

  // Private vars
  private _spacing: Spacing[] = [];

  constructor() { }

  ngOnInit() {
    this.spacing.next(this._spacing);

    this.spacing.subscribe(newColorSwatches => {
      this._spacing = newColorSwatches;
    });

    this._spacing.push(
      new Spacing('')
    );

    this.spacing.next(this._spacing);
  }

  addSpacing(spacing: Spacing): void {
    const conflicts = this.getSpacingConflicts(spacing);

    if (conflicts.hasValue) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    if (conflicts.hasLabel) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    this._spacing.push(spacing);

    this.spacing.next(this._spacing);
  }

  editSpacing(spacing: Spacing): void {
    this._spacing.forEach((existingSpacing: Spacing) => {
      if (existingSpacing.name === spacing.name) {
        Object.assign(existingSpacing, spacing);
      }
    });
  }

  deleteSpacing(spacing: Spacing): void {
    const index = this._spacing.findIndex((existingSpacing: Spacing) => {
      return existingSpacing.name === spacing.name;
    });

    this._spacing.splice(index, 1);

    this.spacing.next(this._spacing);
  }

  private getSpacingConflicts(spacing: Spacing) {
    let conflictedValue = false;
    let conflictedLabel = false;

    this._spacing.forEach((existingSpacing: Spacing) => {
      conflictedValue = spacing.name === existingSpacing.name && !conflictedValue;
      conflictedLabel = spacing.label === existingSpacing.label && !conflictedLabel;
    });

    return {
      hasValue: conflictedValue,
      hasLabel: conflictedLabel
    };
  }
}
