const initialState = {
    robots : [],
    isPending : false,
    error : false
}

const getRobots = (state=initialState, action={}) => {
    switch(action.type)
    {
        case 'PENDING':
            return Object.assign({}, state, {isPending:true})
        case 'SUCCESS':
            return Object.assign({}, state, {robots:action.payload, isPending:false})
        case 'ERROR':
            return Object.assign({}, state, {error:true})
        default :
            return state;
    }
    
}

export default getRobots;