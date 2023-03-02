const initialStateHome = {
    dataBlog: [],
}

const homeReducer = (state = initialStateHome, action) => {
    if (action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }

    return state;
}

export default homeReducer;