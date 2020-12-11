import './Details.css';
import data from '../../smash-bros.json';

function Details(props) {
  const { id } = props.match.params;
  const { name, image, description, logo } = data[parseInt(id) - 1];

  return (
    <div className="Details">
      <div className="info">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logos/${logo}`}
          alt={logo}
        />
        <div>
          <h1>{`${name}`}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="portrait">
        <img
          src={`${process.env.PUBLIC_URL}/assets/fighters/${image}`}
          alt={logo}
        />
      </div>
    </div>
  );
}

export default Details;
