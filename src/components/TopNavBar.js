import React from 'react';
import '../styles/TopNavBar.css';

export default function TopNavBar(){
    
    return(
        <div class="topnav">
            <a class="active" href="/about">אודות</a>
            <a href="/shows">הופעות</a>
            <a href="/media">מדיה</a>
            <a href="/contact">צרו קשר</a>
        </div>
    )
}