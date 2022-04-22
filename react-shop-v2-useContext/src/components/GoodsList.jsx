import { useContext } from "react";
import { ShopContext } from "../context";
import GoodsItem from "./GoodsItem";

export default function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Ничего нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  );
}
