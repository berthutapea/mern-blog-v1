const initialStateHome = {
    dataBlog: [],
    page: {
        currentPage: 1,
        totalPage: 1
    }
}

const homeReducer = (state = initialStateHome, action) => {
    if (action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }

    if (action.type === 'UPDATE_PAGE') {
        return {
            ...state,
            page: action.payload
        }
    }

    return state;
}

export default homeReducer;