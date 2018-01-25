new Vue({
    el:"main",
    
    data:{
        tareas:[
            {
                titulo:"ir de compras", completado: false
            },
            {
                titulo:"Aprender vuejs", completado:false
            },
            {
                titulo:"aprender sass ", completado:false
            },
            {
                titulo:"Aprender lesss", completado:false
            },
            {
                titulo:"Aprender invoker mid", completado:false
            }
        ]
    },
    methods:
    {
        completarTarea (tarea) {
            tarea.completado = !tarea.completado;
            console.log(tarea);         
        }
    },
    computed:{
        tareasE(){
            return this.tareas.filter((tarea)=> tarea.completado);
        }
    }
});