<template>
	<b-jumbotron>
		<h1>Settings</h1>

		<p class="lead">
			You can customize your password here.
		</p>

		<hr class="my-4">

		<b-input-group prepend="6" append="32" class="mt-3">
			<b-form-input step="1" type="range" min="6" max="32"></b-form-input>
		</b-input-group>

		<p class="my-4">Password Lenght: <b>24</b></p>

		<hr />

		<span>My password includes...</span>

		<b-form-group class="m-1">
			<b-form-checkbox-group
					v-model="selected"
					:options="options"
			></b-form-checkbox-group>
		</b-form-group>


	</b-jumbotron>
</template>

<script>
	export default {
		name: "Settings",
		data()
		{
			return {
				selected: ['uppercase', 'lowercase', 'numbers', 'symbols'], // Must be an array reference!
				options: [
					{ text: 'Uppercase', value: 'uppercase' },
					{ text: 'Lowercase', value: 'lowercase' },
					{ text: 'Numbers', value: 'numbers' },
					{ text: 'Symbols', value: 'symbols' }
				]
			}
		}
	}
</script>

<style scoped>

</style>