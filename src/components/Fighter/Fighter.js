import './Fighter.css';

import { Link } from 'react-router-dom';

function Fighter(props) {
  const { id, name, image, series, icon } = props
  return (
    <div className="Fighter">
      <div className="portrait">
      <Link to={`/fighter/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/fighters/${image}`}
          alt={image}
          width="300"
          height="300"
        />
      </Link>
      <Link className="Link name" to={`/fighter/${id}`}>
        <h1>{name}</h1>
      </Link>
      </div>
      <div className="info">
        <div>
          <p>Original Series:</p><br />
          <h2>{series}</h2>
        </div>
        <img
          className="icon"
          src={`${process.env.PUBLIC_URL}/assets/icons/${icon}`}
          alt={icon}
          width="100"
          height="100"
        />
      </div>
    </div >
  );
}

export default Fighter;
