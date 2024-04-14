import { Component } from '@angular/core';

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
  tasks: string[] = [];

  constructor() {}

  ngOnInit(): void {}
  addTask() {
    if (this.newTask.trim() !== '') {
      console.log('Add new task:', this.newTask);
      this.tasks.push(this.newTask);
      this.newTask = '';
      console.log('List task after adding:', this.tasks);
    }
  }
}
