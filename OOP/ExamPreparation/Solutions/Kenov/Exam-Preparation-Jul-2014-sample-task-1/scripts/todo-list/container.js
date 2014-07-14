define(function () {
    'use strict';
    var Container;

    Container = (function () {
        function Container() {
            this._sections = [];
        }

        Container.prototype = {
            add: function (section) {
                this._sections.push(section);
            },
            getData: function () {
                return this._sections.map(function (section) {
                    return section.getData();
                });
            }
        };

        return Container;
    }());

    return Container;
});