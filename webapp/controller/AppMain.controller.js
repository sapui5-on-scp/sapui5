sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("ui5.test.controller.AppMain", {
		onInit: function () {
			console.log("onInit AppMain");
			this.onExpandAll();
			let oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.addStyleClass("tWidth30");
		},

		onPressTile : function () {
			window.open("https://open.kakao.com/o/gaOOsZ4b","_href");
		},
 
		onCollapseAll: function() {
			let oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},

		onExpandAll : function () {
			let oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(2);
		}
	});
});