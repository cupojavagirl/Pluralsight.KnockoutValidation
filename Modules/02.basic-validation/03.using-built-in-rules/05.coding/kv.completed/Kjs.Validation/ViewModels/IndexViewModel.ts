/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public FullName: KnockoutObservable<string> = ko.observable("Derik Whittaker");
        public Age: KnockoutObservable<number> = ko.observable(1);

        constructor() {
            this.SetupValidation();
        }

        public SetupValidation() {
            this.FullName.extend({ required: true });
            this.Age
                .extend({ required: true })
                .extend({ min: { params: 5, message: "Must be >= 5" } })
                .extend({ max: { params: 17, message: "Must be <= 17" } })
            ;
        }
    }
}
