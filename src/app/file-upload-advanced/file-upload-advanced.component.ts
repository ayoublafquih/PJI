import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../node_modules/primeng/components/common/messageservice';


@Component({
  selector: 'app-file-upload-advanced',
  templateUrl: './file-upload-advanced.component.html',
  styleUrls: ['./file-upload-advanced.component.css']
})
export class FileUploadAdvancedComponent {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload(event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onBasicUploadAuto(event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }
}
