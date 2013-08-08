var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.MustBePositiveValue = ko.observable(0);
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.MustBePositiveValue.extend({
                    validation: {
                        validator: function (value, mustBePositive) {
                            if (!mustBePositive) {
                                return true;
                            }

                            return value >= 0;
                        },
                        message: "The value must be positive",
                        params: true
                    }
                });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
