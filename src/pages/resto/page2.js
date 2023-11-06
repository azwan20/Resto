import Link from "next/link";
import { useState } from "react";

export default function Page2({ hal2, counts, handleIncrement, handleDecrement }) {
    // console.log("Data = ", data)
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // if (!data) {
    //     // Data belum tersedia, tampilkan pesan loading atau aturan lain
    //     return <p>Loading...</p>;
    // }

    return (
        <>
            <div class="article">
                <article class=" row col-lg-4 d-flex" style={{ width: sidebarVisible ? '80%' : '100%' }}>
                    {hal2.map((food, index) => (
                        <div class="card col-4" key={food.idMeal} style={{ margin: 'auto', marginBottom: '20px' }}>
                            <Link href={`/resto/${food.idMeal}`}>
                                <img src={food.strMealThumb} class="card-img-top" alt="..." />
                            </Link>
                            <div class="card-body">
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
                                <div class="addCart" onClick={toggleSidebar}>
                                    <button class="btn btn-secondary" type="button"
                                        aria-expanded="false">
                                        Add to Cart
                                    </button>
                                </div>
                                {/* <div className="add d-flex">
                                    <button onClick={() => handleDecrement(index)} >-</button>
                                    <div>
                                        <p style={{ margin: 'auto' }}>{counts[index]}</p>
                                    </div>
                                    <button onClick={() => handleIncrement(index)}>+</button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const { locale, query: { id } } = context
//     console.log('context', context)
//     console.log('id', id)

//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
//     const data = await response.json()
//     const foods = data.meals.slice(0, 6);
//     console.log(foods)

//     return {
//         props: { data: foods }
//     }
// }

