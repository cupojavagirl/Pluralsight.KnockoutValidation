/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public AllLowerVales: KnockoutObservable<string> = ko.observable("");
        public PhoneNumberValue: KnockoutObservable<string> = ko.observable("");
        constructor() {
            this.SetupValidation();
        }

        public SetupValidation() {
            this.PhoneNumberValue.extend({
                pattern: {
                    params: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
                    message: 'Invalid phone number.'
                }
            });
            this.AllLowerVales.extend({
                pattern: {
                    params: "^[a-z]*$",
                    message: "All values must be lower case"
                }
            });
        }
    }
}
