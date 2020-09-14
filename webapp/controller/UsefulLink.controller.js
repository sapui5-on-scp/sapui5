sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History"
], function (Controller, MessageBox,History) {
	"use strict";

	return Controller.extend("ui5.study.controller.UsefulLink", {
		onInit: function () {
			console.log("onInit UsefulLink");
		},

		onBeforeRendering: function () {
			let oLinkModel = this.getOwnerComponent().getModel("link");
			let oData = oLinkModel.getData();

			console.log(oData);

			this.fillVBox(oData);
		},

		onBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				// There is no history!
				// replace the current hash with page 1 (will not add an history entry)
				this.getOwnerComponent().getRouter().navTo("page1", null, true);
			}
		},

		fillVBox: function (oData) {
			let oUi5VBox = this.byId("ui5VBox");
			let oJsVBox = this.byId("jsVBox");
			let oUi5Data = oData.SAPUI5;
			let oJsData = oData.JavaScript;

			console.log(oUi5VBox);

			for (let link of oUi5Data) {
				let oHBox = new sap.m.HBox();
				let oLink = new sap.m.Link({
					text: link.name,
					href: link.href,
					target: "_blank"
				});

				oHBox.addItem(new sap.m.Text({
					text: "●"
				}));
				oHBox.addItem(new sap.m.HBox({
					width: "1rem"
				}));
				oHBox.addItem(oLink);

				oUi5VBox.addItem(oHBox);
			}

			for (let link of oJsData) {
				let oHBox = new sap.m.HBox();
				let oLink = new sap.m.Link({
					text: link.name,
					href: link.href
				});

				oHBox.addItem(new sap.m.Text({
					text: "●"
				}));
				oHBox.addItem(new sap.m.HBox({
					width: "1rem"
				}));
				oHBox.addItem(oLink);

				oJsVBox.addItem(oHBox);
			}
		}
	});
});