sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	'sap/ui/model/json/JSONModel',
], function (Controller, MessageBox,JSONModel) {
	"use strict";

	return Controller.extend("ui5.study.controller.AppMain", {
		onInit: function () {
			this.router = this.getOwnerComponent().getRouter();
			var oModel = new JSONModel(sap.ui.require.toUrl("ui5/study/model/menuItem.json"));
			this.getView().setModel(oModel);

			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("ui5/study/fragment/PageSwitchPopover", this);
				this.getView().addDependent(this._oPopover);
			}
		},
		fnChange: function (oEvent) {

			const target = oEvent.getParameter("itemPressed").getTarget();

			if (target === "intro") {
				this.router.navTo("Intro");
			}
			else if (target === "usefulLink") {
				this.router.navTo("UsefulLink");
			}

		},
		fnOpen: function (oEvent) {
			this._oPopover.openBy(oEvent.getParameter("button"));
		},
		fnClose: function () {
			this._oPopover.close();
		}
	});
});