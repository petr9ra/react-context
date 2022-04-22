import { useContext } from "react";

export default function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    handleCartBtnClick = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name} {" "}
      <button
        className="btn-small cart-btn"
        onClick={() => handleCartBtnClick(id, "-")}
      >
        -
      </button>{" "}
      x{quantity}{" "}
      <button
        className="btn-small cart-btn"
        onClick={() => handleCartBtnClick(id, "+")}
      >
        +
      </button>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  );
}
