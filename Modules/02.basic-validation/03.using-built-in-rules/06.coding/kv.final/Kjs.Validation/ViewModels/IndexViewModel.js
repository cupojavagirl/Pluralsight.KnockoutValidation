var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.ControlValue = ko.observable("Control");
                this.IfEqualValue = ko.observable("");
                this.IfNotEqualValue = ko.observable("");
                this.NonObjectValue = ko.observable("");
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.NonObjectValue.extend({ equal: "Red" });
                this.IfEqualValue.extend({
                    equal: this.ControlValue
                });
                this.IfNotEqualValue.extend({
                    notEqual: {
                        params: this.ControlValue,
                        message: "Must Not Equal the Control Value"
                    }
                });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
