'use client'


const CollectionProductList = ({ products }) => {


    return (
        <ul className="flex flex-row flex-wrap w-full h-auto justify-center items-start my-10 ">
            {products.map((product, index) => {
                return (
                    <li style={{ backgroundImage: `url(${product.imgPathBackground})` }}
                        className="flex flex-col md:w-1/5 w-5/6 md:h-96 h-auto justify-center items-center m-10 bg-cover bg-no-repeat bg-top drop-shadow-xl cursor-pointer" key={index}>
                        <img src={product.imgPath} alt={product.name} className="w-full h-96 md:h-full hover:opacity-0 hover:transition-all duration-200" />
                        <section className="flex flex-col absolute w-full h-auto mt-96 justify-center items-end">
                            <h1 className="flex flex-row justify-center items-center w-full py-1 bg-black text-white text-sm font-bold">{product.name}</h1>
                            <h3 className="flex flex-row justify-center items-center w-full py-1 bg-black text-white text-sm">{product.price}</h3>
                        </section>
                    </li>
                )
            })}
        </ul>

    )

}

export default CollectionProductList;