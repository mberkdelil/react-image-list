const initialState = {
    imageList: [],
    imageListError: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_IMAGE":
            return {
                ...state, imageList: action.payload
            }

        case "GET_IMAGE_ERROR":
            return {
                ...state, imageListError: action.payloaf
            }

        default:
            return state;
    }
}