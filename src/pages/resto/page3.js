import Link from "next/link";
import { useState } from "react";

export default function Page3({ hal3, sidebarVisible, counts, handleIncrement, handleDecrement }) {
    return (
        <>
            <div class="article">
                <article class=" row col-lg-4 d-flex" style={{ width: sidebarVisible ? '80%' : '100%' }}>
                    {hal3.map((food) => (
                        <div class="card col-4" key={food.idMeal} style={{ margin: 'auto', marginBottom: '20px' }}>
                            <Link href={`/resto/${food.idMeal}`}>
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
                                <div class="addCart">
                                    <button class="btn btn-secondary" type="button"
                                        aria-expanded="false">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </>
    )
}

