import './Productcomponent.css'; 
import { useState } from 'react'; 

interface ProductcomponentProps { 
  product: { 
    image: string | undefined; 
    id: number; 
    name: string; 
    description: string; 
    stock: number; 
    price: number; 
  }; 

} 

function Productcomponent({ product }: ProductcomponentProps) { 
  const [count, setCount] = useState(0); 
  const [rating, setRating] = useState(0);
  

  return ( 
    <div className="product-card"> 
      <img src={product.image} alt={product.name} />  
      <div className="product-info"> 
        <h2>{product.name}</h2> 
        <p>{product.description}</p> 
       <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
            key={star}
            onClick={() => setRating(star)}
            className={star <= rating ? "star active" : "star"}
        >
            ★
        </span>
       ))}
      </div>
        <p>Stock: {product.stock - count}</p> 
        <p>Price: ${(product.price * count).toFixed(2)}</p> 

        {product.stock - count <= 0 ? ( 
          <p className="out-of-stock">Out of Stock</p> 
        ) : product.stock - count <= 5 ? ( 
          <p className="low-stock">Low Stock</p> 
        ) : null} 

        <div className="controls">
          <button
            onClick={() => setCount((current) => Math.min(product.stock, current + 1))}
          > 
            + 
          </button> 
          <span>{count}</span> 
          <button
            onClick={() => setCount((current) => Math.max(0, current - 1))}
          > 
            - 
          </button> 
        </div>
      </div> 
    </div> 
  ); 
}               

export default Productcomponent;