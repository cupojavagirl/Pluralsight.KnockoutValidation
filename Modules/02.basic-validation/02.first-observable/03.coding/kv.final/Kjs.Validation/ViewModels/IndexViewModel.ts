/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public FavoriteSport: KnockoutObservable<string> = ko.observable("Baseball");

        constructor() {
            this.SetupValidation();
        }

        private SetupValidation() {
            this.FavoriteSport.extend({ required: true });
        }
    }
}
