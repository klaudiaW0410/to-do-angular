import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  template: `<form action="">
      <input
        type="text"
        placeholder=" add task"
        [(ngModel)]="newTask"
        name="newTask"
      />
      <button (click)="addTask()" type="button">Add task</button>
    </form>
    <app-tasks [tasks]="tasks"></app-tasks>`,
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  newTask: string = '';
  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {}
  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false,
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }
}
