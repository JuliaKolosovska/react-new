import React, {useState} from 'react';
import Todo from "../todo/Todo";
import Album from "../album/Album";

const Albums = () => {
    let [albums, setAlbums]= useState([]);
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(value => value.json())
        .then(value=>{
            setAlbums(value);
        });
    return (
        <div>
            <h3>Albums</h3>

            {albums.map((album, index)=><Album item={album} key={index}/>)}
        </div>
    );
};

export default Albums;