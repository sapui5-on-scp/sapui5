sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (
	Controller, JSONModel
) {
	"use strict";

	return Controller.extend("ui5.study.controller.Intro", {
		onInit: function () {
			console.log("onInit Intro");
			if (!this._oEvtDialog) {
				this._oEvtDialog = sap.ui.xmlfragment("ui5/study/fragment/EventDialog", this);
				this.getView().addDependent(this._oEvtDialog);
			}
		},

		onPressTile: function () {
			window.open("https://open.kakao.com/o/gaOOsZ4b", "_href");
		},

		onPressEvtBtn: function (oEvent) {
			this._oEvtDialog.open();
			let oPList = new JSONModel();
			oPList.loadData("./model/pList.json");

			oPList.attachRequestCompleted(() => {
				console.log(oPList.getData().data);
				this.onProcessPick(oPList.getData().data);
			});


		},

		onProcessPick: function (aData) {
			let oVBox = sap.ui.getCore().byId("totVBox");
			for (let data of aData) {
				oVBox.addItem(new sap.m.Text({
					text : data.id
				}));
			}
		},
		onPressClose: function (){
			this._oEvtDialog.close();
		}
	});
});