define("Usrreqholiday1Page", [], function() {
	return {
		entitySchemaName: "Usrreqholiday",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrreqholidayFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Usrreqholiday"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName12ced864-6b5d-410c-8319-ed13cd8869cc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab41be7cb1TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab41be7cb1TabLabelTabCaption"
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
				"name": "Tab41be7cb1TabLabelGroupa7241759",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab41be7cb1TabLabelGroupa7241759GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab41be7cb1TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab41be7cb1TabLabelGridLayouta5c4aab7",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab41be7cb1TabLabelGroupa7241759",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP08ec5aaa-8831-422d-9e39-a6fffb7650c7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab41be7cb1TabLabelGridLayouta5c4aab7"
					},
					"bindTo": "UsrLookup1",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab41be7cb1TabLabelGridLayouta5c4aab7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME98e0d266-94bb-4b06-8724-54856289cd06",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab41be7cb1TabLabelGridLayouta5c4aab7"
					},
					"bindTo": "UsrDatetime1",
					"enabled": true
				},
				"parentName": "Tab41be7cb1TabLabelGridLayouta5c4aab7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIMEcb402213-6de5-440b-884a-a07b6292d3e3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab41be7cb1TabLabelGridLayouta5c4aab7"
					},
					"bindTo": "UsrDatetime2",
					"enabled": true
				},
				"parentName": "Tab41be7cb1TabLabelGridLayouta5c4aab7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGf36e427f-d42f-4725-9bc6-fa2236d608e8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 3,
						"layoutName": "Tab41be7cb1TabLabelGridLayouta5c4aab7"
					},
					"bindTo": "UsrString1",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tab41be7cb1TabLabelGridLayouta5c4aab7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEANff7efceb-e03f-4547-bd4e-56f9dc5d6ba4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab41be7cb1TabLabelGridLayouta5c4aab7"
					},
					"bindTo": "UsrBoolean1",
					"enabled": true
				},
				"parentName": "Tab41be7cb1TabLabelGridLayouta5c4aab7",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
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
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
