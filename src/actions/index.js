import axios from "axios"

export const getImage = (search) =>  dispatch => {
    axios.get(`https://pixabay.com/api/?key=21961130-192e072da7fb30043e0fcc703&q=${search}&image_type=photo`)
        .then(response => dispatch({ type: "GET_IMAGE", payload: response.data }))
        .catch(error => dispatch({ type: "GET_IMAGE_ERROR", payload: error }))
}