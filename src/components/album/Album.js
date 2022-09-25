import React from 'react';

const Album = (props) => {

    let {item:album}=props;
    return (
        <div>
            <hr/>
            <h4>User ID: {album.userId}, ID: {album.id}</h4>
            <p>Title: {album.title}</p>

        </div>
    );
};

export default Album;