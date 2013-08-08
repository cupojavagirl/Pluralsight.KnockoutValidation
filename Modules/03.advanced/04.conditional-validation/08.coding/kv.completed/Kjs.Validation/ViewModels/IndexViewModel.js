var Ksj;
(function (Ksj) {
    /// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
    /// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.RequiresValidation = ko.observable(false);
                this.ValueToValidate = ko.observable(0);
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                var _this = this;
                this.ValueToValidate.extend({
                    required: {
                        message: "Need to populate this w/ a value",
                        onlyIf: function () {
                            return _this.RequiresValidation() === true;
                        }
                    }
                });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
