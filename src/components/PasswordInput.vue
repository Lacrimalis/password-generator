<template>
	<b-input-group>
		<b-form-input class="text-center bg-white" readonly size="lg" placeholder="Your fancy password"></b-form-input>
		<b-input-group-append>
			<b-button size="lg" text="Copy" variant="primary">Copy</b-button>
		</b-input-group-append>
	</b-input-group>
</template>

<script>
	export default {
		name: "PasswordInput"
	}
</script>