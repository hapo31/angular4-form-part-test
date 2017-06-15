import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'app-parent',
    template: `
<div>
    <form [formGroup]="rootFormGroup" (ngSubmit)="onSubmit()">
        Title:<input formControlName="title"/>
        <app-child [parentForm]="rootFormGroup"></app-child>
        <button type="submit">submit</button>
    </form>
    <pre>{{dump}}</pre>
</div>
  `
})
export class ParentComponent {
    rootFormGroup: FormGroup;
    dump = '';
    constructor(private fb: FormBuilder) {
        this.rootFormGroup = fb.group({
            title: [''],
            addrFormArray: fb.array([
                fb.group({
                    name: [''],
                    address: [''],
                })
            ])
        });
    }
    public onSubmit() {
        this.dump = JSON.stringify(this.rootFormGroup.value, null, '\t');
    }
}
