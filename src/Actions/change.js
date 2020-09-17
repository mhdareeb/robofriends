const change = (text) => {
    return ({
        type:'CHANGE_SEARCH_FIELD',
        payload:text
    })
}

export default change;