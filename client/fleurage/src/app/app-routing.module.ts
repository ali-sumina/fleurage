import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Product } from './interface';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { EditinfoComponent } from './editinfo/editinfo.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path:'editinfo', component: EditinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
