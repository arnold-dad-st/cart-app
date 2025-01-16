export const Header = () => {
  return (
    <div className="ui segment cart-header">
      <div className="cart-avatar">
        <img
          alt=""
          className="ui avatar image"
          src="https://semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        Elliot
      </div>
      <div className="header-checkout">
        <div className="ui primary button">
          <i className="shop icon"></i>Checkout
        </div>
      </div>
    </div>
  );
};