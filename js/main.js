var app = new Vue({
  el: '#app',
  data: {
    message: 'Hi there!',
    tasks: [
      {id:1, title:"Learn Vue.js", date: new Date(), done: false},
      {id:2, title:"Buy glasses", date: new Date(), done: true},
      {id:3, title:"Wash the car", date: new Date(), done:false},
      {id:4, title:"ASP.NET MVC - finish the tutorial and do the exeercises", date: new Date(), done: true},
      {id:5, title:"TRX training", date: new Date(), done: false},
    ]
  }
})
