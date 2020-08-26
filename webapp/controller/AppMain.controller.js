sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("ui5.test.controller.AppMain", {
		onInit: function () {
			console.log("onInit AppMain");
			this.onExpandAll();
		},

		onPressTile : function () {
			window.open("https://open.kakao.com/o/gaOOsZ4b","_href");
		},
 
		onCollapseAll: function() {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},

		onExpandAll : function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(2);
		}
	});
});