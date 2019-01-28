var app = new Vue({
  el: '#app',
  data: {
    message: 'Hi there!',
    newTask: '',
    tasks: [
      {id: 1, title: 'Learn Vue.js', date: new Date(), done: false},
      {id: 2, title: 'Buy glasses', date: new Date(), done: true},
      {id: 3, title: 'Wash the car', date: new Date(), done: false},
      {id: 4, title: 'ASP.NET MVC - finish the tutorial and do the exeercises', date: new Date(), done: true},
      {id: 5, title: 'TRX training', date: new Date(), done: false}
    ],
    finishedTasks: [],
  },
  methods: {
    addTask: function () {
      var app = this;
      if (app.newTask.length !== 0) {
        var newTask = {
          id: app.tasks.length + 1,
          title: app.newTask,
          date: new Date(),
          done: false
        }
        this.tasks.push(newTask);
        this.newTask = '';
      }
    },
    setTaskDone: function (task) {
      var index = this.tasks.indexOf(task);
      var item = this.tasks[this.index];
      this.finishedTasks.push(item);
      this.tasks.splice(index, 1);
    },
    deleteTask:function(task){
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index,1);
    }
  }
})
