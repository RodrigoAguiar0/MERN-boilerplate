import React, { Component } from 'react';
import 'whatwg-fetch';

/*newCounter() {
  fetch('/api/counters', { method: 'POST' })
    .then(res => res.json())
    .then(json => {
      let data = this.state.counters;
      data.push(json);

      this.setState({
        counters: data
      });
    });
}*/

const Home = () => (
  <div>
    <p><a href="/profile">View Profile</a></p>
  </div>
)

export default Home;
