sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("sap.ui.walkthrough.Component", {
		metadata: {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
				"viewName": "sap.ui.demo.walkthrough.view.App",
				"type": "XML",
				// "async": true,
				"id": "app"
			}
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			var oData = {
				recipient: {
					name: "world"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		}
	});
});