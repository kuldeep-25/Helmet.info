import { Link } from 'react-router-dom';
import '../styles/Card.css';
function Card({ title, description, imageUrl, link }) {
  return (

    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <Link to={link}>
        <h2 className="card-title">{title}</h2>
      </Link>
      <p className="card-description">{description}</p>
    </div>

  );
}

export default Card;