/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />

interface KnockoutValidationRuleDefinitions {
    isPositiveNumber: KnockoutValidationRuleDefinition
}

(function () {
    ko.validation.rules['isPositiveNumber'] = {
        validator: (value, mustBePositive) => {
            if (!mustBePositive) { return true; }

            return value >= 0;
        },
        message: "The value must be positive"
    };

    ko.validation.registerExtenders();
})();