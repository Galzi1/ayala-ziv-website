import React, { useState, useEffect } from 'react';

export default function Media(){
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetch('/api/media')
        .then(res => res.json())
        .then(data => {
            setPictures(data.pictures);
        });
      }, []);

    
    const renderPictures = () => {
        if (pictures) {
            return pictures.map((picture) => {
                return <li><img src={picture}/></li>
            })
        }
        else {
            return null;
        }
    };

    return(
        <div>
            <ul>
                {renderPictures()}
            </ul>
        </div>
    )
}