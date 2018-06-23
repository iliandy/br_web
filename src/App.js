import axios from 'axios'
import Drawer from '@material-ui/core/Drawer'
import React, { Component } from 'react'
import Detail from './components/Detail'
import List from './components/List'

class App extends Component {
  state = {
    drawerOpen: false,
    restaurant: {},
    restaurants: [],
  }

  componentDidMount() {
    axios
      .get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
      .then(res => {
        const restaurants = res.data.restaurants
        this.setState({ restaurants })
      })
      .catch(err => {
        console.error(err)
      })
  }

  closeDrawer = () => {
    this.setState({ drawerOpen: false })
  }

  selectedRest = rest => {
    this.setState({
      drawerOpen: true,
      restaurant: rest,
    })
  }

  render() {
    const { drawerOpen, restaurant, restaurants } = this.state

    return (
      <div>
        <List restaurants={restaurants} selectedRest={this.selectedRest} />
        <Drawer anchor="right" open={drawerOpen} onClose={this.closeDrawer}>
          <Detail restaurant={restaurant} closeDrawer={this.closeDrawer} />
        </Drawer>
      </div>
    )
  }
}

export default App
