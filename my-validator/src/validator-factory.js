const validatorModule = require('./validators');

const ValidatorFatory = () => {
	return {
		required: validatorModule.RequiredValidator,
		numeric: validatorModule.NumericValidator,
		nondecimal: validatorModule.NonDecimalValidator,
		minlength: validatorModule.MinlengthValidator,
		maxlength: validatorModule.MaxlengthValidator,
	}
}

module.exports = ValidatorFatory;