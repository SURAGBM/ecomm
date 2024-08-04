import { Component } from '@angular/core';
import { CorosalComponent } from "../../units/corosal/corosal.component";
import { TableComponent } from "../../units/table/table.component";
import { ParaComponent } from '../../units/para/para.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorosalComponent, TableComponent,ParaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
