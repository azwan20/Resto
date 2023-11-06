import { useState } from "react";
import Foot from "./foot";
import Head from "./head";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import HeadCos from "./headCs";
import Sidebar from "./sidebar";

export default function HomeCos({ data, hal2, hal3 }) {
    console.log('id = ', data)
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

    const initialCounts = {};

    data.forEach((food, index) => {
        initialCounts[index] = 0;
    });

    const [counts, setCounts] = useState(initialCounts);

    const handleIncrement = (id) => {
        const updatedCounts = { ...counts };
        updatedCounts[id] = counts[id] + 1;
        setCounts(updatedCounts);
    };

    const handleDecrement = (id) => {
        const updatedCounts = { ...counts };
        updatedCounts[id] = counts[id] - 1;
        setCounts(updatedCounts);
    };

    // data.foreach((componen) => {
    //     console.log("ini componen: ", componen);
    //     const handleSearch = (searchText) => {
    //         const results = componen.filter((item) => {
    //             console.log(results);
    //             // Misalkan Anda ingin mencari dalam properti "name" dari item-item dalam data
    //             return item.strMealThumb.match(new RegExp(searchText, 'i')); // 'i' berarti case-insensitive
    //         });
    //     }
    // })
    return (
        <>
            <HeadCos sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} selectedPage={selectedPage} handleSelectAll={handleSelectAll} />
            <main>
                <div class="d-flex">
                    <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                    <div id="artikel">
                        <div class="top" style={{ margin: '50px' }}>
                            <div class="up" style={{ justifyContent: 'space-between', margin: '30px' }}>
                                <button class="back" type="button"
                                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}><span
                                        class="material-symbols-outlined" style={{ display: 'flex' }}>
                                        arrow_back
                                    </span> Kembali
                                </button>
                                <button class="back" type="button"
                                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                                    <div class="d-flex">
                                        <p>Select All</p>
                                        <input style={{ marginLeft: '10px' }} type="checkbox" checked={selectAll}
                                            onChange={handleSelectAll} name="" id="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="article">
                            {selectAll && (
                                <>
                                    <Page1 data={data} sidebarVisible={sidebarVisible} />
                                    <Page2 hal2={hal2} sidebarVisible={sidebarVisible} />
                                    <Page3 hal3={hal3} sidebarVisible={sidebarVisible} />
                                </>
                            )}
                            {!selectAll && (
                                <>
                                    {selectedPage === 1 && <Page1 data={data} sidebarVisible={sidebarVisible} counts={counts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />}
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
    const foods = data.meals.slice(0, 8);
    const hal2 = data.meals.slice(9, 17);
    const hal3 = data.meals.slice(17, 24);
    const all = data.meals;
    console.log(foods);

    return {
        props: { data: foods, hal2, hal3, all }
    }
}