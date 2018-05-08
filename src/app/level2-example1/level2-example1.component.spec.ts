/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { Level2Example1Component } from './level2-example1.component'

describe('Level2Example1Component', () => {
  let component: Level2Example1Component
  let fixture: ComponentFixture<Level2Example1Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2Example1Component ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2Example1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
