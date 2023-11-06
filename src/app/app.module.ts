import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { LayoutComponent } from './presentation/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
