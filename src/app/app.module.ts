import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { SharedModule } from './shared/shared/shared.module';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';

@NgModule({
  declarations: [AppComponent, ImpressumComponent, DynamicPageComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
