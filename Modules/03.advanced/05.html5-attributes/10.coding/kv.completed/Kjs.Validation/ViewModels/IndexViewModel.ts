/// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Ksj.Validation {
    export class IndexViewModel {
        public RequiredField: KnockoutObservable<string> = ko.observable("");
        public RangeField: KnockoutObservable<number> = ko.observable(0);
        
    }
}
