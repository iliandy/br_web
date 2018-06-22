import axios from 'axios'
import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  state = {
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

  render() {
    return (
      <div>
        <List {...this.state} />
      </div>
    )
  }
}

export default App
