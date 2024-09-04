import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'item-list-app';
}
