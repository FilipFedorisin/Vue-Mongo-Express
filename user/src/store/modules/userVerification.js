import axios from "axios"

const state = {
  user: {},
}
const mutations = {
  setUser(state, { email, password }) {
    state.user.email = email
    state.user.password = password
  },
}
const actions = {
  async createUser(context) {
    // TODO: Wrap in a service helper

    const response = await axios
      .post("http://localhost:5000/api/users", context.state.user)
      .catch((err) => console.log(err))
    console.log(response)

    // TODO: Rediredct to Login page route
  },
}

export default {
  state,
  mutations,
  actions,
}
