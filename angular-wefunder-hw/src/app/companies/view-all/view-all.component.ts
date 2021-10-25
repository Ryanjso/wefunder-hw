import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/company';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  companies: Array<Company>; // list of all published companies

  constructor(
    private companiesService: CompaniesService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.companies = await this.companiesService.getAllCompanies().toPromise();
  }

  /**
   * navigate to page of a company on click
   * @param companyId
   */
  goToSinglePage(companyId: string) {
    this.router.navigate(['raise', companyId]);
  }
}
