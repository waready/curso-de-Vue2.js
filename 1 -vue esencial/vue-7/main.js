new Vue({
    el:"main",
    
    data:{
        minimo: 5,
        mensaje:'',
        juegos:[
        {   titulo:"Civilizacion VI",
            genero: "Estrategia",
            puntuacion: 10 
        },
        {   titulo:"Dota 2",
            genero: "Nova",
            puntuacion: 100
        },
        {   titulo:"feed",
        genero: "quipe",
        puntuacion: 50
        }
        ]
    },
    computed:{
        mejoresJuegos() {
            return this.juegos.filter((juego)=> juego.puntuacion >= this.minimo);	
           
         },
         buscarJuego(){
             return this.juegos.filter((items)=> items.titulo.includes(this.mensaje));
         }
       
    }
});

