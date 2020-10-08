import axios from "axios"
import router from "../../router/index"

const state = {
  user: {},
  users: ["shit"],
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
    await axios.post("http://localhost:5000/api/users", context.state.user).catch((err) => console.log(err))
    router.push("/user-verification/login")
  },
}

export default {
  state,
  mutations,
  actions,
}
