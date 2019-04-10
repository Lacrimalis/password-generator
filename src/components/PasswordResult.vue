<template>
	<b-jumbotron>
		<h1>Password Generator</h1>

		<p class="lead">This is a fancy password generator.</p>

		<hr class="my-4">

		<password-input />

		<hr class="my-4">

		<b-button block size="lg" variant="success" href="#">Generate Fancy Password</b-button>
	</b-jumbotron>
</template>

<script>
	import passwordInput from "./PasswordInput.vue";
	export default {
		name: 'PasswordResult',
		components: { passwordInput }
	}
</script>
