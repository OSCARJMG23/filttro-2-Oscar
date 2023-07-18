import { editDepart, url, editCiudad, url2 } from "../api conection/Api.js";

const formularioDeparM = document.querySelector('#formularioDeparM')

document.addEventListener('click', async function (event){
    if(event.target.classList.contains('editar')){
        const idDepar = event.target.getAttribute("data-id")
        console.log(idDepar);

        try {
            const response = await fetch(`${url}/${idDepar}`)
            const departamento = await response.json()

            formularioDeparM.setAttribute('data-id',idDepar)
            document.querySelector('#nombreDeparM').value =departamento.nomDepartamento
        } catch (error) {
            console.log(error);
        }
    }
})

formularioDeparM.addEventListener('submit', async (event)=>{
    event.preventDefault()

    const deparId = event.target.getAttribute("data-id")
    const nombreDeparA = document.querySelector('#nombreDeparM').value

    const deparActualizado = {
        nomDepartamento: nombreDeparA
    }
    await editDepart(deparId, deparActualizado)
})

const formularioCiudadM = document.querySelector('#formularioCiudadM')

document.addEventListener('click', async function(event){
    if(event.target.classList.contains('editCiudad')){
        const idCiudad = event.target.getAttribute("data-idCiudad")
        console.log(idCiudad)

        try {
            const response = await fetch(`${url2}/Ciudades/${idCiudad}`)
            const ciudad = await response.json()

            formularioCiudadM.setAttribute('data-idCiudad', idCiudad)
            // document.querySelector('#selectDeparForm').value = ciudad.departamentoId
            document.querySelector('#nombreCiudadM').value = ciudad.nomCiudad
            document.querySelector('#latitudCiudadM').value = ciudad.coordenadas.lat
            document.querySelector('#longitudCiudadM').value = ciudad.coordenadas.lon

        } catch (error) {
            console.log(error);
        }
    }
})

formularioCiudadM.addEventListener('submit', async (event)=>{
    event.preventDefault()

    const ciudadId = event.target.getAttribute('data-idCiudad')

    const nombreCiudadN = document.querySelector('#nombreCiudadM').value
    const latitudCiudadN = document.querySelector('#latitudCiudadM').value
    const longitudCiudadN = document.querySelector('#longitudCiudadM').value

    const ciudadActualizada = {
        nomCiudad: nombreCiudadN,
        coordenadas:{
            lat :parseFloat(latitudCiudadN),
            lon : parseFloat(longitudCiudadN)
        }
    }
    await editCiudad(ciudadId,ciudadActualizada)
})

