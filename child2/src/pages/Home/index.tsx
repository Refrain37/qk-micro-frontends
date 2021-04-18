import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setMicroState} from '../../actions/microState'


export default function Home(props:any) {
  const dispatch = useDispatch()
  const microState = useSelector((state:any) => {
    const {microState} = state
    return microState
  })
  
  const [user,setUser] = useState(microState.user)

  function change() {
    const newUser = 'child2 change!!!'
    setUser(newUser)
    dispatch(setMicroState({user:newUser,ok:'ok'}))
    console.log(microState);
  }

  return (
   <div>
      <div>home!!!</div>
      <div>{user}</div>
      <button onClick = {change}>change username</button>
   </div>
  )
}