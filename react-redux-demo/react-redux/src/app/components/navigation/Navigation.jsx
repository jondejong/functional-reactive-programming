import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { browserHistory } from 'react-router'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = ()=> {
    this.setState({open: !this.state.open})
    return true
  };

  go = (path) => {
    return () => {
      this.handleToggle()
      browserHistory.push(path)
    }
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="Doggies"
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
        />
        <Drawer open={this.state.open}>
          <IconButton onClick={this.handleToggle}><NavigationClose /></IconButton>
         <MenuItem onClick={this.go('/')}>
            Home
         </MenuItem>
         <MenuItem onClick={this.go('/dogs')}>
            Dogs
         </MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Navigation