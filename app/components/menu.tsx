const Menu = ({ setViewMenu, viewMenu }) => {
    const handleViewMenu = () => {
        setViewMenu(!viewMenu);
    }
    return (
        <div className="w-screen h-screen flex flex-col p-20 justify-center items-center absolute z-50 bg-opacity-80 bg-black text-white text-2xl">
            <ul className="w-full h-full justify-center items-center flex flex-col">
                <li className="h-1/4 w-full flex flex-row justify-center items-center">Home</li>
                <li className="h-1/4 w-full flex flex-row justify-center items-center">Store</li>
                <li className="h-1/4 w-full flex flex-row justify-center items-center">Collections</li>
                <li className="cursor-pointer w-full flex flex-row justify-center items-center" onClick={handleViewMenu}>Close</li>
            </ul>
        </div>
    )
}

export default Menu;