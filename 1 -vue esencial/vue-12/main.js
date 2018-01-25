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
            axios.get(url)
            .then((respuesta) => { 
                //console.log(respuesta);
                this.mensaje = respuesta.data.results;
            });
        }
    }
});