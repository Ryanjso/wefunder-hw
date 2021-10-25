import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { MainComponent } from './onboarding/main/main.component';
import { BasicInfoComponent } from './onboarding/basic-info/basic-info.component';
import { UploadDeckComponent } from './onboarding/upload-deck/upload-deck.component';
import { PreviewComponent } from './onboarding/preview/preview.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { NavBtnsComponent } from './onboarding/nav-btns/nav-btns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { IndividualProfileComponent } from './companies/individual-profile/individual-profile.component';
import { ViewAllComponent } from './companies/view-all/view-all.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    BasicInfoComponent,
    UploadDeckComponent,
    PreviewComponent,
    LandingPageComponent,
    NavBtnsComponent,
    IndividualProfileComponent,
    ViewAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
