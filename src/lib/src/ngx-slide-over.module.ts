import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { NgxSlideOverComponent } from './ngx-slide-over.component'

import { NgxSlideOverContentTopDirective } from './directives/ngx-slide-over-content-top.directive'
import { NgxSlideOverContentDirective } from './directives/ngx-slide-over-content.directive'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // BrowserAnimationsModule
  ],
  declarations: [
    NgxSlideOverComponent,
    NgxSlideOverContentTopDirective,
    NgxSlideOverContentDirective,
  ],
  exports: [
    NgxSlideOverComponent,
    NgxSlideOverContentTopDirective,
    NgxSlideOverContentDirective,
  ]
})
export class NgxSlideOverModule { }
