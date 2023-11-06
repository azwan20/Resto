import Link from "next/link";
import { useState } from "react";

export default function Card({ data }) {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
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
            <main>
                <div class="d-flex">
                    <div id="sidebar" class={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
                        <aside>
                            <div class="hr" style={{ marginTop: '0' }}></div>
                            <div class="card">
                                <div class="card-body d-flex">
                                    <div>
                                        <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1028/production/_98563140_p05kd5g6.jpg"
                                            alt="" />
                                        <p class="card-text" style={{ textAlign: 'center' }}>Super User</p>
                                        <button>Edit Profile</button>
                                        <Link href="login.html"><button>Login</button></Link>
                                    </div>
                                    <div style={{ padding: '22px', textAlign: 'center' }}>
                                        <h5 class="card-title">Haikal</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Owner</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="hr"></div>
                            <div class="second-card d-block" style={{ margin: '10px 0px 10px 10px', padding: '10px 0px 10px 10px' }}>
                                <Link href=""><span class="material-symbols-outlined" style={{ marginRight: '10px' }}>
                                    full_coverage
                                </span>What's New</Link> <br />
                                <Link href=""><span class="material-symbols-outlined" style={{ marginRight: '10px' }}>
                                    empty_dashboard
                                </span>Dashboard</Link>
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
                                    <li><Link class="dropdown-item" href="#">Kategori</Link></li>
                                    <li><Link class="dropdown-item" href="#">Menu</Link></li>
                                    <li><Link class="dropdown-item" href="#">Paket</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div id="artikel">
                        <div class="top">
                            <button class="back" type="button"
                                style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}><span
                                    class="material-symbols-outlined" style={{ display: 'flex' }}>
                                    arrow_back
                                </span> Kembali</button>
                            <div class="up">
                                <div class="d-flex">
                                    <p style={{ alignItems: 'center', marginRight: '10px' }}>Tampilkan</p>
                                    <div class="dropdown">
                                        <button class="btn-sort btn dropdown-toggle d-flex" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            10
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" href="#">1</Link></li>
                                            <li><Link class="dropdown-item" href="#">2</Link></li>
                                            <li><Link class="dropdown-item" href="#">3</Link></li>
                                        </ul>
                                    </div>
                                    <p style={{ marginRight: '10px' }}>Data</p>
                                    <p>Select All</p> <input style={{ marginLeft: '10px' }} type="checkbox" name="" id="" />
                                </div>
                                <div class="app d-flex">
                                    <span class="material-symbols-outlined">
                                        widgets
                                    </span>
                                </div>
                                <button style={{ width: '146px' }}><span class="material-symbols-outlined"
                                    style={{ display: 'flex', marginRight: '5px' }}>
                                    add_circle
                                </span> Tambah Menu</button>
                                <button style={{ width: '142px' }}>
                                    <span class="material-symbols-outlined" style={{ marginRight: '5px' }}>
                                        navigation
                                    </span> Transfer Data
                                </button>
                            </div>
                            <div class="sort">
                                <span class="material-symbols-outlined">
                                    filter_alt
                                </span>
                            </div>
                        </div>
                        <div class="article">
                            <article class=" row col-lg-4 d-flex" style={{ width: sidebarVisible ? '95%' : '90%' }}>
                                {data.map((food) => (
                                    <div class="card col-4" key={food.idMeal} style={{ marginLeft: '40px' }}>
                                        <Link href="/resto/detail/2">
                                            <img src={food.strMealThumb} class="card-img-top" alt="..." />
                                        </Link>
                                        <div class="card-body">
                                            <input type="checkbox" />
                                            <div class="card-contain">
                                                <h5 class="card-title">{food.strMeal}</h5>
                                                <div class="kategori">
                                                    <div class="car2 col-6">
                                                        <p>Kategori</p>
                                                        <p>Harga Jual</p>
                                                        <p>Tanggal Berlaku</p>
                                                    </div>
                                                    <div class="card3 col-6">
                                                        <p>: Makanan</p>
                                                        <p>: Rp 20.000,00</p>
                                                        <p>: 04 Feb 2023</p>
                                                    </div>
                                                </div>
                                                <button type="button">Aktif</button>
                                            </div>
                                            <div class="dropdown">
                                                <button class="btn btn-secondary dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    Aksi
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" href="">Action</Link></li>
                                                    <li><Link class="dropdown-item" href="">Another action</Link></li>
                                                    <li><Link class="dropdown-item" href="">Something else here</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </article>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div class="foot d-flex">
                    <button id="prev-page">&lt;</button>
                    <div id="page-info">
                        <span id="current-page">1</span>
                    </div>
                    <button id="next-page">&gt;</button>
                </div>
            </footer>
        </>

    )
}

export async function getServerSideProps(context) {
    const { locale, query: { id } } = context
    console.log('context', context)
    console.log('id', id)

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await response.json()
    const foods = data.meals.slice(0, 6);
    console.log(foods)

    return {
        props: { data: foods }
    }
}

