import './Details.css';
import data from '../../smash-bros.json';

function Details(props) {
  const { id } = props.match.params;
  const { name, image, description, series, logo } = data[parseInt(id) - 1];

  return (
    <div className="Details">
      <div className="info">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/${logo}`}
          alt={logo}
        />
        <h1 className="name">{`${id}: ${name}`}</h1>
        <p className="series">{series}</p>
        <p className="description">{description}</p>
      </div>
      <div className="image">
        <img
          className="portrait"
          src={`${process.env.PUBLIC_URL}/assets/fighters/${image}`}
          alt={image}
        />
      </div>
    </div>
  );
}

export default Details;
