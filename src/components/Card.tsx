import * as React from 'react';

interface CardStatelessProps {
    id: number,
    name: string,
    email: string
}

const Card: React.FunctionComponent<CardStatelessProps> = ({id, name, email}) => {
    return (
        <div className='f3 br4 bg-light-green dib ma2 tc grow pa3 bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

export default Card;