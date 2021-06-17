import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Form, Input } from '@alifd/next';

const formItemLayout = {
  labelCol: {
    fixedSpan: 8
  },
  wrapperCol: {
    span: 14
  }
};

interface IUserInfo {
  avatar: string
  username: string
  email: string
  github: string
  introduction: string
}
interface IGlobalState {
  user: string
  token: string
  userInfo: IUserInfo | string
}

interface IForm extends IUserInfo{
  user:string
  token:string
}

export default function Home() {
  // const dispatch = useDispatch()
  const microState:IGlobalState = useSelector((state:any) => {
    const {microState} = state
    return microState
  })

  const [state,setState] = useState(microState)
  const [userInfo,setUserInfo] = useState<IUserInfo>(typeof state.userInfo === 'string'?
     JSON.parse(state.userInfo as string):
     state.userInfo)


  const handleSubmit = (values:IForm) => {
    const { user,token,username,avatar,github,email,introduction} = values

    const newUserInfo:IUserInfo = {
      username,
      avatar,
      github,
      email,
      introduction
    }
    const newState:IGlobalState = {
      user,
      token,
      userInfo:newUserInfo
    }
    // setUserInfo(newUserInfo)
    // setState(newState)

    console.log(newUserInfo,newState);
  };
  
  return (
    <Form style={{ width: "60%" }} {...formItemLayout} colon>
      <Form.Item label="user">
        <Input name="user" defaultValue={state.user}></Input>
      </Form.Item>
      <Form.Item label="token">
        <Input name="token"  defaultValue={state.token}></Input>
      </Form.Item>
      <Form.Item label="username">
        <Input name="username" defaultValue={userInfo.username}></Input>
      </Form.Item>
      <Form.Item label="avatar">
        <Input name="avatar" defaultValue={userInfo.avatar}></Input>
      </Form.Item>
      <Form.Item label="email">
        <Input name="email" defaultValue={userInfo.email}></Input>
      </Form.Item>
      <Form.Item label="github">
        <Input name="github" defaultValue={userInfo.github}></Input>
      </Form.Item>
      <Form.Item label="introduction">
        <Input name="introduction" defaultValue={userInfo.introduction}></Input>
      </Form.Item>
      <Form.Item label=" ">
          <Form.Submit
            style={{ width: "100%" }}
            type="primary"
            onClick={handleSubmit}
          >
            Submit
          </Form.Submit>
        </Form.Item>
    </Form>
  )
}
