import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  deadline: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private jsonUrl = 'assets/db.json';  // تأكد أن المسار صحيح

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.jsonUrl); // استخدم jsonUrl
  }

  toggleTaskCompletion(task: Task): Observable<any> {
    task.completed = !task.completed; // تغيير حالة المهمة
    return this.http.put(`${this.jsonUrl}/${task.id}`, task); // تحديث المهمة
  }

  getTasksDetails(): Observable<Task[]> {
    return this.http.get<Task[]>(this.jsonUrl);
  }
}
