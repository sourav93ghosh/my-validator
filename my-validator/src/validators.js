
const RequiredValidator = (field) => {
	const validator = {};
	validator.validate = () => {
	    if (field.constructor === Object) {
	        return Boolean(field.value) && typeof field.value === 'string';
	    }
    }
    validator.message = 'Required Field';
	return validator;
}

const NumericValidator = (field) => {
	const validator = {};
	validator.validate = () => {
	    if (field.constructor === Object && field.value && typeof field.value === 'string') {
	        return !isNaN(Number(field.value));
	    }
    }
    validator.message = 'Numeric Field';
	return validator;
}

const NonDecimalValidator = (field) => {
    const validator = {};
    validator.validate = () => {
        if (field.constructor === Object && field.value && typeof field.value === 'string') {
            return !isNaN(Number(field.value)) && field.value.indexOf('.') < 0;
        }
    }
    validator.message = 'Non decimal Field';
    return validator;
}

const MinlengthValidator = (field) => {
    const validator = {};
    let value;
    let minlength;
    if (field.constructor === Object) {
        value = field.value;
        minlength = field.getAttribute('data-minlength');
    }
    validator.validate = () => {
        if (value && typeof value === 'string' && minlength && !isNaN(Number(minlength))) {
            return value.length < minlength;
        }
    }
    validator.message = minlength && !isNaN(Number(minlength)) ? `Minimum length ${minlength}` : '';
    return validator;
}

const MaxlengthValidator = (field) => {
    const validator = {};
    let value;
    let maxlength;
    if (field.constructor === Object) {
        value = field.value;
        maxlength = field.getAttribute('data-maxlength');
    }
    validator.validate = () => {
        if (value && typeof value === 'string' && maxlength && !isNaN(Number(maxlength))) {
            return value.length < maxlength;
        }
    }
    validator.message = maxlength && !isNaN(Number(maxlength)) ? `Minimum length ${maxlength}` : '';
    return validator;
}

module.exports = {
	RequiredValidator,
	NumericValidator,
	NonDecimalValidator,
	MinlengthValidator,
	MaxlengthValidator
}