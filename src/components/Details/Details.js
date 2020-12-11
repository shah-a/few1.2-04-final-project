import './Details.css';
import data from '../../smash-bros.json';

function Details(props) {
  const { id } = props.match.params;
  const { name, image, description, series, logo } = data[parseInt(id) - 1];

  return (
    <div className="Details">
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/assets/logos/${logo}`} alt="{logo}" />
        <img src={`${process.env.PUBLIC_URL}/assets/fighters/${image}`} alt={image} />
        <div className="info">
          <h1 className="name">{`${id}: ${name}`}</h1>
          <p className="description">{description}</p>
          <p className="series">{series}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
