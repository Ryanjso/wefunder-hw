import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-nav-btns',
  templateUrl: './nav-btns.component.html',
  styleUrls: ['./nav-btns.component.css'],
})
export class NavBtnsComponent implements OnInit {
  @Output() nextPage = new EventEmitter<boolean>();

  constructor(private onboardingService: OnboardingService) {}

  ngOnInit(): void {}

  /**
   * tell parent component the user wants to visit next page
   */
  next() {
    this.nextPage.emit(true);
  }

  /**
   * if user is on first page in onboarding flow
   */
  isFirstPage(): boolean {
    return this.onboardingService.currentPageIndex() === 0;
  }

  /**
   * if user is on last page in onboarding flow
   */
  isLastPage(): boolean {
    return (
      this.onboardingService.currentPageIndex() ===
      this.onboardingService.pages.length - 1
    );
  }

  /**
   * go to previous page
   */
  goBack() {
    if (this.isFirstPage()) return;

    this.onboardingService.currentView =
      this.onboardingService.pages[
        this.onboardingService.currentPageIndex() - 1
      ];
  }
}
