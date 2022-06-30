name2="awesomeness2";
c1={
    name:"MERN",
    lang:"JavaScript",
    getDetails:function(){
        name:'Mern2';
        return "Names:"+name+" "+this.name+" "+name2
    },
    getDetails2:()=>{
        name:'Mern3'
        return `Names2:${name} ${this.name} ${this.name}`
    }
}

console.log(c1.getDetails2)