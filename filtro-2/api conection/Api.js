export const url = "http://localhost:3000/Departamentos"

//Obtener depertamentos de la api
export const getDepartamentos = async ()=>{
    try {
        const result = await fetch(url);
        const departamentos = await result.json()
        return departamentos
    } catch (error) {
        console.log(error);
    }
}

//Registrar nuevo departamento metodo HTTP (POST)
export const newDepartamento = async departamento =>{
    console.log(departamento);

    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(departamento),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html' //redireccionar para ver el nuevo departamento
    } catch (error) {
        console.log(error);
    }
}

//Eliminar Departamento metodo HTTP (DELETE)
export const deleteDepartamento = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE",
        })
    } catch (error) {
        console.log(error);
    }
}
//Editar departamento metodo HTTP (PUT)
export const editDepart = async (id, deparActualizado) =>{
    try {
        await fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(deparActualizado),
            headers : {
                'content-type':"application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}

//peticion para cargar ciudadesde a cada selector
export const url2 = "http://localhost:3000"

export const getCiudadesDepar = async (deparId)=>{
    try {
        const response = await fetch(`${url2}/Ciudades?DepartamentoId=${deparId}`)
        const ciudadesDepar = await response.json()
        return ciudadesDepar
    } catch (error) {
        console.log(error);
    }
}
//Peticion para registrar nueva ciudad metodo HTTP (POST)
export const newCiudad = async (ciudad)=>{
    console.log(ciudad);
    try {
        await fetch(`${url2}/Ciudades`,{
            method: "POST",
            body: JSON.stringify(ciudad),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}
//Peticion Para eliminar ciudad Metodo HTTP (DELETE)
export const deleteCiudad = async id =>{
    try {
        await fetch(`${url2}/Ciudades/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}
//Peticion Para editar Ciudad Metodo HTTP (PATCH)
export const editCiudad = async (id,ciudadActualizada)=>{
    try {
        await fetch(`${url2}/Ciudades/${id}`,{
            method: "PATCH",
            body:JSON.stringify(ciudadActualizada),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}