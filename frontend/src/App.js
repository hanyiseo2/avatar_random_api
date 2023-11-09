import React from 'react';

import AvatarList from './AvatarList';

const avatar1 = {
    "Name" : "Hanyi",
    "Author" : "Calvin",
}

const App = () => {
    return (
        <div className="app">
            <h1>Avatar Creating</h1>
            <div className="container">
                <AvatarList avatar1={avatar1}/>                    
            </div>
        </div>
    );
}

export default App;
