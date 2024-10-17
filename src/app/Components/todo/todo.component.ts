import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo: Todo = new Todo();
  @Output() CompleteTodo = new EventEmitter<Todo>();
  @Output() DeleteTodo = new EventEmitter<Todo>();
  completed(){
    this.CompleteTodo.emit(this.todo);
  }
  delete(){
    this.DeleteTodo.emit(this.todo);
  }
  constructor() {}
}
