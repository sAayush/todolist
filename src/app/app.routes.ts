import { Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { AboutComponent } from './Components/about/about.component';

export const routes: Routes = [
    { path: 'home', component: TodosComponent },
    { path: 'about', component: AboutComponent },
];
