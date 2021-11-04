/**
 * Convert the constraint to a string to be shown in an error
 */
export function constraintToString(constraint) {
    if (Array.isArray(constraint)) {
        return constraint.join(', ');
    }
    return "" + constraint;
}
var ValidationUtils = /** @class */ (function () {
    function ValidationUtils() {
    }
    ValidationUtils.replaceMessageSpecialTokens = function (message, validationArguments) {
        var messageString;
        if (message instanceof Function) {
            messageString = message(validationArguments);
        }
        else if (typeof message === 'string') {
            messageString = message;
        }
        if (messageString && validationArguments.constraints instanceof Array) {
            validationArguments.constraints.forEach(function (constraint, index) {
                messageString = messageString.replace(new RegExp("\\$constraint" + (index + 1), 'g'), constraintToString(constraint));
            });
        }
        if (messageString &&
            validationArguments.value !== undefined &&
            validationArguments.value !== null &&
            typeof validationArguments.value === 'string')
            messageString = messageString.replace(/\$value/g, validationArguments.value);
        if (messageString)
            messageString = messageString.replace(/\$property/g, validationArguments.property);
        if (messageString)
            messageString = messageString.replace(/\$target/g, validationArguments.targetName);
        return messageString;
    };
    return ValidationUtils;
}());
export { ValidationUtils };
//# sourceMappingURL=ValidationUtils.js.map