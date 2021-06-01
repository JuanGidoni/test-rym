import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConfigurationProvider } from './configuration/ConfigContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './templates/global.css'
// Components
import Home from "./pages/Home"
import Character from "./pages/Character"
import Notfound from "./pages/Notfound"
import NavContainer from "./organisms/NavContainer"
import Footer from "./atoms/Footer"

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
          <Footer className="w-100 text-center py-2">
            Copyright 2021 - Rick and Morty
          </Footer>
        </ConfigurationProvider>
      </Router>
    </div>
  )
}

export default App
