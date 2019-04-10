import state from './state.js';

export default {
		getPasswordSize()
		{
			return state.passwordSize.toString();
		},
		getPasswordIncludes()
		{
			return state.passwordIncludes;
		},
		getGeneratedPassword()
		{
			return state.generatedPassword;
		},
		getStepSize()
		{
			return state.settings.stepSize.toString();
		},
		getMinPasswordSize()
		{
			return state.settings.minSize.toString();
		},
		getMaxPasswordSize()
		{
			return state.settings.maxSize.toString();
		},
		getCanCopy()
		{
			return !state.settings.canCopy;
		},
		getCanUseUppercase()
		{
			return !state.settings.canUseUppercase;
		},
		getCanUseLowercase()
		{
			return !state.settings.canUseLowercase;
		},
		getCanUseNumbers()
		{
			return !state.settings.canUseNumbers;
		},
		getCanUseSymbols()
		{
			return !state.settings.canUseSymbols;
		}
	};