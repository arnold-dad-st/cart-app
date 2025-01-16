import { Fragment } from "react"

const SocialIcons = () => {
  return (
    <Fragment>
      <i className="facebook icon"></i>
      <i className="twitter icon"></i>
    </Fragment>
  );
};

export const Footer = (props) => {
  return (
    <div className="ui segment cart-footer">
      <a href="http://localhost:3000/" className="ui primary link">
        Back to Shopping Cart
      </a>
      <span>{props.opening}</span>
      <div className="social-link">
        <SocialIcons />
      </div>
    </div>
  );
};