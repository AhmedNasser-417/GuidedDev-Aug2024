define("UsrAssets1Page", [], function() {
	return {
		entitySchemaName: "UsrAssets",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrAssetsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrAssets"
				}
			},
			"AccountContactsDetailV205aac05e": {
				"schemaName": "AccountContactsDetailV2",
				"entitySchemaName": "Contact",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNamebf18a32a-1493-4599-9769-7ce656f0be29",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedBy19f9766a-f5e5-48cb-aae9-b84094aa5755",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "insert",
				"name": "ESNTabGroup38082201",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ESNTabGroup38082201GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "ESNTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ESNTabGridLayout553f8b35",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "ESNTabGroup38082201",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGf78bcae8-476d-422f-8914-bd2e3e8eddd0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ESNTabGridLayout553f8b35"
					},
					"bindTo": "UsrDeviceCode",
					"enabled": true
				},
				"parentName": "ESNTabGridLayout553f8b35",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME41938e47-d22d-4dcb-9ad8-f7bb9580cf2a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ESNTabGridLayout553f8b35"
					},
					"bindTo": "UsrDateStart",
					"enabled": true
				},
				"parentName": "ESNTabGridLayout553f8b35",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN4402cb34-89cd-4caf-8b9b-e6d738c4541a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ESNTabGridLayout553f8b35"
					},
					"bindTo": "UsrInWork",
					"enabled": true
				},
				"parentName": "ESNTabGridLayout553f8b35",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ESNTabGroupb20e81e0",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ESNTabGroupb20e81e0GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "ESNTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ESNTabGridLayout727a60d8",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "ESNTabGroupb20e81e0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGfc591534-3a07-444b-b506-8320e552f108",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ESNTabGridLayout727a60d8"
					},
					"bindTo": "UsrCodeCamera",
					"enabled": true
				},
				"parentName": "ESNTabGridLayout727a60d8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT2ab6a280-365d-424e-8cb0-e68d8c1b614a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ESNTabGridLayout727a60d8"
					},
					"bindTo": "UsrPrice",
					"enabled": true
				},
				"parentName": "ESNTabGridLayout727a60d8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountContactsDetailV205aac05e",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ESNTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab3b86abddTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab3b86abddTabLabelTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab3b86abddTabLabelGroup475e110a",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab3b86abddTabLabelGroup475e110aGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab3b86abddTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab3b86abddTabLabelGridLayoutd2b79437",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab3b86abddTabLabelGroup475e110a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNotescb6ddafe-ccc5-4097-8670-ecfb58976029",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 3,
						"column": 0,
						"row": 0,
						"layoutName": "Tab3b86abddTabLabelGridLayoutd2b79437"
					},
					"bindTo": "UsrNotes",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tab3b86abddTabLabelGridLayoutd2b79437",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
