import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import List from './List/List.js';
import Details from './Details/Details.js';

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={List} />
        <Route exact path="/fighter/:id" component={Details} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
