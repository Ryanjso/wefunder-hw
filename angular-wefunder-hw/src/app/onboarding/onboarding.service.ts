import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from '../shared/company';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  pages = ['basic-info', 'upload-deck', 'preview']; // pages in onboarding flow

  currentView: string; // the page of the onboarding flow we are on

  // where to send API reqs
  serverUrl = environment.apiUrl + '/api/';

  company: Company;

  constructor(private http: HttpClient) {
    this.currentView = this.pages[0];
    this.company = <Company>{};
  }

  /**
   * @returns index of current page in onboarding flow
   */
  currentPageIndex() {
    return this.pages.findIndex((page) => page === this.currentView);
  }

  /**
   * Go to next page in onboarding flow
   */
  nextPage() {
    if (this.currentPageIndex() + 1 === this.pages.length) return;

    this.currentView = this.pages[this.currentPageIndex() + 1];
  }

  /**
   * creates company then returns it
   */
  createCompany(payload: { name: string; description: string }) {
    return this.http.post<Company>(
      this.serverUrl + 'company/newCompany',
      payload
    );
  }

  /**
   *
   * @param companyId
   * @param file - Buffer of either ppt or pdf
   * @returns modified company object
   */
  uploadDeck(companyId: string, formData: FormData) {
    return this.http.put<Company>(
      this.serverUrl + 'company/addDeck/' + companyId,
      formData
    );
  }

  /**
   * updates company and returns updated company
   */
  updateCompany(companyId: string, payload: Partial<Company>) {
    return this.http.put<Company>(
      this.serverUrl + 'company/modify/' + companyId,
      payload
    );
  }
}
