const vm1 = new Vue({
    el:"main",
    
    data:{
        mensaje:'hola como estas'
    },
    beforeUpdate(){
        console.log('beforeupdate', this.mensaje);
    },
    updated(){
        console.log('updated', this.mensaje);
    },
    methods: {
        alReves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
            vm2.mensaje = "hola que hace";
        }

    },
    computed:{
        mensajeMayus(){
            return this.mensaje.toUpperCase();
        }
    }

});
const vm2 = new Vue({
    el:"#app",
    data:{ 
        mensaje: 'hola perro',
    },



});
