 const Item = ({
  data: {
    id,
    title,
    thumbnail,
    price,
    quantity,
    total,
    discountPercentage,
    discountedTotal,
  },
}) => {
  const discountResult = discountPercentage.toFixed(2);

  return (
    <div className="card">
      <div className="image">
        <img alt="" src={thumbnail} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <span>Price: {price}</span>
        </div>
        <div className="description">
          Quantity: {quantity}
          <br />
          Total: {total.toFixed(2)}
          <br />
          Discount:
          <span
            style={{
              color: discountResult > 15 ? "green" : "",
            }}
            className={discountResult > 15 ? "discount" : ""}
          >
            {discountResult}%<br />
          </span>
          Discounted Total: {discountedTotal.toFixed(2)}
          <br />
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">ID: {id}</span>
        <span></span>
      </div>
    </div>
  );
};

export const Main = (props) => {
  const { items } = props;
  return (
    <div className="ui link cards">
      {items.map((item) => {
        return <Item data={item} key={item.id} />;
      })}
    </div>
  );
};