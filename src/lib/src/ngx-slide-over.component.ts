import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core'

import { NgxSlideOverContentTopDirective } from './directives/ngx-slide-over-content-top.directive'
import { NgxSlideOverContentDirective } from './directives/ngx-slide-over-content.directive'

import { animate, group, query, state, style, transition, trigger } from '@angular/animations'

// export function query(s, a) {
//   return q(s, a, {optional: true})
// }

// const query = (s, a) => {
//   return q(s, a, {optional: true})
// }

// const slideInOutAnimation =
//   trigger('slideInOutAnimation', [

//       // end state styles for route container (host)
//       state('*', style({
//           // the view covers the whole screen with a semi tranparent background
//           // position: 'fixed',
//           // top: 0,
//           // left: 0,
//           // right: 0,
//           // bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.8)',
//           color: 'green'
//       })),

//       // route 'enter' transition
//       transition(':enter', [

//           // styles at start of transition
//           style({
//               // // start with the content positioned off the right of the screen,
//               // // -400% is required instead of -100% because the negative position adds to the width of the element
//               // right: '-400%',

//               // // start with background opacity set to 0 (invisible)
//               // backgroundColor: 'rgba(0, 0, 0, 0)'
//               transform: 'translateX(100%)'
//           }),

//           // animation and styles at end of transition
//           animate('5000ms ease-in-out', style({
//               // transition the right position to 0 which slides the content into view
//               right: 0,

//               // transition the background opacity to 0.8 to fade it in
//               backgroundColor: 'rgba(0, 0, 0, 0.8)',
//               transform: 'none'
//           }))
//       ]),

//       // route 'leave' transition
//       transition(':leave', [
//           // styles at start of transition
//           style({
//             // // start with the content positioned off the right of the screen,
//             // // -400% is required instead of -100% because the negative position adds to the width of the element
//             // right: '-400%',

//             // // start with background opacity set to 0 (invisible)
//             // backgroundColor: 'rgba(0, 0, 0, 0)'
//             transform: 'none'
//           }),

//           // animation and styles at end of transition
//           animate('5000ms ease-in-out', style({
//               // // transition the right position to -400% which slides the content out of view
//               // right: '-400%',

//               // // transition the background opacity to 0 to fade it out
//               // backgroundColor: 'rgba(0, 0, 0, 0)'
//               transform: 'translateX(100%)'
//           }))
//       ])
//   ])

// export const slideInDownAnimation =
//   trigger('routeAnimation', [
//     state('*',
//       style({
//         opacity: 1,
//         transform: 'translateX(0)'
//       })
//     ),
//     transition(':enter', [
//       style({
//         opacity: 0,
//         transform: 'translateX(-100%)'
//       }),
//       animate('0.2s ease-in')
//     ]),
//     transition(':leave', [
//       animate('0.5s ease-out', style({
//         opacity: 0,
//         transform: 'translateY(100%)'
//       }))
//     ])
//   ])

export declare type NgxSlideOverDirections = 'right-to-left' | 'left-to-right'
  | 'top-to-bottom' | 'bottom-to-top' | 'top-left-to-bottom-right'
  | 'bottom-right-to-top-left' | 'top-right-to-bottom-left'
  | 'bottom-left-to-top-right'

@Component({
  selector: 'ngx-slide-over',
  templateUrl: './ngx-slide-over.component.html',
  styleUrls: ['./ngx-slide-over.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // animations: [slideInOutAnimation],
  // host: { '[@slideInOutAnimation]': '' }
  // animations: [
  //   trigger('animationTrigger', [
  //     // state('*', []),
  //     // state('*:leave', style({ opacity: 0 })),
  //     // state('*:enter', style({ opacity: 1 })),

  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate(1500, style({
  //         opacity: 1
  //       }))
  //     ]),

  //     transition(':leave', [
  //       style({ opacity: 1 }),
  //       animate(1500, style({
  //         opacity: 0
  //       }))
  //     ])
  //   ])
  // ]
  // animations: [ slideInDownAnimation ]
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        // query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
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

  // @HostBinding('@routeAnimation') routeAnimation = true
  // @HostBinding('style.display')   display = 'block'
  // @HostBinding('style.position')  position = 'absolute'

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
  public routeContainerVisible: boolean = false

  constructor() { }

  ngOnInit() { }

  public onActivateSlideOverRoute(event: any, rOutlet: any) {
    // console.log('onActivateSlideOverRoute', event, rOutlet)
    console.log('onActivateSlideOverRoute', event)
    // setTimeout(_ => {
    //   rOutlet.classList.add('top-shown')
    // })
    this._rState = !this._rState
    this.routeContainerVisible = true
  }

  public onDeactivateSlideOverRoute(event: any, rOutlet: any) {
    // console.log('onActivateSlideOverRoute', event, rOutlet)
    console.log('onActivateSlideOverRoute', event)
    // rOutlet.classList.remove('top-shown')
    // setTimeout(_ => {
    //   rOutlet.classList.add('top-shown')
    // })
    this._rState = !this._rState
    this.routeContainerVisible = false
  }

  getState(outlet) {
    // console.log(outlet.activatedRouteData.state)
    // return outlet.activatedRouteData.state
    // return outlet.activatedRouteData.url
    console.log(this._rState)
    return this._rState
  }

}
