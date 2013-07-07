/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public ControlValue: KnockoutObservable<string> = ko.observable("Control");
        public IfEqualValue: KnockoutObservable<string> = ko.observable("");
        public IfNotEqualValue: KnockoutObservable<string> = ko.observable("");
        public NonObjectValue: KnockoutObservable<string> = ko.observable("");

        constructor() {
            this.SetupValidation();
        }

        public SetupValidation() {
            this.NonObjectValue.extend({ equal: "Red" });
            this.IfEqualValue.extend(
                {
                    equal: this.ControlValue
                });
            this.IfNotEqualValue.extend(
                {
                    notEqual: {
                        params: this.ControlValue,
                        message: "Must Not Equal the Control Value"
                    }
                });
        }
    }
}
