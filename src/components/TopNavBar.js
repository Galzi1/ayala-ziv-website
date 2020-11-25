import React, { useState, useEffect } from 'react';
import '../styles/TopNavBar.css';

export default function TopNavBar(props){
    const currentRoute = props.currentRoute;

    const [isAboutActive, setIsAboutActive] = useState(false);
    const [isShowsActive, setIsShowsActive] = useState(false);
    const [isMediaActive, setIsMediaActive] = useState(false);
    const [isContactActive, setIsContactActive] = useState(false);

    useEffect(() => {
        if (currentRoute) {
            onRoute(currentRoute);
        }
    }, [currentRoute]);

    const onRoute = (name) => {
        if (name === "/about") {
            setIsAboutActive(true);
            setIsShowsActive(false);
            setIsMediaActive(false);
            setIsContactActive(false);
        }
        else if (name === "/shows") {
            setIsAboutActive(false);
            setIsShowsActive(true);
            setIsMediaActive(false);
            setIsContactActive(false);
        }
        else if (name === "/media") {
            setIsAboutActive(false);
            setIsShowsActive(false);
            setIsMediaActive(true);
            setIsContactActive(false);
        }
        else if (name === "/contact") {
            setIsAboutActive(false);
            setIsShowsActive(false);
            setIsMediaActive(false);
            setIsContactActive(true);
        }
    }

    return(
        <div className="topnav">
            <a className={isAboutActive ? "active" : ""} href="/about">אודות</a>
            <a className={isShowsActive ? "active" : ""} href="/shows">הופעות</a>
            <a className={isMediaActive ? "active" : ""} href="/media">מדיה</a>
            <a className={isContactActive ? "active" : ""} href="/contact">צרו קשר</a>
        </div>
    )
}