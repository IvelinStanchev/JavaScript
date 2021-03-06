﻿define(['libs/jquery-1.11.1.min', 'combo-box', 'test-data'], function (jquery, controls, people) {

    var run = function () {
        var comboBox = controls.ComboBox(people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        $('#combo-box-container').html(comboBoxHtml);
    };

    return {
        run: run
    };
});