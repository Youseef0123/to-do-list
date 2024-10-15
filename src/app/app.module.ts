import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoViewComponent } from './component/to-do-view/to-do-view/to-do-view.component';
import { FormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    ToDoViewComponent,
    // MatDialogModule,
    // MatButtonModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
