window.onload = function() {
    function ParseURLParameter(Parameter) {
        var FullURL = window.location.substring(1);
        var ParametersAray = FullURL.split('&');
        for (var i = 0; i < ParametersAray.length; i++) {
            var CurrPar = ParametersAray[i].split('=');
            if (CurrPar[0] == Parameter) {
                return CurrPar[1];
            }
        }
    }
}