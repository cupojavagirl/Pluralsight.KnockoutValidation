var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.ControlValue = ko.observable("Control");
            }
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
