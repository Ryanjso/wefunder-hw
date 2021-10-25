import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { slideContent } from 'src/app/shared/slideContent';

import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-upload-deck',
  templateUrl: './upload-deck.component.html',
  styleUrls: ['./upload-deck.component.css', './loader.css'],
})
export class UploadDeckComponent implements OnInit {
  fileUploadLoading = false; // for displaying loader
  filename: string; // name of file being uploaded for display
  nextPageAttempted = false; // if the user has pressed the next button. for display purposes
  errorMessage: string; // error message back from server if any

  // sidepanel information in main onborading component
  @Output() newSlide = new EventEmitter<slideContent>();
  slideContent: slideContent = {
    title: 'Share your pitch',
    content: "We can't wait till help you show your pitch off to the world!",
    img: {
      fileName: 'upload-deck.svg',
      alt: 'folder or file being uploaded to the cloud',
    },
  };

  constructor(public onboardingService: OnboardingService) {
    this.filename = '';
    this.errorMessage = '';
  }

  // see https://www.npmjs.com/package/ngx-file-drop for full documentation
  public dropped(files: NgxFileDropEntry[]) {
    // clear any error message on reupload
    this.errorMessage = '';

    const droppedFile = files[0];
    const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
    fileEntry.file(async (file: File) => {
      // create FormData and add file information
      const formData = new FormData();
      formData.append('deck', file, droppedFile.relativePath);
      this.filename = droppedFile.relativePath;

      // show file loader
      this.fileUploadLoading = true;

      // upload file to server and save to company
      const companyId = this.onboardingService.company._id;
      const updatedCompany = await this.uploadFile(companyId, formData);
      if (updatedCompany) this.onboardingService.company = updatedCompany;

      // hide file loader
      this.fileUploadLoading = false;
    });
  }

  ngOnInit(): void {
    // tell main onboarding component to update sidebar to new info
    this.newSlide.emit(this.slideContent);
  }

  /**
   * uploads deck and returns company with deck
   */
  async uploadFile(companyId: string, formData: FormData) {
    try {
      return await this.onboardingService
        .uploadDeck(companyId, formData)
        .toPromise();
    } catch (e: any) {
      this.errorMessage = e.statusText;
    }
  }

  /**
   * goes to next page in onboarding flow if no errors
   */
  nextPage() {
    this.nextPageAttempted = true;
    // if there is a slide deck allow it
    if (this.onboardingService.company.deck.length > 0) {
      // go to next page in onboarding
      return this.onboardingService.nextPage();
    }
  }
}
