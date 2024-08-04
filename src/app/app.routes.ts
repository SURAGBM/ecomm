import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './units/table/table.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutComponent } from './pages/about/about.component';
export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'product',component:ProductComponent},
    {path:'about',component:AboutComponent}

]
