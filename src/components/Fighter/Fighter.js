import './Fighter.css';

import { Link } from 'react-router-dom';

function Fighter(props) {
  const { id, name, image, series, icon } = props
  return (
    <div className="Fighter">
      <Link to={`/fighter/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/fighters/${image}`}
          alt={image}
          width="300"
          height="300"
        />
      </Link>
      <Link to={`/fighter/${id}`}>
        <h1>{name}</h1>
      </Link>
      <div className="info">
        <div><p>Original Series:</p></div>
        <div><p>{series}</p></div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/${icon}`}
            alt={icon}
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}

export default Fighter;
