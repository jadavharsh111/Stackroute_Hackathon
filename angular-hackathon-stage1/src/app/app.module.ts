import { HttpModule } from '@angular/http';
import { PostserviceService } from './postservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    GridComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PostserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
