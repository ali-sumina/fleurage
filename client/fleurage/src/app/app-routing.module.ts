import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Product } from './interface';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { CreateproductComponent } from './createproduct/createproduct.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path:'editinfo/:id', component: EditinfoComponent},
  {path: 'createproduct', component: CreateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//if(res){
//   this.router.navigate(['/admin']);
// }
// else{
//   this.router.navigate(['/home']);
//   alert("Wrong Password/User")
// }