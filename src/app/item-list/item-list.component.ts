import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ItemService } from '../item.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,
    MatPaginator,
    MatSort,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
  providers:[ItemService]
})
export class ItemListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
