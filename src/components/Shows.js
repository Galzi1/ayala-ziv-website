import React, { useState, useEffect } from 'react';

export default function Shows(){
    const [upcomingShows, setUpcomingShows] = useState([]);

    useEffect(() => {
        fetch('/api/shows')
        .then(res => res.json())
        .then(data => {
            setUpcomingShows(data.shows);
        });
      }, []);

    
    const renderUpcomingShows = () => {
        if (upcomingShows) {
            return upcomingShows.map((show) => {
                return <li><p>{show}</p></li>
            })
        }
        else {
            return null;
        }
    };

    return(
        <div>
            <ul>
                {renderUpcomingShows()}
            </ul>
        </div>
    )
}