/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public RequiresValidation: KnockoutObservable<boolean> = ko.observable(false);
        public ValueToValidate: KnockoutObservable<number> = ko.observable(0);

        constructor() {            
            this.SetupValidation();
        }

        private SetupValidation() {

            this.ValueToValidate.extend({
                required: {
                    message: "Need to populate this w/ a value",
                    onlyIf: () => { return this.RequiresValidation() === true; }
                }
            });
        }

    }
}
