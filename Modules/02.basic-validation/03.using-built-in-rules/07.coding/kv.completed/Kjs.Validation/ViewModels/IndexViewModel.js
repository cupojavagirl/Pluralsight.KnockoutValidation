var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.MinLengthValue = ko.observable("");
                this.MaxLengthValue = ko.observable("");
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.MinLengthValue.extend({ minLength: 5 });
                this.MaxLengthValue.extend({ maxLength: 10 });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
