import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  error?: string;
  itemList!: Item[];
  items : string[] = [
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria"
  ]

  constructor(public dialog: MatDialog, public itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems().subscribe((list:Item[]) => {
      this.itemList = list;
    }, (err: { message: string | undefined; }) => {
        this.error = err.message;
    })
  }

  async openDialog() {
    const dialogRef = this.dialog.open( Component , {
      width: '250px',
      data: { items: this.items },
    });

  dialogRef.afterClosed().subscribe(() => {
    console.log('The dialog was closed.')
  })
  }

  ngOnInit(): void {
      
  }
}
