var empates = 0
var victorias = 0
var derrotas = 0
var inputJugador= document.createElement('input')
var inputPC= document.createElement('input')
var divtu = document.getElementById("divtu")
var divpc = document.getElementById("divpc")
var seleccion = 0
var intentos = 1

var winresultado = document.getElementById('winresultado')
var lostresultado = document.getElementById('lostresultado')
var tieresultado = document.getElementById('tieresultado')
var divtable = document.getElementById('divtable')




inputJugador.id = "inputjugador"
inputPC.id = "inputPC"

function planificarJuego(){   
    const jugadas = document.getElementById('jugadas')
    const btnJugar = document.getElementById('btn-configurar')
    const parraforondas = document.getElementById('parraforondas')

    const h1jugador = document.getElementById('h1jugador')
    const h1pc = document.getElementById('h1pc')


    divtable.style.display = "block"
    btnJugar.style.display = "none"
    parraforondas.style.display = "none"
    jugadas.style.display = "none"





    const divJugar = document.getElementById('div-jugar')
    const piedra = document.createElement('input')
    const papel = document.createElement('input')
    const tijera = document.createElement('input')
    piedra.type = "image"
    piedra.id = "piedra"
    piedra.src = "images/piedra.png"
    piedra.classList.add("w-[50px]")
    piedra.classList.add("h-[100px]")
    piedra.classList.add("relative")
    piedra.classList.add("hover:scale-125")
    piedra.classList.add("top-[-10px]")
    piedra.classList.add("drop-shadow-[3px_9px_7px_rgba(0,0,0,0.25)]")
    piedra.setAttribute("onclick", "piedra()")
    divJugar.appendChild(piedra)

    papel.type = "image"
    papel.id = "papel"
    papel.src = "images/papel.png"
    papel.classList.add("w-[80px]")
    papel.classList.add("h-[50px]")
    papel.classList.add("hover:scale-125")
    papel.classList.add("rotate-90")
    papel.classList.add("drop-shadow-[3px_9px_7px_rgba(0,0,0,0.25)]")
    papel.setAttribute("onclick", "papel()")
    divJugar.appendChild(papel)

    tijera.type = "image"
    tijera.id = "tijera"
    tijera.src = "images/tijera.png"
    tijera.classList.add("w-[40px]")
    tijera.classList.add("h-[80px]")
    tijera.classList.add("relative")
    tijera.classList.add("top-[-5px]")
    tijera.classList.add("left-[10px]")
    tijera.classList.add("hover:scale-125")
    tijera.classList.add("drop-shadow-[3px_9px_7px_rgba(0,0,0,0.25)]")
    tijera.setAttribute("onclick", "tijera()")
    divJugar.appendChild(tijera)
}

function piedra(){

    h1jugador.style.display = "block"
    h1pc.style.display = "block"

    let computadora = aleatoriamente()
    seleccion = Number(jugadas.value)
    if(seleccion >= intentos){  
        intentos += 1
        inputJugador.type = "image"
        inputJugador.src = "images/piedra.png"
        inputJugador.classList.add("w-[80px]")
        inputJugador.classList.add("h-[100px]")

        let aletarorio
        if(computadora === 1){//PIEDRA
            inputPC.type = "image"
            inputPC.src = "images/piedra.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            empates += 1
            tie(empates)
        }else if(computadora === 2){//PAPEL
            inputPC.type = "image"
            inputPC.src = "images/papel.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            derrotas +=  1
            lost(derrotas)
        }else{//TIJERA
            inputPC.type = "image"
            inputPC.src = "images/tijera.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            victorias += 1
            win(victorias)       
        }
        divtu.appendChild(inputJugador)
        divpc.appendChild(inputPC)
        tablaresultados(intentos)
    }
    if(seleccion == (intentos-1)){
        reset()
    }
    
}

function papel(){    
    h1jugador.style.display = "block"
    h1pc.style.display = "block"

    let computadora = aleatoriamente()
    seleccion = Number(jugadas.value)
    if(seleccion >= intentos){  
        intentos += 1
        inputJugador.type = "image"
        inputJugador.src = "images/papel.png"
        inputJugador.classList.add("w-[80px]")
        inputJugador.classList.add("h-[100px]")
        let aletarorio
        if(computadora === 1){//PIEDRA
            inputPC.type = "image"
            inputPC.src = "images/piedra.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            victorias += 1
            win(victorias)
        }else if(computadora === 2){//PAPEL
            inputPC.type = "image"
            inputPC.src = "images/papel.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]") 
            empates +=  1
            tie(empates)
        }else{//TIJERA
            inputPC.type = "image"
            inputPC.src = "images/tijera.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            derrotas += 1
            lost(derrotas)       
        }
        divtu.appendChild(inputJugador)
        divpc.appendChild(inputPC)
        tablaresultados(intentos)
    }
    if(seleccion == (intentos-1)){
        reset()
    }
    
}

function tijera(){

    h1jugador.style.display = "block"
    h1pc.style.display = "block"
    let computadora = aleatoriamente()
    seleccion = Number(jugadas.value)
    if(seleccion >= intentos){
        intentos += 1
        inputJugador.type = "image"
        inputJugador.src = "images/tijera.png"
        inputJugador.classList.add("w-[80px]")
        inputJugador.classList.add("h-[100px]")
      
        let aletarorio
        if(computadora === 1){//PIEDRA
            inputPC.type = "image"
            inputPC.src = "images/piedra.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            derrotas += 1
            lost(derrotas)
        }else if(computadora === 2){//PAPEL
            inputPC.type = "image"
            inputPC.src = "images/papel.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]") 
 
            victorias +=  1         
            win(victorias)
        }else{//TIJERA
            inputPC.type = "image"
            inputPC.src = "images/tijera.png"   
            inputPC.classList.add("w-[80px]")
            inputPC.classList.add("h-[100px]")  
            empates += 1
            tie(empates)       
        }
        divtu.appendChild(inputJugador)
        divpc.appendChild(inputPC)
        tablaresultados(intentos)     
    }
    if(seleccion == (intentos-1)){
        reset()
    }
}

function aleatoriamente(){
    var computadora = Math.floor(Math.random() * 3)+1
    return computadora

}



function win(victorias){
    if(empates == null){
        winresultado.textContent = 0    

    }else{
        winresultado.textContent = victorias    
    }
}
function lost(derrotas){ 
    if(empates == null){
        lostresultado.textContent = 0     

    }else{
        lostresultado.textContent = derrotas     
    }
}
function tie(empates){  
    if(empates == null){
        tieresultado.textContent = 0     
    }else{
        tieresultado.textContent = empates     
    }
}


function tablaresultados(intentos){
    const table = document.getElementById('table')
    table.style.display = "flex"
    const intentosresultados = document.getElementById('intentosresultados')
    intentosresultados.textContent = intentos-1
   // console.log(intentos-1)
}

 function reset(){
    const btn_reset = document.getElementById('btn_reset')
    btn_reset.style.display = "flex" 
    const h1finalizado = document.getElementById('h1finalizado')
    h1finalizado.style.display = "flex"  
 }