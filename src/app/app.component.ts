import { Component } from '@angular/core';
import { sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild } from '@angular/animations';
// const query = (s, a, o = ) => q(s, a, o);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  animationType = {
    value: 'leftToRight',
    count: 2
  };

  triggerAnimation() {
    const type = this.toogleAnimationType().value;
    console.log(type);
    return type;
  }

  // Angular Checkes animation state two times - I don't know why
  toogleAnimationType() {
    if (this.animationType.count === 0) {
      this.animationType.value = this.animationType.value === 'leftToRight' ? 'rightToLeft' : 'leftToRight';
      this.animationType.count = 2;
    }
    this.animationType.count--;
    return this.animationType;
  }

}
