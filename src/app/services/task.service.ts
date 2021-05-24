import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { TASKS } from '../mocks/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
