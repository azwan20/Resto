export default function detail({data}){
    console.log('data', data)
    return(
        <section>
            <img src={data.strMealThumb} class="card-img-top" alt="..." style={{width: '150px'}} />
            <h1>{data.strMeal}</h1>
        </section>
    )
}

export async function getServerSideProps(context){
    const {locale, query: {id}} = context
    console.log('context', context)
    console.log('id', id)

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json()

    return{
        props: {data: data.meals[0]}
    }
}