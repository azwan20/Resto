import { useState } from "react";
import Foot from "./foot";
import Head from "./head";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

export default function Home({ data, hal2, hal3 }) {
    console.log('id = ', hal3)
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [selectedPage, setSelectedPage] = useState(1); // State untuk mengontrol tampilan Page1 atau Page2
    const totalPages = 3; // Set the total number of pages
    const [selectAll, setSelectAll] = useState(false); // State untuk "Select All"

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // const handlePageSelect = (pageNumber) => {
    //     setSelectedPage(pageNumber);
    // };
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedPage(1); // Kembalikan ke halaman pertama ketika "Select All" diubah
    };

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
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
                                        <a href="login.html"><button>Login</button></a>
                                    </div>
                                    <div style={{ padding: '22px', textAlign: 'center' }}>
                                        <h5 class="card-title">Haikal</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Owner</h6>
                                    </div>
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
                                    <li><a class="dropdown-item" href="/resto/kategori">Kategori</a></li>
                                    <li><a class="dropdown-item" href="#">Menu</a></li>
                                    <li><a class="dropdown-item" href="#">Paket</a></li>
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
                                            <li><a class="dropdown-item" href="#">1</a></li>
                                            <li><a class="dropdown-item" href="#">2</a></li>
                                            <li><a class="dropdown-item" href="#">3</a></li>
                                        </ul>
                                    </div>
                                    <p style={{ marginRight: '10px' }}>Data</p>
                                    <p>Select All</p> <input style={{ marginLeft: '10px' }} type="checkbox" checked={selectAll}
                                            onChange={handleSelectAll} name="" id="" />
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
                        <div className="article">
                        {/* Tampilkan Page1, Page2, dan Page3 jika "Select All" dicentang */}
                        {selectAll && (
                                <>
                                    <Page1 data={data} sidebarVisible={sidebarVisible} />
                                    <Page2 hal2={hal2} sidebarVisible={sidebarVisible} />
                                    <Page3 hal3={hal3} sidebarVisible={sidebarVisible} />
                                </>
                            )}
                            {/* Tampilkan halaman yang dipilih jika "Select All" tidak dicentang */}
                            {!selectAll && (
                                <>
                                    {selectedPage === 1 && <Page1 data={data} sidebarVisible={sidebarVisible} />}
                                    {selectedPage === 2 && <Page2 hal2={hal2} sidebarVisible={sidebarVisible} />}
                                    {selectedPage === 3 && <Page3 hal3={hal3} sidebarVisible={sidebarVisible} />}
                                </>
                            )}
                            {/* Menggunakan kondisi untuk menampilkan Page1 atau Page2 berdasarkan state selectedPage
                            {selectedPage === 1 && <Page1 data={data} sidebarVisible={sidebarVisible} />}
                            {selectedPage === 2 && <Page2 hal2={hal2} sidebarVisible={sidebarVisible} />}
                            {selectedPage === 3 && <Page3 hal3={hal3} sidebarVisible={sidebarVisible} />} */}
                        </div>
                    </div>
                </div>
            </main >
            <Foot selectedPage={selectedPage} setSelectedPage={setSelectedPage} totalPages={totalPages} />
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
    const hal2 = data.meals.slice(6, 12);
    const hal3 = data.meals.slice(12, 18);
    console.log(foods)

    return {
        props: { data: foods, hal2, hal3 }
    }
}