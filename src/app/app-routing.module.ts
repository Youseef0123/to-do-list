import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoViewComponent } from './component/to-do-view/to-do-view/to-do-view.component';

const routes: Routes = [

  {path:'',redirectTo:'/tasks',pathMatch:'full'},
  {path:'tasks',component:ToDoViewComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
