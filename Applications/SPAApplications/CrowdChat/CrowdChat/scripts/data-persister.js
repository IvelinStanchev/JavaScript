define(['http-requester', 'libs/q', 'Controllers/UI-controller', 'Controllers/UserController'],
    function (HttpRequester, Q, UiController, UserController) {

    var DataPersister = (function () {
        var getAllUsers = function (url) {
            var deferred = Q.defer();

            return HttpRequester.getJSON(url);
            //.then(function (data) {
            //    deferred.resolve(data);
            //}, function (err) {
            //    deferred.reject(err);
            //})

            //return deferred.promise;
        }

        var postMessage = function (url, message) {
            var data = JSON.stringify({
                user: UserController.username,
                message: message
            });

            HttpRequester.postJSON(url, data).then(function () {
                UiController.addMessageToChatBox(UserController.username, message);
            }, function (err) {
            })
        }

        return {
            getAllUsers: getAllUsers,
            postMessage: postMessage
        };
    }());

    return DataPersister;
});