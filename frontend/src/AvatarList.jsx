import React from 'react';

const AvatarList = ({avatar1}) => {
    return (
        <div className="avatar">
            <div>
                <p>avatar</p>
            </div>

            <div>
                <img src={avatar1.Name} alt={avatar1.Author} /> 
            </div>
        </div>
    )
}

export default AvatarList;