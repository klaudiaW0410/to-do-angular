import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="task" *ngFor="let task of tasks">
      <p>{{ task.name }}</p>
      <div class="icons-wrapper">
        <img src="assets/edit.svg" alt="edit" class="icon" />
        <img src="assets/delete.svg" alt="delete" class="icon" />
        <img
          src="assets/check.svg"
          alt="check"
          class="icon"
          (click)="completedTask(task)"
        />
      </div>
    </div>
  `,
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @Input() tasks: Task[] = [];

  ngOnInit(): void {
    console.log('All tasks:', this.tasks);
  }

  completedTask(task: Task) {
    task.completed = !task.completed;
    console.log('Task completed:', task);
  }
}
