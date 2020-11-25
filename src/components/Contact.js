import React, { useState, useEffect } from 'react';

export default function Contact(){
    const [facebookLink, setFacebookLink] = useState("");

    useEffect(() => {
        fetch('/api/contact').then(res => res.json()).then(data => {
            setFacebookLink(data.facebook);
        });
      }, []);
    
    return(
        <div>
            <a href={facebookLink}>פייסבוק</a>
        </div>
    )
}