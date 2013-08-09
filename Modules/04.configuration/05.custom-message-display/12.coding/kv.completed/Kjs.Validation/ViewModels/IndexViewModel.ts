/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public FirstName: KnockoutObservable<string> = ko.observable("");
        public LastName: KnockoutObservable<string> = ko.observable("");
        public Age: KnockoutObservable<number> = ko.observable(0);

        constructor() {
            this.SetupValidation();
        }

        private SetupValidation() {
            this.FirstName.extend(
                {
                    required: true
                });

            this.LastName.extend(
                {
                    required: true
                });

            this.Age.extend(
                {
                    min: 1,
                    max: 99
                });

            ko.validation.group(this).showAllMessages();
        }

    }
}
