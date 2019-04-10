<template>
	<b-jumbotron>
		<h1>Settings</h1>

		<p class="lead">
			You can customize your password here.
		</p>

		<hr class="my-4">

		<b-input-group :prepend="getMinPasswordSize" :append="getMaxPasswordSize" class="mt-3">
			<b-form-input :value="getPasswordSize" @input="setPasswordSize" :step="getStepSize" type="range" :min="getMinPasswordSize" :max="getMaxPasswordSize"></b-form-input>
		</b-input-group>

		<p class="my-4">Password Lenght: <b>{{ getPasswordSize }}</b></p>

		<hr />

<!--		<span>My password includes...</span>-->

<!--		<b-form-group class="m-1">-->
<!--			<b-form-checkbox-group-->
<!--					v-model="selected"-->
<!--					:options="options"-->
<!--			></b-form-checkbox-group>-->
<!--		</b-form-group>-->

		<b-form-group label="My password includes...">
			<b-form-checkbox-group v-model="selected">
				<b-form-checkbox :disabled="getCanUseUppercase" value="uppercase">Uppercase</b-form-checkbox>
				<b-form-checkbox :disabled="getCanUseLowercase" value="lowercase">Lowercase</b-form-checkbox>
				<b-form-checkbox :disabled="getCanUseNumbers" value="numbers">Numbers</b-form-checkbox>
				<b-form-checkbox :disabled="getCanUseSymbols" value="symbols">Symbols</b-form-checkbox>
			</b-form-checkbox-group>
		</b-form-group>


	</b-jumbotron>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default {
		name: "Settings",
		data()
		{
			return {
				selected: ['uppercase', 'lowercase', 'numbers', 'symbols']
			}
		},
		watch:
			{
				selected(updatedData)
				{
					this.setSelectedOptions(updatedData);
					this.generatePassword();
				},
				getPasswordSize()
				{
					this.generatePassword();
				}
			},
		methods:
			{
				...mapMutations([
					'setPasswordSize',
					'generatePassword',
					'setSelectedOptions',
					'generatePassword'
				])
			},
		computed:
			{
				...mapGetters([
					'getStepSize',
					'getMinPasswordSize',
					'getMaxPasswordSize',
					'getPasswordSize',
					'getCanUseUppercase',
					'getCanUseLowercase',
					'getCanUseNumbers',
					'getCanUseSymbols'
				])
			}
	}
</script>