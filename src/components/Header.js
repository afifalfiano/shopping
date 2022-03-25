
const Header = props => {
    const img = '../assets/logo.png';
    return (
        <div className="container mx-auto">
        <div className="py-3">
            <div className="flex justify-between items-center">
                <div>EN - US</div>
                <div className="flex flex-row gap-3">
                    <p>My profile</p>
                    <p>Items</p>
                    <p>Search</p>
                </div>
            </div>
        </div>
        <div className="pb-3">
        <div className="flex justify-between items-center">
                <div ><img src={img} alt="Logo" className="w-24"></img></div>
                <div className="flex flex-row gap-10 ">
                    <a href="/" className="font-bold text-blue-500">HOME</a>
                    <a href="/" className="font-medium">BAGS</a>
                    <a href="/" className="font-medium">SNEAKERS</a>
                    <a href="/" className="font-medium">BELT</a>
                    <a href="/" className="font-medium">CONTACT</a>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Header;