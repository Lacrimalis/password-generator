<template>
	<b-input-group>
		<b-form-input :value="getGeneratedPassword" class="text-center bg-white" readonly size="lg" placeholder="Your fancy password"></b-form-input>
		<b-input-group-append>
			<b-button id="copy" @click="copyToClipboard" :data-clipboard-text="getGeneratedPassword" size="lg" :disabled="getCanCopy" text="Copy" variant="primary">Copy</b-button>
		</b-input-group-append>
	</b-input-group>
</template>

<script>
	import Toastify from 'toastify-js';
	import { mapGetters } from 'vuex';

	export default {
		name: "PasswordInput",
		computed: {
			...mapGetters([
				'getCanCopy',
				'getGeneratedPassword'
			])
		},
		methods:
			{
				copyToClipboard()
				{
					this.$copyText(this.getGeneratedPassword).then(() =>
					{
						Toastify ({
							text: "Copied to clipboard!",
							duration: 2000
						}).showToast();
					})


				}
			}
	}
</script>