import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConfigurationProvider } from './configuration/configContext'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import Home from "./pages/Home"
import Character from "./pages/Character"
import Notfound from "./pages/Notfound"
import NavContainer from "./organisms/NavContainer"

const App = () => {
  return (
    <div className="App">
      <Router>
        <ConfigurationProvider>
        <NavContainer />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/character/:id">
              <Character />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </ConfigurationProvider>
      </Router>
    </div>
  )
}

export default App
