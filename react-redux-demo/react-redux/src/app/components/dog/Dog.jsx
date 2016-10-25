import React, {PropTypes} from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const Dog = ({onClick, name, breed, age}) => (

  <TableRow>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{breed}</TableRowColumn>
    <TableRowColumn>{age}</TableRowColumn>
    <TableRowColumn><RaisedButton label="Remove" secondary={true} onClick={onClick}/></TableRowColumn>
  </TableRow>
)

Dog.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Dog
