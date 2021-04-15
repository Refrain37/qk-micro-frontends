import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Show from '../pages/Show'

export default function Router() {
  return  (
    <BrowserRouter basename='/child2'>
      <Switch>
        <Route path='/show' component={Show} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
