var Ksj;
(function (Ksj) {
    /// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
    /// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.FirstName = ko.observable("");
                this.LastName = ko.observable("");
                this.Age = ko.observable(0);
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.FirstName.extend({
                    required: true
                });

                this.LastName.extend({
                    required: true
                });

                this.Age.extend({
                    min: 1,
                    max: 99
                });

                ko.validation.group(this).showAllMessages();
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
