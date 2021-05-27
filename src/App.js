
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './config'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => {
            return <Route exact path={route.path} component={route.component} />
          })
        }
      </Switch>
    </BrowserRouter>
  )
}
