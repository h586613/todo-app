import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'YOUR_API_URL_HERE'; // Replace with your Rest-API URL

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/todos/${id}`);
  }

  addTodo(description: string, summary: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/todos`, { description, summary });
  }
}
