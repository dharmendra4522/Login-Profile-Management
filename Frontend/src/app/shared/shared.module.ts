import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeadersComponent } from './components/headers/headers.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    HeadersComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    HeadersComponent,
    MaterialModule
  ]

})
export class SharedModule { }
