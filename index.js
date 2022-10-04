// sap.ui.define([

// ], function () {
// 	"use strict";

// 	console.log(sap.ui);
// 	alert("UI5 is ready");
// });
// sap.ui.define([
// 	"sap/m/Text",

// ], function (Text) {
// 	"use strict";

// 	new Text({
// 		text: "Hello World 1111111"
// 	}).placeAt("content");
// });
// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
// 	"use strict";

// 	XMLView.create({
// 		viewName: "sap.ui.demo.walkthrough.view.App"
// 	}).then(function (oView) {
// 		oView.placeAt("content");
// 	});

// });

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");
});