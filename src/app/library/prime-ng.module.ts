import { NgModule } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

const PrimeNgComponent = [FileUploadModule];

@NgModule({
  imports: [PrimeNgComponent],
  exports: [PrimeNgComponent]
})
export class PrimeNgModule { }
