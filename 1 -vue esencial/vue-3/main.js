new Vue({
    el:"main",
    
    data:{
        mensaje:["hola","como","estas","hoy","en ","dia"],
        tare:[
            {nombre:'hacer comprar', prioridad:'baja'},
            {nombre:'estudiar', prioridad:'alta'},
            {nombre:'jugar dota', prioridad:'muy alta'}
        ],
        persona:
            {nombre:"pedro",
             estudios:"primarios",
             categoria:"estudiante",
             dni:"7085454"
            }
        
    }
});