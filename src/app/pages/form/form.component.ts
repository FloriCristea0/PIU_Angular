import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      nume: [null],
      descriere: [null],
      cantitate: [null]
    });
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
