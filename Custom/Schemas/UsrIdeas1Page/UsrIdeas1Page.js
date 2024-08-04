define("UsrIdeas1Page", [], function() {
	return {
		entitySchemaName: "UsrIdeas",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrIdeasFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrIdeas"
				}
			},
			"AccountContactsDetailV2191f0e12": {
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
				"name": "UsrNamee8f21389-510f-4e48-9fe8-712f5d2f7878",
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
				"name": "UsrProposalSubmittedca8e6212-1ccb-45a2-a15b-cea30d3ddf21",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrProposalSubmitted"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba6de2a97TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba6de2a97TabLabelTabCaption"
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
				"name": "Taba6de2a97TabLabelGroupe2794480",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba6de2a97TabLabelGroupe2794480GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba6de2a97TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba6de2a97TabLabelGroupe2794480",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING168e5b0a-cb34-4724-9ca1-c189525b7781",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 0,
						"layoutName": "Taba6de2a97TabLabelGridLayoutbe2d46bc"
					},
					"bindTo": "UsrIdeaDetails",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP2d67ecfa-8a4b-4f6d-ade5-8786d7f0d858",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Taba6de2a97TabLabelGridLayoutbe2d46bc"
					},
					"bindTo": "UsrIdeaCategory",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP445c4b73-3eaf-486f-85ea-b9ac440cd1bc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Taba6de2a97TabLabelGridLayoutbe2d46bc"
					},
					"bindTo": "UsrProposedBy",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER50db29eb-6619-48fc-94b6-1024b5608670",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Taba6de2a97TabLabelGridLayoutbe2d46bc"
					},
					"bindTo": "UsrVersionNumber",
					"enabled": true
				},
				"parentName": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT075f16db-144b-4f02-88df-aca1c670715b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Taba6de2a97TabLabelGridLayoutbe2d46bc"
					},
					"bindTo": "UsrProposedCost",
					"enabled": true
				},
				"parentName": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEANe4a1774f-faac-4455-8b49-c00e8376ed5a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Taba6de2a97TabLabelGridLayoutbe2d46bc"
					},
					"bindTo": "UsrSubmittedByCustomer",
					"enabled": true
				},
				"parentName": "Taba6de2a97TabLabelGridLayoutbe2d46bc",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AccountContactsDetailV2191f0e12",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Taba6de2a97TabLabel",
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
