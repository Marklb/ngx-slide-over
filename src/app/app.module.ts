import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { NgxSlideOverModule } from '../lib'

import { AppComponent } from './app.component'
import { ExampleBottomComponent } from './example-bottom/example-bottom.component'
import { ExampleTopComponent } from './example-top/example-top.component'

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/example',
  //   pathMatch: 'full',
  // },
  {
    path: 'example',
    component: ExampleTopComponent,
    data: {
      state: 'meh'
    }
    // children: [
    //   {

    //   }
    // ],
  },
  // { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ExampleTopComponent,
    ExampleBottomComponent
  ],
  imports: [
    BrowserModule,
    NgxSlideOverModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
