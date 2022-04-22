import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";

import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

export default function Shop() {
  const { loading, isCartShow, alertName, setGoods } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isCartShow && <CartList />}
      {alertName && <Alert />}
    </main>
  );
}
