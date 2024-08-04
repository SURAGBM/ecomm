import { Component } from '@angular/core';
import { TableComponent } from "../../units/table/table.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
