import axios from "axios";

const citiesActions ={
    fetchearCiudades:()=>{
        return async(dispatch, getState) => {
            const res = await axios.get('https://back-mytinerary.onrender.com/api/allcities')
            console.log(res.data.response.ciudades)
            dispatch({type:'fetch', payload: res.data.response.ciudades})
        }
    },
    findOneCiudad: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get('https://back-mytinerary.onrender.com/api/allcities/'+id)
            console.log(res.data)
            dispatch({type: 'fetchOne', payload:res.data.respuesta })
        }
    },
    deleteCiudades:(id)=>{
        return async(dispatch, getState)=>{

            const res = await axios.delete('https://back-mytinerary.onrender.com/api/allcities/'+id)
    }
    },
    filterCity: (citiesArray, value)=>{
        return (dispatch, getState)=>{
            dispatch({type:'filtro', payload:{citiesArray, value}})
        }
    },
}
export default citiesActions