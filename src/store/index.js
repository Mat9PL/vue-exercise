import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: []
	},
	mutations: {
		addUser(state, user) {
			state.users.push({ user })
		},
		removeUser(state, user) {
			state.users.splice(state.users.indexOf(user), 1)
		}
	}
})