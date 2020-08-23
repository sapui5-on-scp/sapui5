sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ds.test.controller.AppMain", {
		onInit: function () {
			console.log("onInit AppMain");
		},

		onPressBtn: function () {
			console.log("!!!!");
		}
	});
});