var Ksj;
(function (Ksj) {
    /// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
    /// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.RequiredField = ko.observable("");
                this.RangeField = ko.observable(0);
            }
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
