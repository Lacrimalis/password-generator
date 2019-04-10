<template>
	<b-jumbotron>
		<h1>Password Generator</h1>

		<p class="lead">This is a fancy password generator.</p>

		<hr class="my-4">

		<password-input />

		<hr class="my-4">

		<b-button @click="generatePassword" block size="lg" variant="success">Generate Fancy Password</b-button>
	</b-jumbotron>
</template>

<script>
	import passwordInput from "./PasswordInput.vue";
	import { mapMutations } from 'vuex';

	export default {
		name: 'PasswordResult',
		components: { passwordInput },
		methods:
			{
				...mapMutations(['generatePassword'])
			}
	}
</script>
