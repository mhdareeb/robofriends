import React from  'react';
import 'tachyons';

const Card = ({id,name,email}) => {
    return (
        <div className='bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;