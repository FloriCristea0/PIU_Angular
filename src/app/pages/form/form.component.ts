import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

export interface DialogData{
  idToBeEdited: number;
  itemid :number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  private itemToEdit : Item = new Item();

  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private formBuilder: FormBuilder, public itemService: ItemService) {}

  ngOnInit(): void {
    if (this.data.itemid != 0)
     this.setEditForm(this.data.itemid);
    this.createForm();
  }

private setEditForm(id : number) : void {
  this.itemService.getItemById (id).subscribe(
    (item: Item) => {
      this.itemToEdit = item;
      this.form.patchValue(item!,{
      });
    }
  )
}

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null],
      number: [null],
      category: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  Edit(item:Item): void {
    this.itemService.editItem(item).subscribe(() => {
      window.location.reload(); //refresh
    });
    }

  Save(item:Item): void{
    this.itemService.postItem(item).subscribe(() =>{
      window.location.reload(); 
    });
  }

  saveItem(): void {
    const newItem: Item = {
      ...this.itemToEdit,
      ...this.form.getRawValue()
    };
    if(this.data.idToBeEdited == 0)
      this.Save(newItem);
    else
      this.Edit(newItem);
  }
}