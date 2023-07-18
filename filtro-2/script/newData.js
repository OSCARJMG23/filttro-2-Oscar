import { newDepartamento, newCiudad } from "../api conection/Api.js";

const fomularioDepartamentos = document.querySelector('.formularioDepartamentos')
fomularioDepartamentos.addEventListener('submit', validateDepartamento)

function validateDepartamento(e){
    e.preventDefault()

    const nombreDepar = document.querySelector('#nombre-departamento').value

    const departamento = {
        nomDepartamento: nombreDepar
    }
    if(validate(departamento)){
        alert('Los campos son obligatorios')
        return
    }
    newDepartamento(departamento)
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !=='')
}

const formularioCiudades = document.querySelector('#formlarioCiudades')

formularioCiudades.addEventListener('submit', validateCiudad)

function validateCiudad(e){
    e.preventDefault()

    const idDepar = document.querySelector('#selectDeparForm').value
    const nombreCiudad = document.querySelector('#nombreCiudad').value
    const latitudCiudad = document.querySelector('#latitudCiudad').value
    const longitudCiudad = document.querySelector('#longitudCiudad').value

    const ciudad = {
        nomCiudad: nombreCiudad,
        DepartamentoId: parseInt(idDepar),
        imagen:  "./styles/img/imagenCiudad.jpg",
        coordenadas:{
            lat: parseFloat(latitudCiudad),
            lon: parseFloat(longitudCiudad) 
        }
    }
    if(validate(ciudad)){
        alert('Los campos son Obligatorios')
        return
    }

    newCiudad(ciudad)
    formularioCiudades.reset()
}