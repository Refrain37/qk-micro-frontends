const getters = {
  // app
  isOpened: (state: any) => state.app.sidebar.isOpened,
  // user
  token: (state: any) => state.user.token,
  username: (state: any) => state.user.username,
  avatar: (state: any) => state.user.avatar
}

export default getters
