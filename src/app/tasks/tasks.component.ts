import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="task-wrapper" *ngFor="let task of tasks">
      <p
        [ngStyle]="{
          'text-decoration': task.completed ? 'line-through' : 'none'
        }"
      >
        {{ task.name }}
      </p>
      <div class="icons-wrapper">
        <img src="assets/edit.svg" alt="edit" class="icon" />
        <img
          src="assets/delete.svg"
          alt="delete"
          class="icon"
          (click)="deleteTask(task)"
        />
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
    if (task.completed) {
      task.className = 'completed';
    } else {
      task.className = '';
    }
  }

  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
