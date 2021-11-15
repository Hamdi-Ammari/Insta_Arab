const popUpReducer = (state=null,action) => {
    switch(action.type){
        case 'POPUP_ON':
            return action.payload
        case 'POPUP_OFF':
            return action.payload
        default:
            return state;
    }
}

export default popUpReducer;