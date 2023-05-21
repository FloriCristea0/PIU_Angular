import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-invetory',
  templateUrl: './invetory.component.html',
  styleUrls: ['./invetory.component.scss'],
})
export class InventoryComponent implements OnInit {
  error?: string;
  itemList!: Item[];
  items: string[] = [
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
    'John',
    'Maria',
  ];

  constructor(public dialog: MatDialog, public itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems().subscribe(
      (list: Item[]) => {
        this.itemList = list;
      },
      (err) => {
        this.error = err.message;
      }
    );
  }

  Delete(id?: number): void {
    if (!id) {
      return;
    }
    this.itemService.deleteItem(id).subscribe(
      () => {
        window.location.reload(); //refresh
      },
      (err) => {
        this.error = err.message;
      }
    );
  }
  
  async openDialog(id?: number) {
    if (typeof id !== 'number') {
      id = 0;
    }

    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: { itemid: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('New Item added!');
    });
  }

  ngOnInit(): void {this.getItems();}
}
