/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { Level2ContainerComponent } from './level2-container.component'

describe('Level2ContainerComponent', () => {
  let component: Level2ContainerComponent
  let fixture: ComponentFixture<Level2ContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2ContainerComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2ContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
