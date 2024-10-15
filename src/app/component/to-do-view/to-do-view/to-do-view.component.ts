import { Data } from 'json-server/lib/service';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/servics/task.service';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.css']
})
export class ToDoViewComponent implements OnInit {
// the data of tasks from api
  tasks: any[] = [];

  selectedTask: any = null;


  // to store the data to show the result of real time search
  searchTerm: string = '';

  constructor(private taskService: TaskService) {}



  ngOnInit() {
    this.taskService.getTasks().subscribe((response: any) => {
      console.log('API Response:', response); // Log the full response
      this.tasks = response.tasks || []; // Default to an empty array if tasks is undefined
    });
  }


  // to check the task is complete or no
  toggleCompletion(task:any) {
    this.taskService.toggleTaskCompletion(task).subscribe(() => {
    });
  }

  // the function of search bare "real time search "
  get filteredTasks() {
    return this.tasks.filter(task =>
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
}



deleteTask(taskId: number): void {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
}



openDetails(task: any) {
  this.selectedTask = task;
}

closeDetails() {
  this.selectedTask = null;
}



}
