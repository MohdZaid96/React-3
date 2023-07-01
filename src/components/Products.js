import { useState } from 'react'
import "./Product.css";

const Posts = () => {
  const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
			setLoading(true)
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setProducts(data)
			setLoading(false)
    } catch (e) {
      console.log(e);
			setLoading(false)
    }
  };

	if(loading) {
		return <img src='https://i.gifer.com/ZZ5H.gif' alt='load' height='100' className='loading-img' />
	}

  return (
    <>
      <button className="fetch-button"onClick={fetchProducts}>Fetch Products</button>
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="product" />
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
