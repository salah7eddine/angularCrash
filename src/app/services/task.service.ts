import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { TASKS } from '../mocks/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
