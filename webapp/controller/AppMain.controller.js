sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("ui5.test.controller.AppMain", {
		onInit: function () {
			console.log("onInit AppMain");
		},

		onBeforeRendering : function() {
			let oLinkModel = this.getOwnerComponent().getModel("link");
			let oData = oLinkModel.getData();
			
			this.fillVBox(oData);
		},

		onPressTile : function () {
			window.open("https://open.kakao.com/o/gaOOsZ4b","_href");
		},

		fillVBox : function (oData) {
			let oUi5VBox = this.byId("ui5VBox");
			let oJsVBox = this.byId("jsVBox");
			let oUi5Data = oData.SAPUI5;
			let oJsData = oData.JavaScript;

			console.log(oUi5VBox);

			for(let link of oUi5Data){
				let oHBox = new sap.m.HBox();
				let oLink = new sap.m.Link({
					text : link.name,
					href : link.href
				});
				
				oHBox.addItem(new sap.m.Text({
					text : "●"
				}));
				oHBox.addItem(new sap.m.HBox({
					width : "1rem"
				}));
				oHBox.addItem(oLink);

				oUi5VBox.addItem(oHBox);
			}

			for(let link of oJsData){
				let oHBox = new sap.m.HBox();
				let oLink = new sap.m.Link({
					text : link.name,
					href : link.href
				});
				
				oHBox.addItem(new sap.m.Text({
					text : "●"
				}));
				oHBox.addItem(new sap.m.HBox({
					width : "1rem"
				}));
				oHBox.addItem(oLink);

				oJsVBox.addItem(oHBox);
			}
		}
	});
});