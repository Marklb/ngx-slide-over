import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'

import { NgxSlideOverModule } from '../lib'

import { AppComponent } from './app.component'
import { ExampleBottomComponent } from './example-bottom/example-bottom.component'
import { ExampleTopComponent } from './example-top/example-top.component'
import { ExampleTop2Component } from './example-top2/example-top2.component'

const routes: Routes = [
  {
    path: 'example',
    component: ExampleTopComponent,
  },
  {
    path: 'example2',
    component: ExampleTop2Component,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ExampleTopComponent,
    ExampleBottomComponent,
    ExampleTop2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSlideOverModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
