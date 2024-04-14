import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <app-add-task></app-add-task>
  </div>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-angular';
}
