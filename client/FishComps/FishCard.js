var React = require('react');

function FishCard(props){
		return (
			<div className="card card-size">
        <img className="card-img-top fish-img" 
        src={props.img} alt="some fish"/>
        <div className="card-block card-flex">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button onClick={props.getId.bind(null, props.id)} >GO</button>
        </div>
      </div>
    )
};

module.exports = FishCard;