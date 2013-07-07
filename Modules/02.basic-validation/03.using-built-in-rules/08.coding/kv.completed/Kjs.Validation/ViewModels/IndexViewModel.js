var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.AllLowerVales = ko.observable("");
                this.PhoneNumberValue = ko.observable("");
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.AllLowerVales.extend({
                    pattern: {
                        params: "^[a-z]*$",
                        message: "All values must be lower case"
                    }
                });

                this.PhoneNumberValue.extend({
                    pattern: {
                        params: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
                        message: 'Invalid phone number.'
                    }
                });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
