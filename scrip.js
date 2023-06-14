//funcion de interfaz de encabezado, para dispositivos medianos (encabezado)
const bar = document.getElementById('bar')
const close = document.getElementById('close') //aca podemos crear la variable del cierre del interfaz (encabezado)
const nav = document.getElementById('navbar')

if(bar){
  bar.addEventListener('click', () => {
     nav.classList.add('active')
    })

}

if(close){ //esta la funcion la que hace que salgamos de nuestro de interfaz (encabezado)
    close.addEventListener('click', () => {
       nav.classList.remove('active')
    })
  
}