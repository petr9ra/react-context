export default function GoodsItem(props) {
  const { id, name, description, full_background, price, callback = Function.prototype } = props;
  
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
        <button className="btn" onClick={() => callback({id, name, price})}>Купить</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}
