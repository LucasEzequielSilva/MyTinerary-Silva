import axios from 'axios';
const activitiesActions = {


    activityPerItinerary: (id) => {
        console.log(id)
        return async (dispatch, getState) => {
            try {
                const res = await axios.get('http://localhost:4000/api/itineraryActivities/' + id)
                console.log(res.data)
                return { success: true, response: res.data.response }

            } catch (error) {
                console.log(error)
            }
        }
    },


    getOneActivity: (id) => {
        return async (dispatch, getState) => {

            const res = await axios.get('http://localhost:4000/api/activities/' + id)

            return res
        }
    },


}

export default activitiesActions;