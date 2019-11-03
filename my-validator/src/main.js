const validatorFatory = require('./validator-factory');
const style = require('./style');
const validators = validatorFatory();
const styleObj = style();

const Util = () => {
	const validateForm = (form) => {
		let isValid = true;
		for (const field of form) {
			for (const name in validators) {
				const validator = validators[name](field);
				const errHtmlId = field.getAttribute('data-error-html-id');
				const errEl = document.getElementById(errHtmlId);
				if (errEl) {
					if (field.getAttribute(`data-${name}`) && !validator.validate()) {
						const errMessage = field.getAttribute(`data-${name}-error-message`);
						errEl.innerText = errMessage ? errMessage : validator.message;
						errEl.style = styleObj.getErrClass();
						field.style = styleObj.getErrFieldClass();
						isValid = false;
						break;
					} else {
						errEl.innerText = '';
						errEl.className = '';
						field.className = '';
					}
				}
			}
		}
		return isValid;
	}

	const addValidator = (name, validator) => {
		if (typeof name === 'string' && typeof validator === 'function') {
			validators[name] = validator;
		}
	}
	return {
		validateForm: validateForm,
		addValidator: addValidator
	}
}

module.exports = Util;