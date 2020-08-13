<template>
	<div>
		<router-link to="/userform">Add another user</router-link>
		<h2>Users:</h2>
		<div>
			<div v-for="(user, index) in users" :key="index" class="user">
				<img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/96/User-blue-icon.png" alt="">
				<div class="user-info">
					<h2>{{ user.name }}</h2>
					<h3>{{ user.surname }}</h3>
					<h3>{{ user.email }}</h3>
					<h3>{{ user.phone }}</h3>
				</div>
				<button @click="removeUser(user)">x</button>
			</div>
		</div>
	</div>
</template>

<script>
import store from '../store';
export default {
	name: 'list',
	computed: { users: () => store.state.users },
	methods: {
		removeUser(user) {
			store.commit('removeUser', user)
		}
	}
}
</script>

<style scoped>
	h2 {
		font-weight: bold;
		margin: 0;
	}
	h3 {
		font-weight: normal;
		margin: 0;
	}
	.user {
		width: 500px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		margin: auto;
		padding: 4px;
		border: 2px solid gray;
	}
	.user-info {
		display: flex;
		flex-direction: column;
	}
</style>