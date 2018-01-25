new Vue({
    el:"main",
    
    data:{
        mensaje:[]
    },
    mounted(){
        this.cargarPersonas();
    },
    methods:{
        cargarPersonas(){
            var url=("https://randomuser.me/api/?results=506");
            this.$http.get(url)
            .then((respuesta) => { 
                console.log(respuesta);
                this.mensaje = respuesta.body.results;
            });
        }
    }
});