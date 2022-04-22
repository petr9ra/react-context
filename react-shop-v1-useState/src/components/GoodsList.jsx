import GoodsItem from './GoodsItem';

export default function GoodsList(props) {
  const { goods = [], callback = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Ничего нет</h3>
  }
  
  return (
    <div className='goods'>
      {
        goods.map(good => <GoodsItem key={good.id} {...good} callback={props.callback} />)
      }
    </div>
  );
}
