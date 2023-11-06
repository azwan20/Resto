import Link from "next/link";
import { useState } from "react";

export default function Page1({ data, sidebarVisible, toggleSidebar, counts, handleIncrement, handleDecrement }) {
    console.log("Ini dari page1", data);
    const [clicked, setClicked] = useState(false);
    
    const handleButtonClick = () => {
        setClicked(!clicked);
    };
    if (!data) {
        return <p>Loading...</p>;
    }

    
    return (
        <>
            <article class=" row col-lg-4 d-flex" style={{ width: sidebarVisible ? '80%' : '100%' }}>
                {data.map((food, index) => (
                    <div class="card col-4" key={food.idMeal} style={{ margin: 'auto', marginBottom: '20px' }}>
                        <Link href={`/resto/troli/${food.idMeal}`}>
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
                                <button type="button">Available</button>
                            </div>
                            <div className={`addCart ${clicked ? 'hidden' : 'visible'}`} onClick={() => handleButtonClick(index)}>
                                <button class="btn btn-secondary" type="button"
                                    aria-expanded="false">
                                    Add to Cart
                                </button>
                            </div>
                            {/* <div className={`${clicked ? 'visible' : 'hidden'}`}>
                                <div className={`add d-flex ${clicked ? 'visible' : 'hidden'}`}>
                                    <button onClick={() => handleDecrement(index)} >-</button>
                                    <div>
                                        <p style={{ margin: 'auto' }}>{counts[index]}</p>
                                    </div>
                                    <button onClick={() => handleIncrement(index)}>+</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                ))}
            </article>
        </>
    )
}

