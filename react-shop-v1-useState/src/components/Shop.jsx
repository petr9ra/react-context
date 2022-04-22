import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  function addToCart(item) {
    let itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  }

  const removeFromCart = (id) => {
    const newOrder = order.filter((el) => el.id !== id);
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const handleCartBtnClick = (id, str) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        return {
          ...orderItem,
          quantity:
            str === "-" && orderItem.quantity > 1
              ? orderItem.quantity - 1
              : str === "+"
              ? orderItem.quantity + 1
              : orderItem.quantity,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} callback={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          handleCartBtnClick={handleCartBtnClick}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
