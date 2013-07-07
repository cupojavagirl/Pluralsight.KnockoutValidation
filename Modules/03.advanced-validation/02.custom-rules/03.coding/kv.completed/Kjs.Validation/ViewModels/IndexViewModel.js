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
                    isPositiveNumber: true
                });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
