import { useState } from "react";

export default function Header({sidebarVisible, toggleSidebar}){
    return(
        <>
            <header>
                <nav class="navbar">
                    <div class="container-fluid">
                        <button id="burger-button" type="button" aria-controls="sidebar" onClick={toggleSidebar} className={`burger-button navbar-toggler d-flex ${sidebarVisible ? "wide" : ""}`} >
                            <span id="resto-text" class={`resto ${sidebarVisible ? 'visible' : 'hidden'} style={{width: '40px'}}`} >Resto</span>
                            <span class="material-symbols-outlined" style={{ color: 'white', alignItems: 'center' }}>menu</span>
                        </button>
                        <h1 id={`menu${sidebarVisible ? "wide" : ""}`} class="navbar-bran">Menu</h1>
                        <div class="side">
                            <div class="search input-group-append d-flex">
                                <span class="input-group-text">
                                    <span class="material-symbols-outlined">
                                        search
                                    </span>
                                    <input placeholder="Pencarian" />
                                </span>
                            </div>
                            <div class="notif1 d-flex">
                                <button class="d-flex">
                                    <span class="material-symbols-outlined">
                                        notifications
                                    </span>
                                </button>
                            </div>
                            <div class="notif2 d-flex">
                                <button class="d-flex">
                                    <span class="material-symbols-outlined" style={{ paddingRight: '10px' }}>
                                        store
                                    </span> Pusat
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}