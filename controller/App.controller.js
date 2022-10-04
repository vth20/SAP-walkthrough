// sap.ui.define([
// "sap/ui/core/mvc/Controller"
// ], function (Controller) {
// 	"use strict";

// 	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

// 		onShowHello: function () {
// 			// show a native JavaScript alert
// 			/* eslint-disable no-alert */
// 			alert("Hello World");
// 			/* eslint-enable no-alert */
// 		}
// 	});
// });
// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function (Controller) {
// 	"use strict";
// 	return Controller.extend("sap.ui.walkthrough.controller.App", {
// 		onShowHello: () => {
// 			alert("Hello World!");
// 		}
// 	});
// });

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("sap.ui.walkthrough.controller.App", {
		onInit: function () {
			// set data model on view
			var oData = {
				recipient: {
					name: "World",
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		onShowHello: function () {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
			/* eslint-enable no-alert */
		},
	})
});