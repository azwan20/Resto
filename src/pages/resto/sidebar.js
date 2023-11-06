import Link from "next/link";
import HeadCos from "./headCs";
import { useState } from "react";

export default function Sidebar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <>
            <div className="d-flex">
                <div id="sidebar" class={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
                    <aside>
                        <div class="hr" style={{ marginTop: '0' }}></div>
                        <div class="card" style={{ height: '270px' }}>
                            <div class="card-body d-flex">
                                <div>
                                    <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1028/production/_98563140_p05kd5g6.jpg"
                                        alt="" />
                                    <p class="card-text" style={{ textAlign: 'center' }}>@h1lm1</p>
                                </div>
                                <div style={{ padding: '22px', textAlign: 'center' }}>
                                    <h5 class="card-title">Hilmi Ambong</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Costumer</h6>
                                </div>
                            </div>
                            <div className="d-block" style={{ alignItems: 'center', width: '150px', margin: 'auto', textAlign: 'center' }}>
                                <button>Edit Profile</button>
                                <a href="login.html"><button>Logout</button></a>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <div class="second-card d-block" style={{ margin: '10px 0px 10px 10px', padding: '10px 0px 10px 10px' }}>
                            <a href=""><span class="material-symbols-outlined" style={{ marginRight: '10px' }}>
                                full_coverage
                            </span>What's New</a> <br />
                            <a href=""><span class="material-symbols-outlined" style={{ marginRight: '10px' }}>
                                empty_dashboard
                            </span>Dashboard</a>
                        </div>
                        <div class="hr"></div>
                        <div class="dropdown" style={{ margin: 'auto', alignItems: 'center' }}>
                            <button class="btn dropdown-toggle d-flex"
                                style={{ margin: '0px', padding: '0px', alignItems: 'center' }} type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="material-symbols-outlined" style={{ margin: '0px 10px 0px 20px' }}>
                                    lunch_dining
                                </span>
                                Daftar Menu
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" href="/resto/kategori">Kategori</Link></li>
                                <li><Link class="dropdown-item" href="/resto/index2">Menu</Link></li>
                                <li><Link class="dropdown-item" href="/resto/paket">Paket</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <button class={`buttonHiden ${sidebarVisible ? 'hiddenAdd' : ''}`} onClick={toggleSidebar}>
                    <p>Profile</p>
                </button>
            </div>
        </>
    )
}