import { Component } from '@angular/core';
import { CardComponent } from "../../units/card/card.component";
import { TableComponent } from "../../units/table/table.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit()
  {
    this.api.getproduct().subscribe((data:any)=>{this.products=data})
  }

}
