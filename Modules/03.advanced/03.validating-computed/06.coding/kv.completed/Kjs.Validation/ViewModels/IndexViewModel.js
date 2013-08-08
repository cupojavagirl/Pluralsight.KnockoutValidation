var Ksj;
(function (Ksj) {
    /// <reference path="../Scripts/typings/knockout.validation/knockout.validation.d.ts" />
    /// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                var _this = this;
                this.Value1 = ko.observable(0);
                this.Value2 = ko.observable(0);
                this.Total = ko.computed(function () {
                    return _this.Value1() + _this.Value2();
                });

                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                ko.validation.rules['isPositive'] = {
                    validator: function (val, otherVal) {
                        return val >= 0;
                    },
                    message: 'The total must be positive'
                };

                ko.validation.registerExtenders();

                this.Total.extend({ isPositive: { message: "Total cannot be less than 0" } });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
