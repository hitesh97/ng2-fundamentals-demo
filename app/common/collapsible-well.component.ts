import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
    template:`
<div (click)="toggleContent()" class="well pointable">
  <h4 class="well-title">{{title}}</h4>
  <ng-content *ngIf="visible"></ng-content>
</div>
  `,
//   template:`
// <div (click)="toggleContent()" class="well pointable">
//   <h4 class="well-title">{{title}}
//     <ng-content select="title"></ng-content>
//   </h4>
//   <ng-content select="body" *ngIf="visible"></ng-content>
// </div>
//   `,
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible: boolean = true;
  
  toggleContent() {
    console.log('toggling', this.visible);
    this.visible = !this.visible;
  }
}



// SINGLE CONTENT PROJECTION SLOT
// @Component({
//   selector: 'collapsible-well',
//   template:`
// <div (click)="toggleContent()" class="well pointable">
//   <h4 class="well-title">{{title}}</h4>
//   <ng-content *ngIf="visible"></ng-content>
// </div>
//   `,
// })
// export class CollapsibleWellComponent {
//   @Input() title: string;
//   visible: boolean = true;
  
//   toggleContent() {
//     console.log('toggling', this.visible);
//     this.visible = !this.visible;
//   }
// }

