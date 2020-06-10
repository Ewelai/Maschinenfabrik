import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFromComponent } from './components/search/search-from/search-from.component';
import { SearchContentComponent } from './components/search/search-content/search-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFromComponent,
    SearchContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
