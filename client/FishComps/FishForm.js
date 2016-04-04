var React = require('react');

function FishForm(props) {
		return (
			<div className="container myContainer">
			  <form onSubmit={props.submitFishToServer}>
          <h3>Enter New Fish</h3>
          <fieldset className="form-group">
            <label>Name</label>
            <input onChange={ props.onNameChange } type="text" className="form-control" placeholder="name"/>
          </fieldset>
          <fieldset className="form-group">
    				<label>Color</label>
    				<input onChange={ props.onColorChange } type="text" className="form-control" placeholder="color"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label>Length</label>
    				<input onChange={ props.onLengthChange } type="text" className="form-control" placeholder="length"/>
  				</fieldset>
           <fieldset className="form-group">
            <label htmlFor="formGroupExampleInput2">Image src</label>
            <input onChange={ props.onImgChange } type="text" className="form-control" placeholder="image"/>
          </fieldset>
  				
          <fieldset className="form-group">
    				<label hmtlFor="exampleSelect1">People Eater?</label>
            <select onChange={props.peopleEaterChange} className="form-control">
              <option></option>
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
  				</fieldset>
          
          <button className="btn btn-success-outline" type="submit">Submit</button>
				</form>
			</div>
		)
};

module.exports = FishForm;