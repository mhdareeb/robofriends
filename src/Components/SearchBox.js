import React from 'react';

const SearchBox = ({onInputChange})=>{
    return (
        <input className='br3 pa2 ma3' type='search' placeholder='search robots' onChange={onInputChange} />
    )
}

export default SearchBox;