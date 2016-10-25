import React, {PropTypes} from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

import Dog from './Dog'

class RecipeList extends React.Component {

  componentDidMount = () => {
    this.props.loadDogs()
  }

  render() {

    let content

    if (this.props.loaded) {
      content = (
        <div>
          <h3>Dogs</h3>

          <Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Breed</TableHeaderColumn>
                <TableHeaderColumn>Age</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>

              {this.props.dogs.map(dog =>
                <Dog
                  key={dog.id}
                  {...dog}
                  onClick={() => this.props.removeDog(dog)}
                />
              )}
            </TableBody>
          </Table>

        </div>
      )
    } else {
      content = (
        <div>
          <CircularProgress size={60} thickness={7}/>
        </div>
      )
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default RecipeList