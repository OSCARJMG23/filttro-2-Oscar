import { getDepartamentos, deleteDepartamento,getCiudadesDepar,deleteCiudad } from "../api conection/Api.js";

(function(){
    const listaDepar = document.querySelector('.lista')
    document.addEventListener('DOMContentLoaded', showDepartamentos)
    listaDepar.addEventListener('click', confirmDeleteDepar)
    // document.addEventListener('DOMContentLoaded',mostrarCiudades)
    const listaCiudades = document.querySelector('.listaCiudades')
    listaCiudades.addEventListener('click', confirmDeleteCiudad)


    async function showDepartamentos(){
        const departamentos = await getDepartamentos()
        console.log(departamentos);

        const contenedorDepartamentos = document.querySelector('.contenedorDepartamentos')
        departamentos.forEach((departamento)=>{
            const { id, nomDepartamento } = departamento
            const row = document.createElement('tr')
            row.innerHTML=`
            <td>${id}</td>
            <td>${nomDepartamento}</td>
            <td>
                <button type="button" data-id ="${id}" data-bs-toggle="modal" data-bs-target="#modalModificarDepartamentos"   value="Actualizar" class="btn btn-warning editar">Actualizar</button>
                <button type="button" data-departamento="${id}" class="btn btn-danger delete">Eliminar</button>
            </td>
            `
            contenedorDepartamentos.appendChild(row)
        })
    }
    function confirmDeleteDepar(e){
        if(e.target.classList.contains('delete')){
            console.log('Diste click en el boton de eliminar');
            const deparId = parseInt(e.target.dataset.departamento)
            const confirmar = confirm('Desea eliminar este departamento')
            if(confirmar){
                deleteDepartamento(deparId)
            }
        }
    }

    async function crearSelect(){
        try {
            const deparSelct = await getDepartamentos() 
            const selectorDepar = document.querySelector('#selectDepar')

            deparSelct.forEach((departamento)=>{
                const option = `
                <option value="${departamento.id}">${departamento.nomDepartamento}</option>
                `
                selectorDepar.innerHTML += option
            })
            selectorDepar.addEventListener('change', async(event)=>{
                let deparId = event.target.value
                console.log(deparId);
                await mostrarCiudades(deparId)
            })
        } catch (error) {
            console.log(error);
        }
    }
    async function crearSelectForm(){
        try {
            const deparSelct = await getDepartamentos()
            const selectorDeparForm = document.querySelector('#selectDeparForm')

            deparSelct.forEach((departamento)=>{
                const option = `
                <option value="${departamento.id}">${departamento.nomDepartamento}</option>
                `
                selectorDeparForm.innerHTML += option
            })

        } catch (error) {
            console.log(error);
        }
    }
    crearSelect()
    crearSelectForm()

    //Mostrar ciudades
    const contenedorCiudades = document.querySelector('.contenedorCiudades')
    async function mostrarCiudades(idDepar){
        contenedorCiudades.innerHTML=''
        const ciudades = await getCiudadesDepar(idDepar)
        console.log(ciudades);

        ciudades.forEach((ciudad)=>{
            const contenidoCiudad = `
            <div style='width:18rem;'>
            <img src="${ciudad.imagen}" style="width: 200px; height: 150;">
            <p>${ciudad.nomCiudad}</p>
            <button type="button" data-idCiudad ="${ciudad.id}" data-bs-toggle="modal" data-bs-target="#modalModificarCiudad"   value="Actualizar" class="btn btn-warning editCiudad">Actualizar</button>
            <button type="button" data-ciudad="${ciudad.id}" class="btn btn-danger deleteCiudad">Eliminar</button>
            </div>
            `
            contenedorCiudades.innerHTML += contenidoCiudad
        })
    }
    function confirmDeleteCiudad(e){
        e.preventDefault();

        if(e.target.classList.contains('deleteCiudad')){
            console.log('Diste Click en el boton de eliminar Ciudad');
            const ciudadId = parseInt(e.target.dataset.ciudad)
            const confirmCiudad = confirm('Desea Eliminar esta Ciudad?')
            if(confirmCiudad){
                deleteCiudad(ciudadId)
            }
        }
    }
    
        //funcion tabs
        const tabs = document.querySelectorAll('.tab_btn')
        const allContent = document.querySelectorAll('.content')
    
        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')})
                tab.classList.add('active')
    
                var line = document.querySelector('.line')
                line.style.width = e.target.offsetWidth + "px"
                line.style.left = e.target.offsetLeft + "px"
    
                allContent.forEach(content=>{content.classList.remove('active')})
                allContent[index].classList.add('active')
            })
    
    
        })

        


})()