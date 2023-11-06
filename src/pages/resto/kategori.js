import { useState } from "react";
import HeadCos from "./headCs";
import Sidebar from "./sidebar";

export default function Kategori({ data, all }) {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const varian = ["Seafood", "Indonesian Food", "Japanese Food", "Western Food"];
    const paragraf = [
        "Our food is from our production, we take care of them carefully until they are enough ready to process",
        "Homemade orign taste of Indonesian, only contain flavor from Indonesia and make from Indonesian Cheff",
        "Orignal taste of Japanese Food, using high quality materials and made by Japan Cheff",
        "We are keep the health of our food, using fresh materials and made by American Cheff so it keep the Weastren taste"
    ];

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <>
            <HeadCos sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <main>
                <div class="d-flex">
                    <Sidebar sidebarVisible={sidebarVisible} />
                    <div className="category">
                        {[0, 1, 2, 3].map((index) => (
                            <div key={index} className="category2 d-flex">
                                <div className="d-flex" style={{ height: '30vh', alignItems: 'center' }}>
                                    <div class={`${index % 2 === 0 ? 'visible' : 'hidden'}`} style={{ width: '35%', margin: '10px' }}>
                                        <h2>{varian[index]}</h2>
                                        <p>{paragraf[index]}</p>
                                    </div>
                                    <marquee style={{ width: '65%'}}>
                                        <div className="d-flex" style={{ width: '65%' }}>
                                            <div className="" style={{ width: '100%', margin: '10px' }}>
                                                {all.map((food, indexx) => (
                                                    (indexx >= 0 && indexx <= 6 && index == 0) ? (
                                                        <img key={indexx} src={food.strMealThumb} class="" alt="..." />
                                                    ) : (indexx >= 7 && indexx <= 12 && index == 1) ? (
                                                        <img key={indexx} src={food.strMealThumb} class="" alt="..." />
                                                    ) : (indexx >= 12 && indexx <= 18 && index == 2) ? (
                                                        <img key={indexx} src={food.strMealThumb} class="" alt="..." />
                                                    ) : (indexx >= 19 && indexx <= 24 && index == 3) ? (
                                                        <img key={indexx} src={food.strMealThumb} class="" alt="..." />
                                                    ) : (indexx >= 25 && indexx <= 30 && index == 4) ? (
                                                        <img key={indexx} src={food.strMealThumb} class="" alt="..." />
                                                    ) : null
                                                ))}
                                            </div>
                                        </div>
                                    </marquee>
                                    <div class={`${index % 2 === 0 ? 'hidden' : 'visible'}`} style={{ width: '35%', margin: '10px' }}>
                                        <h2>{varian[index]}</h2>
                                        <p>{paragraf[index]}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
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
    const all = data.meals;
    console.log(foods)

    return {
        props: { data: foods, hal2, hal3, all }
    }
}