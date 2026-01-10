import "./Card.css";

const Card = ({
  title,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  isPopular = false,
}) => {
  return (
    <div className={`card ${isPopular ? "card-popular" : ""}`}>
      <div className={`card-header ${isPopular ? "card-header-popular" : ""}`}>
        <h3 className="card-title">
          {title} {isPopular && <span className="badge-popular">Popular</span>}
        </h3>
      </div>

      <div className="card-body">
        <ul className="card-benefits">
          <li>{benefit1}</li>
          <li>{benefit2}</li>
          <li>{benefit3}</li>
          <li>{benefit4}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
