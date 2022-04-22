import { useContext } from "react";
import { ShopContext } from "../context";

export default function GoodsItem(props) {
  const { id, name, description, full_background, price } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({ id, name, price })}>
          Купить
        </button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}
