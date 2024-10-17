import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoComponent, FormsModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [];
  localTodos = localStorage.getItem('todos');
  constructor() {
    if(this.localTodos){
      this.todos = JSON.parse(this.localTodos);
    }
  }
  CompleteTodo(todo: Todo){
    this.todos = this.todos.map(t => {
      if(t.id === todo.id){
        return {
          ...t,
          completed: !t.completed
        }
      }
      return t;
    })
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  DeleteTodo(todo: Todo){
    const i = this.todos.indexOf(todo);
    this.todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  AddTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
}
