import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../shared/company';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  // where to send API reqs
  serverUrl = environment.apiUrl + '/api/';

  constructor(private http: HttpClient) {}

  // get single company by id
  getCompany(companyId: string) {
    return this.http.get<Company>(this.serverUrl + 'company/' + companyId);
  }

  // get all published companies
  getAllCompanies(): any {
    return this.http.get(this.serverUrl + 'company/getAll');
  }
}
