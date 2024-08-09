import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';
import { TASKS } from '../../mock-tasks';
import { TodoInterface } from '../todo-interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  tasks:TodoInterface[] = [];
  constructor( private myService: FormService){

  }
  TaskForm = new FormGroup ({
 task:new FormControl  (" ")
  })
onSubmit(){

 this.myService.addTasks(this.TaskForm.value.task|| "");
 console.log(this.myService.getTasks())
}
  
  ngOnInit(): void {
  
    // this.myService.getTasks().subscribe( users =>{
    //   this.users=users;

    // this.TaskForm.value.task = this.tasks;

    console.log(this.tasks)

  }
}
