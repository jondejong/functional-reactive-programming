import React from 'react'
import {Link} from 'react-router'

import Navigation from './components/navigation/Navigation'

export default React.createClass({
  render() {
    return (
        <div>
          <Navigation />
          {this.props.children}
        </div>
    )
  }
})
