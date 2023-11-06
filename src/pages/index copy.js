import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function HomeCopy() {
const [food, setFoods] = useState([]);

const fetchFood = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await response.json()
  console.log('data', data);
  setFoods(data.meals)
}

useEffect(() => {
  fetchFood()
}, [])

return (
  <>
    <h1>Ini Home</h1>

    <section className='product-list'>
      {food.map((value) => (
        <div className="card" key={value.idMeal}>
            <img src={value.strMealThumb} className="card-img-top" alt="..." />
            <div class="card-body">
                <input type="checkbox" />
                <div class="card-contain">
                    <h5 class="card-title">{value.strMeal}</h5>
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
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
      ))}
    </section>
  </>
)
}

{/* <div className='item' key={value.idMeal}>
          <div className='image'>
            <img src={value.strMealThumb} alt={value.strMeal} width={150} />
          </div>
          <h2>{value.strMeal}</h2>
          <Link href={`/resto/${value.idMeal}`}>Selengkatnya</Link>
        </div> */}
