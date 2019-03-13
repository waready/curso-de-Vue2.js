new Vue({
    el:"main",
    
    data:{
        nombres:[],
        name: '',
    },
   
    methods:{
        agregarTarea: function(){
        this.nombres.push(this.name);
        this.name = '';
        }
    }
});