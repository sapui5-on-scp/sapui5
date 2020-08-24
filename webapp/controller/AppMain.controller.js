sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("ds.test.controller.AppMain", {
		onInit: function () {
			console.log("onInit AppMain");
		},

		onPressBtn: function () {
			MessageBox.alert("Welcome to SAPUI5");
		}
	});
});