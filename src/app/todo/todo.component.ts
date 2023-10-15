import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

// Moved the Todo interface outside of the component class
interface Todo {
  id: number;
  description: string;
  summary: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // If you don't have a stylesheet for this component, then you can safely leave this commented out.
  // styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  // Declared properties for description and summary
  description: string = '';
  summary: string = '';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodos(); // Refresh todos after deleting
    });
  }

  addTodo(): void {
    this.todoService.addTodo(this.description, this.summary).subscribe(() => {
      this.fetchTodos(); // Refresh todos after adding
      this.description = '';
      this.summary = '';
    });
  }
}
