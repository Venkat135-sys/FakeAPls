import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiryaniComponent } from './biryani/biryani.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CooldrinkComponent } from './cooldrink/cooldrink.component';
import { DessertsComponent } from './desserts/desserts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'recipe',component:RecipeComponent,children:[
    {path:'biryani',component:BiryaniComponent},
    {path:'desserts',component:DessertsComponent},
    {path:'cooldrink',component:CooldrinkComponent}
  ]},
  {path:'Testing',component:TestingComponent},
  {path:'Test',component:TestComponent},
  {path:'',redirectTo:'/register',pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
