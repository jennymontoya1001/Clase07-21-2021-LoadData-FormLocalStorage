//CARGAR TARJETAS
import {data} from '../data/data.js'


 const templateCard = document.getElementById('template-card').content;
 const fragment = document.createDocumentFragment();
 const items = document.getElementById('items');

//addEventListener = escucha/controla los eventos
//DOMContentLoaded garantiza que nos llame la función cargarData luego de que cargue el DOM
document.addEventListener('DOMContentLoaded', () =>{
    cargarData(data);
})

//creamos función para cargar la data
const cargarData = data =>{
  console.log(data);
  data.forEach(heroe => {  //heroe es un objeto
  //desestructuración de objetos
    const {id,superhero,image} = heroe;
    templateCard.querySelector('h5').textContent = superhero;
    templateCard.querySelector('img').setAttribute('src',image);

    //Clonamos el template
     const clone = templateCard.cloneNode(true);

     fragment.appendChild(clone);
      
  })

  items.appendChild(fragment);
}

//FORMULARIO    
//AlmacenarLocalStorage nombre de la función

form.addEventListener('submit', function AlmacenarLocalStorage(){
    
    //Captura de datos y almacenamiento en vairables
    let inputName = document.getElementById('inputName').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let msm = document.getElementById('msm').value;

    if(inputName==="" || email=== "" || gender==="" || msm ===""){
         alert('Ingresar todos los campos');
    }else{

        localStorage.setItem('Nombre',inputName);
        localStorage.setItem('Email',email);
        localStorage.setItem('Género',gender);
        localStorage.setItem('Mensaje',msm);
        ObtenerLocalStorage();
    }
})

function ObtenerLocalStorage(){

    let nombre = localStorage.getItem('Nombre');
    let email = localStorage.getItem('Email');
    let genero = localStorage.getItem('Género');
    let mensaje = localStorage.getItem('Mensaje');
    alert(`La información almacenada es ${nombre}
    ${email}
    ${genero}
    ${mensaje}`);
}