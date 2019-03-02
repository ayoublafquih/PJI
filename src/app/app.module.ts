import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PrimeNgModule } from './library/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/components/toast/toast';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadAdvancedComponent } from './file-upload-advanced/file-upload-advanced.component';

import { MessageService } from 'primeng/components/common/messageservice';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadAdvancedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    PrimeNgModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
