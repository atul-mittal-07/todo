import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from './../../model/Todo';
import {v4 as uuidv4} from "uuid";
import {ToastrService} from "ngx-toastr"
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
title: string;
  constructor(private todoService: TodoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  handleAddTodo(){
    if (this.title) {
      const newTodo:Todo = {
        id: uuidv4(),
        title: this.title,
        date: new Date(),
        isCompleted: false,
      }
      this.todoService.addTodo(newTodo);
      this.toastr.success('Todo Added');
      this.title='';
    }
    else{
      this.toastr.error('Empty Todo');
    }

  }
}
