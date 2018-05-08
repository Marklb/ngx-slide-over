/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { ExampleTop2Component } from './example-top2.component'

describe('ExampleTop2Component', () => {
  let component: ExampleTop2Component
  let fixture: ComponentFixture<ExampleTop2Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTop2Component ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTop2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
