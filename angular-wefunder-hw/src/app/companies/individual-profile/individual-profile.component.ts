import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'src/app/shared/company';
import { Direction } from 'src/app/shared/direction';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-individual-profile',
  templateUrl: './individual-profile.component.html',
  styleUrls: ['./individual-profile.component.css'],
})
export class IndividualProfileComponent implements OnInit {
  currentSlide = 1;
  @Input() companyId = '';

  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  company: Company;

  imageUrlArray: Array<{ url: string }>;

  constructor(
    private companiesService: CompaniesService,
    private route: ActivatedRoute
  ) {
    this.company = <Company>{};
    this.imageUrlArray = [];
  }

  async ngOnInit(): Promise<void> {
    // if theres no company passed from parent get company from url
    if (!this.companyId) {
      this.companyId = this.route.snapshot.paramMap.get('companyId') as string;
    }
    this.company = await this.getCompany(this.companyId);

    // create image url array for slideshow
    this.imageUrlArray = this.mapImageUrls(this.company.deck);
  }

  /**
   * gets called on slide change
   * @param ngbSlideEvent - event with slide change details
   */
  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    this.currentSlide = Number(ngbSlideEvent.current) + 1;
    this.scrollToThumbnail(ngbSlideEvent.current);
  }

  /**
   * returns company by id
   */
  async getCompany(companyId: string) {
    return await this.companiesService.getCompany(companyId).toPromise();
  }

  /**
   * map deck into more useable format
   */
  mapImageUrls(deck: Array<{ imgUrl: string }>) {
    return deck.map((page) => ({ url: page.imgUrl }));
  }

  /**
   * go to next slide in slideshow
   */
  goToNext() {
    this.ngCarousel.next();
  }

  /**
   * go to previous slide in slideshow
   */
  goToPrev() {
    this.ngCarousel.prev();
  }

  /**
   * go to slide num
   */
  navigateToSlide(num: number) {
    const item = num.toString();
    this.ngCarousel.select(item);
  }

  /**
   * scroll thumnail container horizontally
   * @param elementId - id of html element
   */
  scrollToThumbnail(elementId: string) {
    elementId = 'thumbnail' + elementId;
    const el = document.getElementById(elementId);
    if (el)
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
  }

  /**
   * big scroll thumbnail bar
   */
  scrollToSide(direction: Direction) {
    const container = document.getElementById('scroller');
    if (!container) return;

    let widthOfSlider = container.offsetWidth;
    widthOfSlider = direction === 'right' ? widthOfSlider : -widthOfSlider;

    container.scrollBy(widthOfSlider * 0.85, 0);
  }
}
