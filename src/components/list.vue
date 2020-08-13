<template>
	<div>
		<ul>
			<li v-for="(user, index) in users" :key="index">
				{{ user.name }}
				<button @click="removeUser(user)">x</button>
			</li>
		</ul>
	</div>
</template>

<script>
import store from '../store';
export default {
	name: 'list',
	data() {
		return {
			name: ''
		}
	},
	computed: { users: () => store.state.users },
	methods: {
		removeUser(user) {
			store.commit('removeUser', user)
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
    border: 2px solid gray;
  }
</style>