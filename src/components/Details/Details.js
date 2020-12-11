import './Details.css';
import data from '../../smash-bros.json';

function Details(props) {
  const { id } = props.match.params;
  const { image } = data[parseInt(id) - 1];

  return (
    <div className="Details">
      <div className="image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/fighters/${image}`}
          alt={image}
        />
      </div>
    </div>
  );
}

export default Details;
