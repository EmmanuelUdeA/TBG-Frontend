'use client'

const CollectionDescription = ({ collName, collDescription }) => {

    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-12 ">
            <label className="flex flex-row justify-center items-center font-semibold my-5 w-full h-10"> BY TRIPBOYSGANG.
            </label>
            <h1 className="flex flex-row justify-center items-center font-bold text-6xl mb-10 h-10 w-full"> {collName.split("-").join(" ").toUpperCase()}. </h1>
            <p className="flex flex-row justify-center items-center text-left w-1/2 h-auto my-5 "> {collDescription} </p>
        </div>
    )
}

export default CollectionDescription