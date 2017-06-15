import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
<div>
    <form [formGroup]="parentForm">
        <div formArrayName="addrFormArray">
            <button (click)="add()">+Add</button>
            <ng-container *ngFor="let control of addrFormArray.controls;let i=index;">
                <div formGroupName="{{i}}">
                    Name:<input formControlName="name"/>
                    Address:<input formControlName="address"/>
                </div>
            </ng-container>
        </div>
    </form>
</div>
  `
})
export class ChildComponent {
  @Input() parentForm: FormGroup;

  public get addrFormArray(): FormArray {
    return this.parentForm.get('addrFormArray') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  public add() {
    this.addrFormArray.push(
      this.fb.group({
        name: [''],
        address: ['']
      })
    );
  }
}
