import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeadersComponent } from './components/headers/headers.component';



@NgModule({
  declarations: [
    HeadersComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    HeadersComponent
  ]

})
export class SharedModule { }
