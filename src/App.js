import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroList from './pages/HeroList';
import HeroDetails from './Components/HeroDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HeroList} />
          <Route path='/:id' component={HeroDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
