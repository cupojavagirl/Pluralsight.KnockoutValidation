/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public MinLengthValue: KnockoutObservable<string> = ko.observable("");
        public MaxLengthValue: KnockoutObservable<string> = ko.observable("");

        constructor() {
            this.SetupValidation();
        }

        public SetupValidation() {
            this.MinLengthValue.extend({ minLength: 5 });
            this.MaxLengthValue.extend({ maxLength: 10 });
        }
    }
}
