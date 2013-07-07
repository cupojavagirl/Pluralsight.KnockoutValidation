var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.FullName = ko.observable("Derik Whittaker");
                this.Age = ko.observable(1);
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.FullName.extend({ required: true });
                this.Age.extend({ required: true }).extend({ min: { params: 5, message: "Must be >= 5" } }).extend({ max: { params: 17, message: "Must be <= 17" } });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
