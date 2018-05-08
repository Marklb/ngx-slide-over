import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'

import { NgxSlideOverModule } from '../lib'

import { AppComponent } from './app.component'
import { ExampleBottomComponent } from './example-bottom/example-bottom.component'
import { ExampleTopComponent } from './example-top/example-top.component'
import { ExampleTop2Component } from './example-top2/example-top2.component'
import { Level2ContainerComponent } from './level2-container/level2-container.component'
import { Level2Example1Component } from './level2-example1/level2-example1.component'
import { Level2Example2Component } from './level2-example2/level2-example2.component'

const routes: Routes = [
  {
    path: 'example',
    component: ExampleTopComponent,
    children: [
      {
        path: 'level2-example1',
        component: Level2Example1Component,
      },
      {
        path: 'level2-example2',
        component: Level2Example2Component,
      },
    ]
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
    ExampleTop2Component,
    Level2ContainerComponent,
    Level2Example1Component,
    Level2Example2Component
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
