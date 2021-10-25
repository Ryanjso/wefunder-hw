import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { slideContent } from 'src/app/shared/slideContent';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [OnboardingService],
})
export class MainComponent implements OnInit {
  constructor(
    public onboardingService: OnboardingService,
    private cdr: ChangeDetectorRef
  ) {}
  slideContent: slideContent;

  ngOnInit(): void {
    this.slideContent = <slideContent>{};
  }

  /**
   * get slide content for sidebar from children and update it
   */
  setSlideContent(slideContent: slideContent) {
    this.slideContent = slideContent;
    // need to manually redect changes after slide change
    this.cdr.detectChanges();
  }
}
