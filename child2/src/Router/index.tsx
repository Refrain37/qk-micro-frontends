import { BrowserRouter , Route, Switch } from 'react-router-dom'
import {basename} from './router.config'

import Home from '../pages/Home'
import Show from '../pages/Show'

export default function Router() {
  return  (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route path='/show' component={Show} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
