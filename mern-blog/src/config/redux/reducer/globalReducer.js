const initialState = {
    name: 'Gilbert'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Hutapea'
        }
    }
    return state;
}

export default globalReducer;