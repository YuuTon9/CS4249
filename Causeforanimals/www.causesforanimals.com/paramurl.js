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

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}
console.log('User Id is %s', values.userId)
console.log('Question Id is %s', values.questionId)
console.log('List length is %s', values.listLength)
console.log('List length is %s', values.layoutId)
console.log(values.dog_datas.length)
function startExperiment() {
    var date = new Date();
    var timestamp = date.getTime();
    console.log("Started experiment at %s", timestamp)
}
