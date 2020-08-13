<template>
	<div>
		<router-link to="/list">See list of users</router-link>
		<form @submit.prevent="addUser" to="/list">
			<input placeholder="Name" v-model="name"/>
      <input placeholder="Surname" v-model="surname"/>
      <input placeholder="Email" v-model="email"/>
      <input placeholder="Phone" v-model="phone"/>
			<button> Add User </button>
		</form>
	</div>
</template>

<script>
import store from '../store';
export default {
	name: 'userform',
	data() {
		return {
			name: ''
		}
	},
	computed: { users: () => store.state.users },
	methods: {
		addUser() {
			const user = {
				name: this.name,
				surname: this.surname,
				email: this.email,
				phone: this.phone,
			}
			store.commit('addUser', user)
			this.name =''
			this.surname =''
			this.email =''
			this.phone =''
			alert("new user added!!");
		},
		removeUser(id) {
			store.commit('removeUser', id)
		}
	}
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 500px;
    margin: auto;
    height: 200px;
    /* border: 2px solid gray; */
  }
</style>