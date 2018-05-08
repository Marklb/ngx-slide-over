/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { Level2Example2Component } from './level2-example2.component'

describe('Level2Example2Component', () => {
  let component: Level2Example2Component
  let fixture: ComponentFixture<Level2Example2Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2Example2Component ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2Example2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
