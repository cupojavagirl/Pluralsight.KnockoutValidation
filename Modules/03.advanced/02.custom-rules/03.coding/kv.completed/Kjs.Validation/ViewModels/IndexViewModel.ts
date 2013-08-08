/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public MustBePositiveValue: KnockoutObservable<number> = ko.observable(0);

        constructor() {
            this.SetupValidation();
        }

        private SetupValidation() {
            this.MustBePositiveValue.extend(
                {
                    isPositiveNumber: true
                });
        }

    }
}
