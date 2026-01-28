
export default function Cart(props) {

    const handleCloseCart = () => {
        props.onClose();
    };

    return (
      <>

        <div className="cart">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 className="text-5xl ml-5 mt-3">Your Cart</h2>
                <button 
                    onClick={handleCloseCart} className="border border-black bg-black rounded-xl">
                     X
                </button>
            </div>
            {
                props.dataforcart.length === 0 ? (
                    <p>Cart is empty!</p>
                ) : (
                    props.dataforcart.map((element, index) => {
                        return (
                            <div key={index} style={{ padding: "10px", borderBottom: "1px solid #eee", marginBottom: "10px" }}>
                                <h2 className="ml-4 mt-7">{element.title}</h2>
                                <p className="ml-4 mt-1">Price: ${element.price}</p>
                            </div>
                        );
                    })
                )
            }
        </div>
        </>
    );
}
