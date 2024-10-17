import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<Todo>();

  id = 0;
  title = '';
  description = '';
  submit(){
    const todo = {
      id : this.id + 1,
      title: this.title,
      description: this.description,
      completed: false
    }
    this.id = this.id + 1;
    this.addTodo.emit(todo);
  }
}
