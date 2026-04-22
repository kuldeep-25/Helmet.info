import { Link } from 'react-router-dom';
import '../styles/Brand.css';
function Brand({ imageUrl, title, link }) {
    return (
        <div className="brand">
            <img src={imageUrl} alt={title} className="brand-image" />
            <Link to={link}>
                <h2 className="brand-title">{title}</h2>
            </Link>
        </div>
    )
}

export default Brand;