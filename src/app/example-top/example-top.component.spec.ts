/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { ExampleTopComponent } from './example-top.component'

describe('ExampleTopComponent', () => {
  let component: ExampleTopComponent
  let fixture: ComponentFixture<ExampleTopComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTopComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTopComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
