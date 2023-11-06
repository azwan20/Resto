import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";

export default function troli({ data }) {
    console.log('data', data)
    // const [isLoading, setIsLoading] = useState(false);
    // const [isAlert, setIsAlert] = useState(false);
    // const { cart, setCart } = useContext(CartContext);

    // const addToCart = () => {
    //     setIsAlert(false);
    //     setIsLoading(true);

    //     console.log("atc", data);
    //     const dataCart = [...cart, data];
    //     setCart(dataCart);
    //     localStorage.setItem("cart", JSON.stringify(dataCart));

    //     setIsAlert(true);
    //     setIsLoading(false);
    // };

    // const [clicked, setClicked] = useState(false);

    // const handleButtonClick = () => {
    //     setClicked(!clicked);
    // };

    // data.forEach((food, index) => {
    //     initialCounts[index] = 0;
    // });

    // const [counts, setCounts] = useState(initialCounts);

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

    return (
        <section className="idDetail">
        <Link href="/resto/index2">
        <button className="button_Detail">
            Kembali
        </button>
        </Link>
            <div className="detail">
                <div className="d-flex" style={{ height: '90%' }}>
                    <div style={{ width: '40%' }}>
                        <span>
                            <h1>{data.strMeal}</h1>
                        </span>
                        <div className="d-flex detail2">
                            <p>$</p>
                            <h1>30</h1>
                            <p>.000</p>
                        </div>
                        <div className="detail3">
                            <p>Cupcake, kue peri, atau roti adalah kue kecil yang dirancang untuk melayani satu orang, yang dapat dipanggang dalam kertas tipis kecil atau cangkir aluminium. Seperti kue yang lebih besar, frosting dan dekorasi kue lainnya seperti buah dan permen dapat diterapkan.</p>
                        </div>
                    </div>
                    <div className="detail4">
                        <img src={data.strMealThumb} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="detail5 d-flex">
                    <button style={{ marginRight: '50px' }} >-</button>
                    <div>
                        <p style={{ margin: 'auto' }}> 1</p>
                    </div>
                    <button>+</button>
                </div>
            </div>
            {/* <h1>Ini H1</h1> */}

            {/* <button
        onClick={addToCart}
        className="font-bold bg-amber-300 rounded p-3 mt-5 hover:bg-pink-500"
        disable={isLoading}
    >
        {isLoading ? "Loading..." : "Add to Cart"} add
    </button> */}
        </section>
    )
}

export async function getServerSideProps(context) {
    const { locale, query: { id } } = context
    console.log('context', context)
    console.log('id', id)

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json()
    console.log(data.strInstructions)

    return {
        props: { data: data.meals[0] }
    }
}