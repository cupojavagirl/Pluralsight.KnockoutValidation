var Ksj;
(function (Ksj) {
    (function (Validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                this.FavoriteSport = ko.observable("Baseball");
                this.SetupValidation();
            }
            IndexViewModel.prototype.SetupValidation = function () {
                this.FavoriteSport.extend({ required: true });
            };
            return IndexViewModel;
        })();
        Validation.IndexViewModel = IndexViewModel;
    })(Ksj.Validation || (Ksj.Validation = {}));
    var Validation = Ksj.Validation;
})(Ksj || (Ksj = {}));
