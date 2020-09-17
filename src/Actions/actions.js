export const change = (text) => {
    return ({
        type:'CHANGE_SEARCH_FIELD',
        payload:text
    })
}

export const request = () => (dispatch) =>  {
    dispatch({type:'PENDING'})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(arr=> dispatch({type:'SUCCESS', payload:arr}))
    .catch(err=> dispatch({type:'ERROR', payload:err}))
}

