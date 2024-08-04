import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductComponent } from '../../pages/product/product.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,ProductComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
