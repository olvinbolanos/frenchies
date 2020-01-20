import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Pages from './Pages'
// import createApp from '@shopify/app-bridge'
// const app = createApp({
//   apiKey:'ff86ea300fec2db97e9ac97f94ae6cd1',
//   shopOrigin: 'frenchiepuppies.myshopify.com'
// });
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      username: ''
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <Pages />} />
        </Switch>
      </main>
    );
  }
}

export default App;
