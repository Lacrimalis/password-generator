export default {
	setPasswordSize(state, size)
	{
		const { minSize, maxSize } = state.settings;
		if (parseInt(size) <= maxSize && parseInt(size) >= minSize)
			state.passwordSize = parseInt(size);
	},
	setSelectedOptions(state, data)
	{
		state.selectedOptions = data;
	},
	generatePassword(state)
	{
		const generateRandomNumber = number => Math.floor(Math.random() * number);
		const { minSize, maxSize } = state.settings;
		const { letters, numbers, symbols, passwordSize, selectedOptions } = state;

		if (parseInt(passwordSize) <= maxSize && parseInt(passwordSize) >= minSize && selectedOptions.length > 0)
		{
			let generatedNewPassword = '';

			for (let i = 0; i < passwordSize; i++)
			{
				switch (selectedOptions[generateRandomNumber(selectedOptions.length)])
				{
					case 'uppercase':
						generatedNewPassword += letters[generateRandomNumber(letters.length)].toUpperCase();
						break;
					case 'lowercase':
						generatedNewPassword += letters[generateRandomNumber(letters.length)].toLowerCase();
						break;
					case 'numbers':
						generatedNewPassword += numbers[generateRandomNumber(numbers.length)];
						break;
					case 'symbols':
						generatedNewPassword += symbols[generateRandomNumber(symbols.length)];
						break;
				}
			}

			state.generatedPassword = generatedNewPassword;
		}
	}
}