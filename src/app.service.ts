import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todos: string[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  addTodo(todo: string) {
    this?.todos?.push(todo);
    return {
      message: "Todo added successfully"
    }
    
  }
  getTodos(){
    return this.todos;
  }
}
