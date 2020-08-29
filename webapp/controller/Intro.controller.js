sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("ui5.study.controller.Intro", {
		onInit: function(){
			console.log("onInit Intro");
		},

		onPressTile : function () {
			window.open("https://open.kakao.com/o/gaOOsZ4b","_href");
		},
	});
});