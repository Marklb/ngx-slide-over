import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core'

import { NgxSlideOverContentTopDirective } from './directives/ngx-slide-over-content-top.directive'
import { NgxSlideOverContentDirective } from './directives/ngx-slide-over-content.directive'

import { animate, group, query, state, style, transition, trigger } from '@angular/animations'
import { ActivatedRoute, NavigationStart, Router } from '@angular/router'

export declare type NgxSlideOverDirections = 'right-to-left' | 'left-to-right'
  | 'top-to-bottom' | 'bottom-to-top' | 'top-left-to-bottom-right'
  | 'bottom-right-to-top-left' | 'top-right-to-bottom-left'
  | 'bottom-left-to-top-right'

@Component({
  selector: 'ngx-slide-over',
  templateUrl: './ngx-slide-over.component.html',
  styleUrls: ['./ngx-slide-over.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {optional: true}),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('500ms ease-in-out', style({ transform: 'translateX(0%)' }))
          ], {optional: true}),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class NgxSlideOverComponent implements OnInit {

  @ContentChild(NgxSlideOverContentDirective, {read: TemplateRef})
  public contentTpl: TemplateRef<NgxSlideOverContentDirective>

  @ContentChild(NgxSlideOverContentTopDirective, {read: TemplateRef})
  public contentTopTpl: TemplateRef<NgxSlideOverContentTopDirective>

  @Input()
  public showTop: boolean = false

  @Input()
  public direction: NgxSlideOverDirections = 'right-to-left'

  private _rState: boolean = true
  public rState: boolean = true
  public rState2: string
  public routeContainerVisible: boolean = false

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.url, this)
    this.router.events.subscribe(r => {
      // console.log(r)
      if (r instanceof NavigationStart) {
        // console.log(this)
        this.rState = !this.rState
      }
    })
  }

  public getState(outlet: any) {
    // console.log(outlet)
    let _rState: string = ''
    if (outlet.isActivated) {
      if (outlet.activatedRoute.children.length === 0) {
        const url = outlet.activatedRoute.snapshot.url.join('/')
        console.log('url', url)
        _rState = url
      } else {
        _rState = 'other'
      }
    } else {
      _rState = 'other1'
    }
    console.log('_rState', _rState)
    return _rState
    // return outlet.ActivatedRoute.state
  }

}
