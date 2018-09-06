import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListeningItemComponent } from './components/listening-item/listening-item.component';
import { ListeningListComponent } from './components/listening-list/listening-list.component';
import { ListeningService } from './services/listening.service';
import { HttpModule } from '@angular/http';
import { ListeningItemPartComponent } from './components/listening-item-part/listening-item-part.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ListeningItemComponent,
    ListeningListComponent,
    ListeningItemPartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ListeningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
