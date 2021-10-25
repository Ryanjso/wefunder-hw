import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualProfileComponent } from './companies/individual-profile/individual-profile.component';
import { ViewAllComponent } from './companies/view-all/view-all.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { MainComponent } from './onboarding/main/main.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'raise',
    children: [
      { path: '', component: MainComponent },
      { path: 'all', component: ViewAllComponent },
      { path: ':companyId', component: IndividualProfileComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
