import React from 'react';

import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NewDog extends React.Component {
  constructor(props) {
    super(props)
    this.emptyState = {
      dog: {
        name: '',
        breed: '',
        age: 0
      }
    }
    this.state = this.emptyState
  }

  save = ()=> {
    this.props.addDog(this.state.dog)
    this.setState(this.emptyState)
  }

  handleChange = (event, objectName, field) => {
    let newObject = {...this.state[objectName]}
    newObject[field] = event.target.value

    let newState = {}
    newState[objectName] = newObject
    this.setState(newState)
  }

  render  () {
    return (
      <div>
        <TextField
          floatingLabelText="Dog Name"
          value={this.state.dog.name}
          onChange={(e)=> this.handleChange(e, 'dog', 'name')}
        />
        <TextField
          floatingLabelText="Dog Breed"
          value={this.state.dog.breed}
          onChange={(e)=> this.handleChange(e, 'dog', 'breed')}
        />
        <TextField
          floatingLabelText="Dog Age"
          value={this.state.dog.age}
          type="number"
          onChange={(e)=> this.handleChange(e, 'dog', 'age')}
        />
        <RaisedButton label="Add Dog" primary={true} onClick={this.save}/>
      </div>
    )
  }
}

export default NewDog