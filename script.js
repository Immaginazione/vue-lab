const { createApp } = Vue

const app = createApp({
  data() {
    return {
      message:"bella ciao",
      subs:["beppe","lorenzoilmagnifico"],
      thunz: false,
      newSub:""
    }
  },  
  methods:{
    scriviTunz(event){
        this.message += " thunz"
        this.thunz = true
        console.log(event)
    },
    addSub(event){
        this.subs.push(this.newSub)
        this.newSub = ""
    }
  }
})

app.mount('#app')