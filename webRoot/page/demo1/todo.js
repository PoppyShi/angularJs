//ng-app="todoApp"
angular.module('todoApp', [])
  .controller('TodoListController', function() {
	//this
    var todoList_this = this;
    //任务集合数据
    todoList_this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
    //新增任务方法
    todoList_this.addTodo = function() {
      todoList_this.todos.push({text:todoList_this.todoText, done:false});
      todoList_this.todoText = '';
    };
    //计算剩下多少任务方法
    todoList_this.remaining = function() {
      var count = 0;
      angular.forEach(todoList_this.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    //删除已完成的
    todoList_this.archive = function() {
      var oldTodos = todoList_this.todos;
      todoList_this.todos = [];
      angular.forEach(oldTodos, function(todo) {
    	  //剩下没有完成的任务数据
        if (!todo.done) todoList_this.todos.push(todo);
      });
    };
  });