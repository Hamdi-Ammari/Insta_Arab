export const addCurrentId = (id) => {
    return {
        type:'ADD_ID',
        payload:id
    }
}

export const removeCurrentId = () => {
    return {
        type:'REMOVE_ID',
        payload:null
    }
}