const currentIdReducer = (state = null,action) => {
    switch(action.type) {
        case 'ADD_ID':
            return action.payload;
        case 'REMOVE_ID':
            return action.payload;
        default:
            return state
    }
}

export default currentIdReducer;