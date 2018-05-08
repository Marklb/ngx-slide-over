/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { NgxSlideOverComponent } from './ngx-slide-over.component'

describe('NgxSlideOverComponent', () => {
  let component: NgxSlideOverComponent
  let fixture: ComponentFixture<NgxSlideOverComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSlideOverComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlideOverComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
