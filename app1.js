class Trabajo
{
    constructor(ciclos)
    {
        this.ciclos=ciclos;
        this.siguiente=null;
    }
}

class FIFO
{
    constructor()
    {
        this.inicio=null;
    }

    Agregar(nuevo)
    {
        if (this.inicio==null)
        {
            this.inicio=nuevo;
        }
        else
        {
            let temp=this.inicio;
            while(temp.siguiente!=null)
                temp=temp.siguiente;
            temp.siguiente=nuevo;    
        }
    }

    Extraer()
    {
        let temp=this.inicio;
        if(this.inicio!=null)
        {
            this.inicio=this.inicio.siguiente;
            temp.siguiente=null;
        }
        return temp;
    }

    Ver()
    {
        return this.inicio;
    }
}

let cola=new FIFO();

for(let i=1; i<=300;i++)
{
    let probabilidad=Math.random()*100+1;
    if(probabilidad<=39)
    {
        let nuevo=new Trabajo(Math.floor(Math.random()*11+4));
        cola.Agregar(nuevo);
        console.log("el ciclo ", i, " se creo un nuevo proceso ", nuevo.ciclos);
    }
    if(cola.Ver()!=null)
    {
        cola.Ver().ciclos--;
        console.log(cola.Ver().ciclos);
        if(cola.Ver().ciclos==0)
        {
            console.log("el ciclo ", i, " se termino un proceso ");
            cola.Extraer();
        }
    }
}







/*function area(base, altura)
{
    return base*altura/2;
}

console.log(area(3,5)); 

const chalk = require('chalk');//inyeccion d dependencia

console.log(chalk.red('Hello world!'));*/

