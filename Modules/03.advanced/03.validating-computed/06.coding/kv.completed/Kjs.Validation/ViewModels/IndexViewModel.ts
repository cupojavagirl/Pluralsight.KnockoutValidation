/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public Value1: KnockoutObservable<number> = ko.observable(0);
        public Value2: KnockoutObservable<number> = ko.observable(0);
        public Total: KnockoutComputed<number>;

        constructor() {

            this.Total = ko.computed(() => {
                return this.Value1() + this.Value2();
            });

            this.SetupValidation();

        }

        private SetupValidation() {
            ko.validation.rules['isPositive'] = {
                validator: function (val, otherVal) {
                    return val >= 0;
                },
                message: 'The total must be positive'
            };

            ko.validation.registerExtenders();

            this.Total.extend({ isPositive: { message: "Total cannot be less than 0" } });
        }

    }
}
