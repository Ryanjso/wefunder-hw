import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Company } from 'src/app/shared/company';
import { slideContent } from 'src/app/shared/slideContent';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup;
  attempedToSubmitForm = false; // if someone has attempted to submit form (next)

  // sidepanel information in main onborading component
  @Output() newSlide = new EventEmitter<slideContent>();
  slideContent: slideContent = {
    title: 'Tell us about your company',
    content:
      'The first step to raising money on Wefunder is learning more about you!',
    img: { fileName: 'basic-information.svg', alt: 'photo book' },
  };

  constructor(
    private onboardingService: OnboardingService,
    private fb: FormBuilder
  ) {
    this.basicInfoForm = this.fb.group({
      name: [this.onboardingService.company.name || '', Validators.required],
      description: [
        this.onboardingService.company.description || '',
        Validators.required,
      ],
    });
  }

  ngOnInit(): void {
    // tell main onboarding component to update sidebar to new info
    this.newSlide.emit(this.slideContent);
  }

  get name(): FormControl {
    return this.basicInfoForm.get('name') as FormControl;
  }
  get description(): FormControl {
    return this.basicInfoForm.get('description') as FormControl;
  }

  /**
   * if no errors, create/update the company and go to next step in flow
   */
  async nextPage() {
    this.attempedToSubmitForm = true;

    // if form invalid don't move on
    if (this.basicInfoForm.invalid) return;

    // update the company
    await this.modifyCompany();

    // go to next page in onboarding
    return this.onboardingService.nextPage();
  }

  /**
   * update or create new company if none exists
   */
  async modifyCompany() {
    const companyId = this.onboardingService.company._id;

    // if theres no company created yet create a new one
    this.onboardingService.company = !companyId
      ? await this.createNewCompany(this.basicInfoForm.value)
      : // else update current one
        await this.updateCompany(companyId, this.basicInfoForm.value);
  }

  /**
   * creates and returns new company
   */
  async createNewCompany(formVals: Company) {
    return await this.onboardingService.createCompany(formVals).toPromise();
  }

  /**
   * updates company and returns updated company
   */
  async updateCompany(companyId: string, formVals: Company) {
    return await this.onboardingService
      .updateCompany(companyId, formVals)
      .toPromise();
  }
}
