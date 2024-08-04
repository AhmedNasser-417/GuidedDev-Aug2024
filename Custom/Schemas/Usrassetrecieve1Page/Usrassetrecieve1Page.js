define("Usrassetrecieve1Page", [], function() {
	return {
		entitySchemaName: "Usrassetrecieve",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrassetrecieveFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Usrassetrecieve"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNameb4b9e92c-595f-4659-862c-29030bb4a64b",
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
				"name": "Tabed116e79TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabed116e79TabLabelTabCaption"
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
				"name": "Tabed116e79TabLabelGroup2700ad1e",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabed116e79TabLabelGroup2700ad1eGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabed116e79TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabed116e79TabLabelGridLayoutd77e14b9",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabed116e79TabLabelGroup2700ad1e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPdc0fe82e-f48e-4531-8bf4-fe7235080ce8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabed116e79TabLabelGridLayoutd77e14b9"
					},
					"bindTo": "UsrLookup1",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabed116e79TabLabelGridLayoutd77e14b9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPab888996-4d7d-48de-8e27-cdc6ad6dc448",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabed116e79TabLabelGridLayoutd77e14b9"
					},
					"bindTo": "UsrLookup2",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabed116e79TabLabelGridLayoutd77e14b9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPea62e4ba-c88f-47d3-aecb-ef695835aacb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabed116e79TabLabelGridLayoutd77e14b9"
					},
					"bindTo": "Usrassetcode",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabed116e79TabLabelGridLayoutd77e14b9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIME082d0da9-7424-4e4d-a118-c9dc1565c8dc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabed116e79TabLabelGridLayoutd77e14b9"
					},
					"bindTo": "UsrDatetime1",
					"enabled": true
				},
				"parentName": "Tabed116e79TabLabelGridLayoutd77e14b9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEAN78c93329-8f10-41b9-9fca-e34f0f4e4129",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tabed116e79TabLabelGridLayoutd77e14b9"
					},
					"bindTo": "UsrBoolean1",
					"enabled": true
				},
				"parentName": "Tabed116e79TabLabelGridLayoutd77e14b9",
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
