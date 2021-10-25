import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { slideContent } from 'src/app/shared/slideContent';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  // sidepanel information in main onborading component
  @Output() newSlide = new EventEmitter<slideContent>();
  slideContent: slideContent = {
    title: 'Everything look good?',
    content:
      "When you're ready, publish your deck and start raising money from your customers",
    img: { fileName: 'preview.svg', alt: 'checkboard with green check' },
  };

  constructor(
    public onboardingService: OnboardingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // tell main onboarding component to update sidebar to new info
    this.newSlide.emit(this.slideContent);
  }

  /**
   * mark company as published in db
   * navigate user to published page
   */
  async publish() {
    const payload = { published: true };
    await this.onboardingService
      .updateCompany(this.onboardingService.company._id, payload)
      .toPromise();

    // navigate to published companys page
    this.router.navigate(['raise', this.onboardingService.company._id]);
  }
}
