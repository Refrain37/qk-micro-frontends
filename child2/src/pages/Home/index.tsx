import {useSelector,useDispatch} from 'react-redux'
import {getMicroState} from '../../actions/microState'

export default function Home(props:any) {
  const dispatch = useDispatch()
  console.log(dispatch(getMicroState()));
  const microState = useSelector(state => state)
  console.log(microState);
  return <div>home!!!</div>
}