---
description: "}."
image: "File/%7B%7B%7Bimage%7D%7D%7D"
---
<div class="banner-image nomobile">
<div class="banner-box banner-box-">
<div class="name"></div>
<div class="type"></div>
</div>![[]]</div><noinclude>

{{Uses TemplateStyles|Template:Banner/styles.css}}
<templatedata>
{
	"params": {
		"direction": {},
		"title": {
			"type": "string",
			"required": true
		},
		"section": {},
		"image": {
			"description": "Image name, without the File: prefix",
			"example": "Example.png",
			"required": true,
			"type": "wiki-file-name"
		},
		"section-id": {}
	},
	"description": "Template for full-width images with inset text.",
	"paramOrder": [
		"image",
		"title",
		"section",
		"direction",
		"section-id"
	]
}
</templatedata>
</noinclude>