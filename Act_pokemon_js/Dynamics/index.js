class Entrenador{
    constructor(Nombre, RegOrigen, Medallas, equipo)
    {
        this.Nombre=Nombre;
        this.RegionOrigen=RegOrigen;
        this.Medallas=Medallas;
        this.Equipo=equipo;
    };
    Duelo(Entrenador)
	{
		console.log(this.Nombre+" se enfrenta a "+Entrenador2.Nombre);
        console.log("Sus pokémones son: "+this.Equipo[0]+ " VS "+Entrenador2.Equipo[0]+" respectivamente");
	};
}

class Pokemon{
     constructor(Nombre, Vida, Ataque, AEspecial, Defensa, DEspecial, Velocidad, Tipo, Movimientos)
     {
        this.Nombre=Nombre;
        this.Vida=Vida;
        this.Ataque=Ataque;
        this.AtaqueEspecial=AEspecial;
        this.Defensa=Defensa;
        this.DefensaEspecial=DEspecial;
        this.Velocidad=Velocidad;
        this.Tipo=Tipo;
        this.Movimientos=Movimientos;
     };
     Atacar(Pikachu)
     {
        if(Pikachu2.Vida<this.Vida)
        {
            console.log("El ganador es: "+this.Nombre);
        }else{
            console.log("El ganador es: "+Pikachu2.Nombre);
        }
     };
};

class Ataques{
    constructor(Potencia, Probabilidad, Tipo)
    {
        this.Potencia=Potencia;
        this.Probabilidad=Probabilidad;
        this.Tipo=Tipo;
    };
     AtaqueRes(Ataques)
    {
        if(this.Tipo=="Electrico")
        {
            Pikachu1.Vida=55;
        }else{
            Pikachu1.Vida=80;
        }
        console.log("Vida "+Ataques.Nombre+": "+Ataques.Vida);
    };
};
let equipo1 =["Pikachu(1) ", "Raichu ", "Squirtle ", "Charmander ", "Charizard ", "Sandshrew "];
let equipo2 =["Pikachu(2) ", "Squirtle ", "Bulbasaur ", "Venusaur ", "Wartortle ", "Ivysaur "];
let Entrenador1=new Entrenador("Kaz", "Ketterdam", 16 , equipo1);
let Entrenador2=new Entrenador("Jude", "Elfhame", 12, equipo2)
console.log (Entrenador1);
console.log (Entrenador2);
Entrenador1.Duelo(Entrenador2);
alert("El duelo ha empezado");	
let Pikachu1=new Pokemon("Pikachu(1)", 100, 80, 75, 50, 60, 120, "principal",4);
let Pikachu2=new Pokemon("Pikachu(2)",100, 80, 75, 50, 60, 120, "principal",4);
console.log(Pikachu1); 
console.log(Pikachu2);
alert("los pokemon estan listos");	
let AtaquePK1=new Ataques(80, 35, "Velocidad");
let AtaquePK2=new Ataques(55, 75, "Electrico");
console.log(Pikachu1.Nombre+" ataca primero: Potencia:"+AtaquePK1.Potencia+"  Probabilidad:"+AtaquePK1.Probabilidad+" Tipo:"+AtaquePK1.Tipo);
console.log(Pikachu2.Nombre+" responde: Potencia:"+AtaquePK2.Potencia+" Probabilidad:"+AtaquePK2.Probabilidad+" Tipo:"+AtaquePK2.Tipo);
AtaquePK1.AtaqueRes(Pikachu1);
AtaquePK2.AtaqueRes(Pikachu2);	
Pikachu1.Atacar(Pikachu2);
const parrafo = document.createElement("p");
parrafo.classList.add("ganador");
parrafo.innerHTML ="¡¡El ganador es Pikachu(2)!!";
console.log("El pokémon que será eliminado es: "+Pikachu1.Nombre);
let equipoPerdedor =equipo1.slice(1);
console.log("El equipo del entrenador "+Entrenador1.Nombre+" es: "+equipoPerdedor);


