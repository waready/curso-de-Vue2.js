new Vue({
    el:"main",
    
    data:{
        mensaje:'anita laval atina',
        tareas: [{
            titulo:"aprende vue,js",
            prioridad:true,
            antiguedad: 23
        },
        {
            titulo:"aprende ES6",
            prioridad:false,
            antiguedad: 135
        },
        {
            titulo:"Ver memes",
            prioridad:true,
            antiguedad: 378
        }
        ]
    },
  
    computed:{
        mensajeAlreves:function() {
            return this.mensaje.split('').reverse().join('')
        },
        /*altaprioridad(){
            return this.tareas.filters(function(tarea){
                return tarea.prioridad;
            })
        }*/
        altaprioridad(){
           // return this.tareas.filter((tarea)=> tarea.prioridad)
            return this.tareas.filter((tarea)=> tarea.titulo.includes(this.mensaje));
        },
        tareasantiguas(){
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});