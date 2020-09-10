sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ui5/study/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ui5.study.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			console.log("Component!");
			$("#loaderTx").hide();
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// useful link json file binding
			this.setModel(models.createLinkModel(), "link");

		}
	});
});