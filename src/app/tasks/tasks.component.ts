import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="task" *ngFor="let task of tasks">
      <p>{{ task }}</p>
    </div>
  `,
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @Input() tasks: string[] = [];

  ngOnInit(): void {
    console.log('All tasks:', this.tasks);
  }
}
