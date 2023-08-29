export default {
  namespaced: true,
  state: {
    userInfo: {
      username: ''
    }
  },
  actions: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => (state[key] = payload[key]))
    }
  }
}
