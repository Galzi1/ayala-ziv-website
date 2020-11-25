import React, { useState, useEffect } from 'react';

export default function About(){
    const [aboutText, setAboutText] = useState("");

    useEffect(() => {
        fetch('/api/about').then(res => res.json()).then(data => {
            setAboutText(data.text);
        });
      }, []);

    return(
        <div>
            <p>
                {aboutText}
            </p>
        </div>
    )
}