import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodosComponent } from './Components/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AddTodoComponent, TodoComponent, TodosComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  classnam = 'text-gray-300 hover:bg-gray-700 hover:text-white'
  isActive(className: string): boolean {
    const element = document.querySelector(`.${className}`);
    return !!element;
  }
}
