function ProductCard() {
    const product = {
        name : "Jogn doe",
        price : 79.99,
        rating : 4.5,
        review : 3.8,
        image : "https://via.placeholder.com/200"

    };

    return (
        <div>
            <img src ={product.image} alt={product.name}/>
             <h3> {product.name}</h3>
             <div className ="add</div>
        </div>

    );
}