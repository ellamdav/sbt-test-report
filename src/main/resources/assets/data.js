function reportData() {
    const reportMetaData = {
        "projectName": "platform-example-ui-tests",
        "browser": "Chrome",
        "jenkinsBuildId": "#42",
        "jenkinsBuildUrl": "https://build.tax.service.gov.uk/job/Platform-Testing/job/Examples/job/platform-example-ui-tests/42/",
        "dateOfAssessment": "09-11-2023"
    };
    const axeAssessedPages = [{
        "testEngine": {"name": "axe-core", "version": "4.7.2"},
        "testRunner": {"name": "axe"},
        "testEnvironment": {
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            "windowWidth": 1360,
            "windowHeight": 880,
            "orientationAngle": 0,
            "orientationType": "landscape-primary"
        },
        "timestamp": "2023-09-07T08:02:52.494Z",
        "url": "http://localhost:9080/check-your-vat-flat-rate/turnover",
        "toolOptions": {
            "runOnly": {
                "type": "tag",
                "values": ["best-practice", "wcag2a", "wcag2aa", "wcag2aaa", "wcag21a", "wcag21aa", "wcag22aa"]
            }, "reporter": "v1"
        },
        "inapplicable": [{
            "id": "accesskeys",
            "impact": null,
            "tags": ["cat.keyboard", "best-practice"],
            "description": "Ensures every accesskey attribute value is unique",
            "help": "accesskey attribute value should be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/accesskeys?application=axeAPI",
            "nodes": []
        }, {
            "id": "area-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT6.a"],
            "description": "Ensures <area> elements of image maps have alternate text",
            "help": "Active <area> elements must have alternate text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/area-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-command-name",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412", "ACT", "TTv5", "TT6.a"],
            "description": "Ensures every ARIA button, link and menuitem has an accessible name",
            "help": "ARIA commands must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-command-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-dialog-name",
            "impact": null,
            "tags": ["cat.aria", "best-practice"],
            "description": "Ensures every ARIA dialog and alertdialog node has an accessible name",
            "help": "ARIA dialog and alertdialog nodes should have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-dialog-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-input-field-name",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412", "ACT", "TTv5", "TT5.c"],
            "description": "Ensures every ARIA input field has an accessible name",
            "help": "ARIA input fields must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-input-field-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-meter-name",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag111"],
            "description": "Ensures every ARIA meter node has an accessible name",
            "help": "ARIA meter nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-meter-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-progressbar-name",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag111"],
            "description": "Ensures every ARIA progressbar node has an accessible name",
            "help": "ARIA progressbar nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-progressbar-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-required-children",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag131"],
            "description": "Ensures elements with an ARIA role that require child roles contain them",
            "help": "Certain ARIA roles must contain particular children",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-required-children?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-required-parent",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag131"],
            "description": "Ensures elements with an ARIA role that require parent roles are contained by them",
            "help": "Certain ARIA roles must be contained by particular parents",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-required-parent?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-roledescription",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412", "deprecated"],
            "description": "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
            "help": "aria-roledescription must be on elements with a semantic role",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-roledescription?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-text",
            "impact": null,
            "tags": ["cat.aria", "best-practice"],
            "description": "Ensures \"role=text\" is used on elements with no focusable descendants",
            "help": "\"role=text\" should have no focusable descendants",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-text?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-toggle-field-name",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412", "ACT", "TTv5", "TT5.c"],
            "description": "Ensures every ARIA toggle field has an accessible name",
            "help": "ARIA toggle fields must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-toggle-field-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-tooltip-name",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures every ARIA tooltip node has an accessible name",
            "help": "ARIA tooltip nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-tooltip-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "aria-treeitem-name",
            "impact": null,
            "tags": ["cat.aria", "best-practice"],
            "description": "Ensures every ARIA treeitem node has an accessible name",
            "help": "ARIA treeitem nodes should have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-treeitem-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "audio-caption",
            "impact": null,
            "tags": ["cat.time-and-media", "wcag2a", "wcag121", "section508", "section508.22.a", "deprecated"],
            "description": "Ensures <audio> elements have captions",
            "help": "<audio> elements must have a captions track",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/audio-caption?application=axeAPI",
            "nodes": []
        }, {
            "id": "autocomplete-valid",
            "impact": null,
            "tags": ["cat.forms", "wcag21aa", "wcag135", "ACT"],
            "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
            "help": "autocomplete attribute must be used correctly",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/autocomplete-valid?application=axeAPI",
            "nodes": []
        }, {
            "id": "avoid-inline-spacing",
            "impact": null,
            "tags": ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
            "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
            "help": "Inline text spacing must be adjustable with custom stylesheets",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/avoid-inline-spacing?application=axeAPI",
            "nodes": []
        }, {
            "id": "blink",
            "impact": null,
            "tags": ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j", "TTv5", "TT2.b"],
            "description": "Ensures <blink> elements are not used",
            "help": "<blink> elements are deprecated and must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/blink?application=axeAPI",
            "nodes": []
        }, {
            "id": "definition-list",
            "impact": null,
            "tags": ["cat.structure", "wcag2a", "wcag131"],
            "description": "Ensures <dl> elements are structured correctly",
            "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/definition-list?application=axeAPI",
            "nodes": []
        }, {
            "id": "dlitem",
            "impact": null,
            "tags": ["cat.structure", "wcag2a", "wcag131"],
            "description": "Ensures <dt> and <dd> elements are contained by a <dl>",
            "help": "<dt> and <dd> elements must be contained by a <dl>",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/dlitem?application=axeAPI",
            "nodes": []
        }, {
            "id": "empty-table-header",
            "impact": null,
            "tags": ["cat.name-role-value", "best-practice"],
            "description": "Ensures table headers have discernible text",
            "help": "Table header text should not be empty",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/empty-table-header?application=axeAPI",
            "nodes": []
        }, {
            "id": "frame-focusable-content",
            "impact": null,
            "tags": ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a"],
            "description": "Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",
            "help": "Frames with focusable content must not have tabindex=-1",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/frame-focusable-content?application=axeAPI",
            "nodes": []
        }, {
            "id": "frame-tested",
            "impact": null,
            "tags": ["cat.structure", "review-item", "best-practice"],
            "description": "Ensures <iframe> and <frame> elements contain the axe-core script",
            "help": "Frames should be tested with axe-core",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/frame-tested?application=axeAPI",
            "nodes": []
        }, {
            "id": "frame-title-unique",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag412", "wcag2a", "TTv5", "TT12.d"],
            "description": "Ensures <iframe> and <frame> elements contain a unique title attribute",
            "help": "Frames must have a unique title attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/frame-title-unique?application=axeAPI",
            "nodes": []
        }, {
            "id": "frame-title",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag412", "section508", "section508.22.i", "TTv5", "TT12.d"],
            "description": "Ensures <iframe> and <frame> elements have an accessible name",
            "help": "Frames must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/frame-title?application=axeAPI",
            "nodes": []
        }, {
            "id": "html-xml-lang-mismatch",
            "impact": null,
            "tags": ["cat.language", "wcag2a", "wcag311", "ACT"],
            "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
            "help": "HTML elements with lang and xml:lang must have the same base language",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/html-xml-lang-mismatch?application=axeAPI",
            "nodes": []
        }, {
            "id": "image-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a", "TT7.b"],
            "description": "Ensures <img> elements have alternate text or a role of none or presentation",
            "help": "Images must have alternate text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/image-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "image-redundant-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "best-practice"],
            "description": "Ensure image alternative is not repeated as text",
            "help": "Alternative text of images should not be repeated as text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/image-redundant-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "input-button-name",
            "impact": null,
            "tags": ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT5.c"],
            "description": "Ensures input buttons have discernible text",
            "help": "Input buttons must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/input-button-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "input-image-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag111", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a"],
            "description": "Ensures <input type=\"image\"> elements have alternate text",
            "help": "Image buttons must have alternate text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/input-image-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "landmark-complementary-is-top-level",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the complementary landmark or aside is at top level",
            "help": "Aside should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-complementary-is-top-level?application=axeAPI",
            "nodes": []
        }, {
            "id": "marquee",
            "impact": null,
            "tags": ["cat.parsing", "wcag2a", "wcag222", "TTv5", "TT2.b"],
            "description": "Ensures <marquee> elements are not used",
            "help": "<marquee> elements are deprecated and must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/marquee?application=axeAPI",
            "nodes": []
        }, {
            "id": "meta-refresh-no-exceptions",
            "impact": null,
            "tags": ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
            "description": "Ensures <meta http-equiv=\"refresh\"> is not used for delayed refresh",
            "help": "Delayed refresh must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/meta-refresh-no-exceptions?application=axeAPI",
            "nodes": []
        }, {
            "id": "meta-refresh",
            "impact": null,
            "tags": ["cat.time-and-media", "wcag2a", "wcag221", "TTv5", "TT8.a"],
            "description": "Ensures <meta http-equiv=\"refresh\"> is not used for delayed refresh",
            "help": "Delayed refresh under 20 hours must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/meta-refresh?application=axeAPI",
            "nodes": []
        }, {
            "id": "object-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a"],
            "description": "Ensures <object> elements have alternate text",
            "help": "<object> elements must have alternate text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/object-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "presentation-role-conflict",
            "impact": null,
            "tags": ["cat.aria", "best-practice", "ACT"],
            "description": "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
            "help": "Ensure elements marked as presentational are consistently ignored",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/presentation-role-conflict?application=axeAPI",
            "nodes": []
        }, {
            "id": "role-img-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a"],
            "description": "Ensures [role='img'] elements have alternate text",
            "help": "[role='img'] elements must have an alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/role-img-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "scope-attr-valid",
            "impact": null,
            "tags": ["cat.tables", "best-practice"],
            "description": "Ensures the scope attribute is used correctly on tables",
            "help": "scope attribute should be used correctly",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/scope-attr-valid?application=axeAPI",
            "nodes": []
        }, {
            "id": "scrollable-region-focusable",
            "impact": null,
            "tags": ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a"],
            "description": "Ensure elements that have scrollable content are accessible by keyboard",
            "help": "Scrollable region must have keyboard access",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/scrollable-region-focusable?application=axeAPI",
            "nodes": []
        }, {
            "id": "select-name",
            "impact": null,
            "tags": ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "ACT", "TTv5", "TT5.c"],
            "description": "Ensures select element has an accessible name",
            "help": "Select element must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/select-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "server-side-image-map",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag211", "section508", "section508.22.f", "TTv5", "TT4.a"],
            "description": "Ensures that server-side image maps are not used",
            "help": "Server-side image maps must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/server-side-image-map?application=axeAPI",
            "nodes": []
        }, {
            "id": "skip-link",
            "impact": null,
            "tags": ["cat.keyboard", "best-practice"],
            "description": "Ensure all skip links have a focusable target",
            "help": "The skip-link target should exist and be focusable",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/skip-link?application=axeAPI",
            "nodes": []
        }, {
            "id": "svg-img-alt",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a"],
            "description": "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
            "help": "<svg> elements with an img role must have an alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/svg-img-alt?application=axeAPI",
            "nodes": []
        }, {
            "id": "tabindex",
            "impact": null,
            "tags": ["cat.keyboard", "best-practice"],
            "description": "Ensures tabindex attribute values are not greater than 0",
            "help": "Elements should not have tabindex greater than zero",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/tabindex?application=axeAPI",
            "nodes": []
        }, {
            "id": "table-duplicate-name",
            "impact": null,
            "tags": ["cat.tables", "best-practice"],
            "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
            "help": "tables should not have the same summary and caption",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/table-duplicate-name?application=axeAPI",
            "nodes": []
        }, {
            "id": "td-headers-attr",
            "impact": null,
            "tags": ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b"],
            "description": "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
            "help": "Table cells that use the headers attribute must only refer to cells in the same table",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/td-headers-attr?application=axeAPI",
            "nodes": []
        }, {
            "id": "th-has-data-cells",
            "impact": null,
            "tags": ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "14.b"],
            "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
            "help": "Table headers in a data table must refer to data cells",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/th-has-data-cells?application=axeAPI",
            "nodes": []
        }, {
            "id": "video-caption",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a", "TTv5", "TT17.a"],
            "description": "Ensures <video> elements have captions",
            "help": "<video> elements must have captions",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/video-caption?application=axeAPI",
            "nodes": []
        }, {
            "id": "no-autoplay-audio",
            "impact": null,
            "tags": ["cat.time-and-media", "wcag2a", "wcag142", "ACT", "TTv5", "TT2.a"],
            "description": "Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
            "help": "<video> or <audio> elements must not play automatically",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/no-autoplay-audio?application=axeAPI",
            "nodes": []
        }],
        "passes": [{
            "id": "aria-allowed-attr",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures ARIA attributes are allowed for an element's role",
            "help": "Elements must only use allowed ARIA attributes",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-allowed-attr?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [{
                    "id": "aria-allowed-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attributes are used correctly for the defined role"
                }, {
                    "id": "aria-conditional-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "ARIA attribute is allowed"
                }],
                "none": [{
                    "id": "aria-unsupported-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attribute is supported"
                }, {
                    "id": "aria-prohibited-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "ARIA attribute is allowed"
                }],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [],
                "all": [{
                    "id": "aria-allowed-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attributes are used correctly for the defined role"
                }, {
                    "id": "aria-conditional-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "ARIA attribute is allowed"
                }],
                "none": [{
                    "id": "aria-unsupported-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attribute is supported"
                }, {
                    "id": "aria-prohibited-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "ARIA attribute is allowed"
                }],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "aria-allowed-role",
            "impact": null,
            "tags": ["cat.aria", "best-practice"],
            "description": "Ensures role attribute has an appropriate value for the element",
            "help": "ARIA role should be appropriate for the element",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-allowed-role?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "aria-allowed-role",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is allowed for given element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [{
                    "id": "aria-allowed-role",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is allowed for given element"
                }], "all": [], "none": [], "impact": null, "html": "<header role=\"banner\">", "target": ["header"]
            }, {
                "any": [{
                    "id": "aria-allowed-role",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is allowed for given element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }, {
                "any": [{
                    "id": "aria-allowed-role",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is allowed for given element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }]
        }, {
            "id": "aria-hidden-body",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures aria-hidden='true' is not present on the document body.",
            "help": "aria-hidden='true' must not be present on the document body",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-hidden-body?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "aria-hidden-body",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "No aria-hidden attribute is present on document body"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<body class=\"govuk-template__body  js-enabled\">",
                "target": ["body"]
            }]
        }, {
            "id": "aria-hidden-focus",
            "impact": null,
            "tags": ["cat.name-role-value", "wcag2a", "wcag412", "TTv5", "TT6.a"],
            "description": "Ensures aria-hidden elements are not focusable nor contain focusable elements",
            "help": "ARIA hidden element must not be focusable or contain focusable elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-hidden-focus?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [{
                    "id": "focusable-modal-open",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements while a modal is open"
                }, {
                    "id": "focusable-disabled",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements contained within element"
                }, {
                    "id": "focusable-not-tabbable",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements contained within element"
                }],
                "none": [],
                "impact": null,
                "html": "<svg aria-hidden=\"true\" focusable=\"false\" class=\"govuk-header__logotype-crown\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 132 97\" height=\"30\" width=\"36\">",
                "target": [".govuk-header__logotype-crown"]
            }, {
                "any": [],
                "all": [{
                    "id": "focusable-modal-open",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements while a modal is open"
                }, {
                    "id": "focusable-disabled",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements contained within element"
                }, {
                    "id": "focusable-not-tabbable",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements contained within element"
                }],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-input__prefix\" aria-hidden=\"true\">�</div>",
                "target": [".govuk-input__prefix"]
            }, {
                "any": [],
                "all": [{
                    "id": "focusable-modal-open",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements while a modal is open"
                }, {
                    "id": "focusable-disabled",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements contained within element"
                }, {
                    "id": "focusable-not-tabbable",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "No focusable elements contained within element"
                }],
                "none": [],
                "impact": null,
                "html": "<svg aria-hidden=\"true\" focusable=\"false\" class=\"govuk-footer__licence-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 483.2 195.7\" height=\"17\" width=\"41\">",
                "target": [".govuk-footer__licence-logo"]
            }]
        }, {
            "id": "aria-required-attr",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures elements with ARIA roles have all required ARIA attributes",
            "help": "Required ARIA attributes must be provided",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-required-attr?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "aria-required-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "All required ARIA attributes are present"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [{
                    "id": "aria-required-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "All required ARIA attributes are present"
                }], "all": [], "none": [], "impact": null, "html": "<header role=\"banner\">", "target": ["header"]
            }, {
                "any": [{
                    "id": "aria-required-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "All required ARIA attributes are present"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }, {
                "any": [{
                    "id": "aria-required-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "All required ARIA attributes are present"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }]
        }, {
            "id": "aria-roles",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures all elements with a role attribute use a valid value",
            "help": "ARIA roles used must conform to valid values",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-roles?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [],
                "none": [{
                    "id": "invalidrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is valid"
                }, {
                    "id": "abstractrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Abstract roles are not used"
                }, {
                    "id": "unsupportedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is supported"
                }, {
                    "id": "deprecatedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is not deprecated"
                }],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [],
                "all": [],
                "none": [{
                    "id": "invalidrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is valid"
                }, {
                    "id": "abstractrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Abstract roles are not used"
                }, {
                    "id": "unsupportedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is supported"
                }, {
                    "id": "deprecatedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is not deprecated"
                }],
                "impact": null,
                "html": "<header role=\"banner\">",
                "target": ["header"]
            }, {
                "any": [],
                "all": [],
                "none": [{
                    "id": "invalidrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is valid"
                }, {
                    "id": "abstractrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Abstract roles are not used"
                }, {
                    "id": "unsupportedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is supported"
                }, {
                    "id": "deprecatedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is not deprecated"
                }],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }, {
                "any": [],
                "all": [],
                "none": [{
                    "id": "invalidrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is valid"
                }, {
                    "id": "abstractrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Abstract roles are not used"
                }, {
                    "id": "unsupportedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA role is supported"
                }, {
                    "id": "deprecatedrole",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "ARIA role is not deprecated"
                }],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }]
        }, {
            "id": "aria-valid-attr-value",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures all ARIA attributes have valid values",
            "help": "ARIA attributes must conform to valid values",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-valid-attr-value?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [{
                    "id": "aria-valid-attr-value",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attribute values are valid"
                }, {
                    "id": "aria-errormessage",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                }, {
                    "id": "aria-level",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "aria-level values are valid"
                }],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [],
                "all": [{
                    "id": "aria-valid-attr-value",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attribute values are valid"
                }, {
                    "id": "aria-errormessage",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                }, {
                    "id": "aria-level",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "aria-level values are valid"
                }],
                "none": [],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "aria-valid-attr",
            "impact": null,
            "tags": ["cat.aria", "wcag2a", "wcag412"],
            "description": "Ensures attributes that begin with aria- are valid ARIA attributes",
            "help": "ARIA attributes must conform to valid names",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/aria-valid-attr?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "aria-valid-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attribute name is valid"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [{
                    "id": "aria-valid-attr",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "ARIA attribute name is valid"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "button-name",
            "impact": null,
            "tags": ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT6.a"],
            "description": "Ensures buttons have discernible text",
            "help": "Buttons must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/button-name?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "button-has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "Element has inner text that is visible to screen readers"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button value=\"accept\" type=\"button\" name=\"cookies\" class=\"cbanner-govuk-button\" data-module=\"cbanner-govuk-button\">\n        Accept additional cookies\n      </button>",
                "target": ["button[value=\"accept\"]"]
            }, {
                "any": [{
                    "id": "button-has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "Element has inner text that is visible to screen readers"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button value=\"reject\" type=\"button\" name=\"cookies\" class=\"cbanner-govuk-button\" data-module=\"cbanner-govuk-button\">\n        Reject additional cookies\n      </button>",
                "target": ["button[value=\"reject\"]"]
            }, {
                "any": [{
                    "id": "button-has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "Element has inner text that is visible to screen readers"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button id=\"continue-button\" class=\"govuk-button\" data-module=\"govuk-button\" type=\"submit\">Continue</button>",
                "target": ["#continue-button"]
            }]
        }, {
            "id": "document-title",
            "impact": null,
            "tags": ["cat.text-alternatives", "wcag2a", "wcag242", "ACT", "TTv5", "TT12.a"],
            "description": "Ensures each HTML document contains a non-empty <title> element",
            "help": "Documents must have <title> element to aid in navigation",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/document-title?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "doc-has-title",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Document has a non-empty <title> element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<html lang=\"en\" class=\"govuk-template \">",
                "target": ["html"]
            }]
        }, {
            "id": "duplicate-id-active",
            "impact": null,
            "tags": ["cat.parsing", "wcag2a", "wcag411"],
            "description": "Ensures every id attribute value of active elements is unique",
            "help": "IDs of active elements must be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/duplicate-id-active?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "duplicate-id-active",
                    "data": "continue-button",
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Document has no active elements that share the same id attribute"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button id=\"continue-button\" class=\"govuk-button\" data-module=\"govuk-button\" type=\"submit\">Continue</button>",
                "target": ["#continue-button"]
            }]
        }, {
            "id": "duplicate-id-aria",
            "impact": null,
            "tags": ["cat.parsing", "wcag2a", "wcag411"],
            "description": "Ensures every id attribute value used in ARIA and in labels is unique",
            "help": "IDs used in ARIA and labels must be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/duplicate-id-aria?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "duplicate-id-aria",
                    "data": "turnover-hint",
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "Document has no elements referenced with ARIA or labels that share the same id attribute"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div id=\"turnover-hint\" class=\"govuk-hint\">\n  This is the total sales of all goods and services. If you're estimating, give realistic figures.\n</div>",
                "target": ["#turnover-hint"]
            }, {
                "any": [{
                    "id": "duplicate-id-aria",
                    "data": "turnover",
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "Document has no elements referenced with ARIA or labels that share the same id attribute"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "duplicate-id",
            "impact": null,
            "tags": ["cat.parsing", "wcag2a", "wcag411"],
            "description": "Ensures every id attribute value is unique",
            "help": "id attribute value must be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/duplicate-id?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "duplicate-id",
                    "data": "tracking-consent-script-tag",
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Document has no static elements that share the same id attribute"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<script nonce=\"\" src=\"http://localhost:12345/tracking-consent/tracking.js\" id=\"tracking-consent-script-tag\" data-gtm-container=\"c\" data-language=\"en\"></script>",
                "target": ["#tracking-consent-script-tag"]
            }, {
                "any": [{
                    "id": "duplicate-id",
                    "data": "main-content",
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Document has no static elements that share the same id attribute"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }]
        }, {
            "id": "empty-heading",
            "impact": null,
            "tags": ["cat.name-role-value", "best-practice"],
            "description": "Ensures headings have discernible text",
            "help": "Headings should not be empty",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/empty-heading?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h2 class=\"cbanner-govuk-cookie-banner__heading cbanner-govuk-heading-m\">Cookies on HMRC services</h2>",
                "target": [".cbanner-govuk-cookie-banner__heading"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h1 class=\"govuk-label-wrapper\"><label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label> </h1>",
                "target": ["h1"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h2 class=\"govuk-visually-hidden\">Support links</h2>",
                "target": [".govuk-visually-hidden"]
            }]
        }, {
            "id": "form-field-multiple-labels",
            "impact": null,
            "tags": ["cat.forms", "wcag2a", "wcag332", "TTv5", "TT5.c"],
            "description": "Ensures form field does not have multiple label elements",
            "help": "Form field must not have multiple label elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/form-field-multiple-labels?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [],
                "none": [{
                    "id": "multiple-label",
                    "data": null,
                    "relatedNodes": [{
                        "html": "<label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label>",
                        "target": ["label"]
                    }],
                    "impact": "moderate",
                    "message": "Form field does not have multiple label elements"
                }],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "heading-order",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the order of headings is semantically correct",
            "help": "Heading levels should only increase by one",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/heading-order?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "heading-order",
                    "data": {
                        "headingOrder": [{
                            "ancestry": ["html > body > div:nth-child(2) > div > div:nth-child(1) > div > h2:nth-child(1)"],
                            "level": 2
                        }, {
                            "ancestry": ["html > body > div:nth-child(5) > main > div > div > form:nth-child(1) > div:nth-child(2) > h1:nth-child(1)"],
                            "level": 1
                        }, {
                            "ancestry": ["html > body > footer:nth-child(6) > div > div > div:nth-child(1) > h2:nth-child(1)"],
                            "level": 2
                        }]
                    },
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Heading order valid"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h2 class=\"cbanner-govuk-cookie-banner__heading cbanner-govuk-heading-m\">Cookies on HMRC services</h2>",
                "target": [".cbanner-govuk-cookie-banner__heading"]
            }, {
                "any": [{
                    "id": "heading-order",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Heading order valid"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h1 class=\"govuk-label-wrapper\"><label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label> </h1>",
                "target": ["h1"]
            }, {
                "any": [{
                    "id": "heading-order",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Heading order valid"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h2 class=\"govuk-visually-hidden\">Support links</h2>",
                "target": [".govuk-visually-hidden"]
            }]
        }, {
            "id": "html-has-lang",
            "impact": null,
            "tags": ["cat.language", "wcag2a", "wcag311", "ACT", "TTv5", "TT11.a"],
            "description": "Ensures every HTML document has a lang attribute",
            "help": "<html> element must have a lang attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/html-has-lang?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "has-lang",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "The <html> element has a lang attribute"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<html lang=\"en\" class=\"govuk-template \">",
                "target": ["html"]
            }]
        }, {
            "id": "html-lang-valid",
            "impact": null,
            "tags": ["cat.language", "wcag2a", "wcag311", "ACT", "TTv5", "TT11.a"],
            "description": "Ensures the lang attribute of the <html> element has a valid value",
            "help": "<html> element must have a valid value for the lang attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/html-lang-valid?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [],
                "none": [{
                    "id": "valid-lang",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Value of lang attribute is included in the list of valid languages"
                }],
                "impact": null,
                "html": "<html lang=\"en\" class=\"govuk-template \">",
                "target": ["html"]
            }]
        }, {
            "id": "identical-links-same-purpose",
            "impact": null,
            "tags": ["cat.semantics", "wcag2aaa", "wcag249"],
            "description": "Ensure that links with the same accessible name serve a similar purpose",
            "help": "Links with the same name must have a similar purpose",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/identical-links-same-purpose?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "view cookies",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "12345",
                            "pathname": "/tracking-consent/cookie-settings/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"cbanner-govuk-link\" href=\"http://localhost:12345/tracking-consent/cookie-settings\">View cookies</a>",
                "target": [".cbanner-govuk-link"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "skip to main content",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "9080",
                            "pathname": "/check-your-vat-flat-rate/turnover/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a href=\"#main-content\" class=\"govuk-skip-link\" data-module=\"govuk-skip-link\">Skip to main content</a>",
                "target": [".govuk-skip-link"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "govuk",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "www.gov.uk",
                            "port": "",
                            "pathname": "/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a href=\"https://www.gov.uk\" class=\"govuk-header__link govuk-header__link--homepage\">",
                "target": [".govuk-header__link"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "check your vat flat rate",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "9080",
                            "pathname": "/check-your-vat-flat-rate/vat-return-period/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a href=\"/check-your-vat-flat-rate/vat-return-period\" class=\"hmrc-header__service-name hmrc-header__service-name--linked\">\n            Check your VAT flat rate\n          </a>",
                "target": [".hmrc-header__service-name"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "is this page not working properly opens in new tab",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "9250",
                            "pathname": "/contact/report-technical-problem/",
                            "search": {"newTab": "true", "service": "VFR"},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a lang=\"en\" hreflang=\"en\" class=\"govuk-link hmrc-report-technical-issue \" target=\"_blank\" href=\"http://localhost:9250/contact/report-technical-problem?newTab=true&amp;service=VFR\">Is this page not working properly? (opens in new tab)</a>",
                "target": [".govuk-link"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "cookies",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "9080",
                            "pathname": "/help/cookies/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/cookies\">\n        Cookies\n        </a>",
                "target": ["a[href$=\"cookies\"]"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "accessibility statement",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "12346",
                            "pathname": "/accessibility-statement/vat-flat-rate-calculator/",
                            "search": {"referrerUrl": "/check-your-vat-flat-rate/turnover"},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"http://localhost:12346/accessibility-statement/vat-flat-rate-calculator?referrerUrl=%2Fcheck-your-vat-flat-rate%2Fturnover\">\n        Accessibility statement\n        </a>",
                "target": ["li:nth-child(2) > .govuk-footer__link"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "privacy policy",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "9080",
                            "pathname": "/help/privacy/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/privacy\">\n        Privacy policy\n        </a>",
                "target": ["a[href$=\"privacy\"]"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "terms and conditions",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "localhost",
                            "port": "9080",
                            "pathname": "/help/terms-and-conditions/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/terms-and-conditions\">\n        Terms and conditions\n        </a>",
                "target": ["a[href$=\"terms-and-conditions\"]"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "help using govuk",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "www.gov.uk",
                            "port": "",
                            "pathname": "/help/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/help\">\n        Help using GOV.UK\n        </a>",
                "target": ["a[href$=\"help\"]"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "contact",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "www.gov.uk",
                            "port": "",
                            "pathname": "/government/organisations/hm-revenue-customs/contact/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/government/organisations/hm-revenue-customs/contact\">\n        Contact\n        </a>",
                "target": ["li:nth-child(6) > .govuk-footer__link"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "rhestr o wasanaethau cymraeg",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "www.gov.uk",
                            "port": "",
                            "pathname": "/cymraeg/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/cymraeg\" lang=\"cy\" hreflang=\"cy\">\n        Rhestr o Wasanaethau Cymraeg\n        </a>",
                "target": ["a[href$=\"cymraeg\"]"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "open government licence v30",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "www.nationalarchives.gov.uk",
                            "port": "",
                            "pathname": "/doc/open-government-licence/version/3/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\"> Open Government Licence v3.0</a>",
                "target": ["a[rel=\"license\"]"]
            }, {
                "any": [],
                "all": [{
                    "id": "identical-links-same-purpose",
                    "data": {
                        "name": "crown copyright",
                        "urlProps": {
                            "protocol": "http:",
                            "hostname": "www.nationalarchives.gov.uk",
                            "port": "",
                            "pathname": "/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/",
                            "search": {},
                            "hash": "",
                            "filename": ""
                        }
                    },
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "There are no other links with the same name, that go to a different URL"
                }],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link govuk-footer__copyright-logo\" href=\"https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/\">� Crown copyright</a>",
                "target": [".govuk-footer__copyright-logo"]
            }]
        }, {
            "id": "label-title-only",
            "impact": null,
            "tags": ["cat.forms", "best-practice"],
            "description": "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
            "help": "Form elements should have a visible label",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/label-title-only?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [],
                "none": [{
                    "id": "title-only",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Form element does not solely use title attribute for its label"
                }],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "label",
            "impact": null,
            "tags": ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "ACT", "TTv5", "TT5.c"],
            "description": "Ensures every form element has a label",
            "help": "Form elements must have labels",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/label?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "explicit-label",
                    "data": {"explicitLabel": "What was your turnover for the quarter including VAT in pounds?"},
                    "relatedNodes": [{
                        "html": "<label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label>",
                        "target": ["label"]
                    }],
                    "impact": "critical",
                    "message": "Form element has an explicit <label>"
                }],
                "all": [],
                "none": [{
                    "id": "hidden-explicit-label",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "Form element has a visible explicit <label>"
                }],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }]
        }, {
            "id": "landmark-banner-is-top-level",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the banner landmark is at top level",
            "help": "Banner landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-banner-is-top-level?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "landmark-is-top-level",
                    "data": {"role": "banner"},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "The banner landmark is at the top level."
                }], "all": [], "none": [], "impact": null, "html": "<header role=\"banner\">", "target": ["header"]
            }]
        }, {
            "id": "landmark-contentinfo-is-top-level",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the contentinfo landmark is at top level",
            "help": "Contentinfo landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-contentinfo-is-top-level?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "landmark-is-top-level",
                    "data": {"role": "contentinfo"},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "The contentinfo landmark is at the top level."
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }]
        }, {
            "id": "landmark-main-is-top-level",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the main landmark is at top level",
            "help": "Main landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-main-is-top-level?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "landmark-is-top-level",
                    "data": {"role": "main"},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "The main landmark is at the top level."
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }]
        }, {
            "id": "landmark-no-duplicate-banner",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the document has at most one banner landmark",
            "help": "Document should not have more than one banner landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-no-duplicate-banner?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "page-no-duplicate-banner",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Document does not have more than one banner landmark"
                }], "all": [], "none": [], "impact": null, "html": "<header role=\"banner\">", "target": ["header"]
            }]
        }, {
            "id": "landmark-no-duplicate-contentinfo",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the document has at most one contentinfo landmark",
            "help": "Document should not have more than one contentinfo landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-no-duplicate-contentinfo?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "page-no-duplicate-contentinfo",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Document does not have more than one contentinfo landmark"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }]
        }, {
            "id": "landmark-no-duplicate-main",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the document has at most one main landmark",
            "help": "Document should not have more than one main landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-no-duplicate-main?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "page-no-duplicate-main",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Document does not have more than one main landmark"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }]
        }, {
            "id": "landmark-one-main",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensures the document has a main landmark",
            "help": "Document should have one main landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-one-main?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [{
                    "id": "page-has-main",
                    "data": null,
                    "relatedNodes": [{
                        "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                        "target": ["#main-content"]
                    }],
                    "impact": "moderate",
                    "message": "Document has at least one main landmark"
                }],
                "none": [],
                "impact": null,
                "html": "<html lang=\"en\" class=\"govuk-template \">",
                "target": ["html"]
            }]
        }, {
            "id": "landmark-unique",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "help": "Ensures landmarks are unique",
            "description": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/landmark-unique?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "landmark-is-unique",
                    "data": {"role": "region", "accessibleText": "cookies on hmrc services"},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [{
                    "id": "landmark-is-unique",
                    "data": {"role": "banner", "accessibleText": null},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination"
                }], "all": [], "none": [], "impact": null, "html": "<header role=\"banner\">", "target": ["header"]
            }, {
                "any": [{
                    "id": "landmark-is-unique",
                    "data": {"role": "main", "accessibleText": null},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }, {
                "any": [{
                    "id": "landmark-is-unique",
                    "data": {"role": "contentinfo", "accessibleText": null},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }]
        }, {
            "id": "link-name",
            "impact": null,
            "tags": ["cat.name-role-value", "wcag2a", "wcag412", "wcag244", "section508", "section508.22.a", "ACT", "TTv5", "TT6.a"],
            "description": "Ensures links have discernible text",
            "help": "Links must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/link-name?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"cbanner-govuk-link\" href=\"http://localhost:12345/tracking-consent/cookie-settings\">View cookies</a>",
                "target": [".cbanner-govuk-link"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a href=\"#main-content\" class=\"govuk-skip-link\" data-module=\"govuk-skip-link\">Skip to main content</a>",
                "target": [".govuk-skip-link"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a href=\"https://www.gov.uk\" class=\"govuk-header__link govuk-header__link--homepage\">",
                "target": [".govuk-header__link"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a href=\"/check-your-vat-flat-rate/vat-return-period\" class=\"hmrc-header__service-name hmrc-header__service-name--linked\">\n            Check your VAT flat rate\n          </a>",
                "target": [".hmrc-header__service-name"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a lang=\"en\" hreflang=\"en\" class=\"govuk-link hmrc-report-technical-issue \" target=\"_blank\" href=\"http://localhost:9250/contact/report-technical-problem?newTab=true&amp;service=VFR\">Is this page not working properly? (opens in new tab)</a>",
                "target": [".govuk-link"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/cookies\">\n        Cookies\n        </a>",
                "target": ["a[href$=\"cookies\"]"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"http://localhost:12346/accessibility-statement/vat-flat-rate-calculator?referrerUrl=%2Fcheck-your-vat-flat-rate%2Fturnover\">\n        Accessibility statement\n        </a>",
                "target": ["li:nth-child(2) > .govuk-footer__link"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/privacy\">\n        Privacy policy\n        </a>",
                "target": ["a[href$=\"privacy\"]"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/terms-and-conditions\">\n        Terms and conditions\n        </a>",
                "target": ["a[href$=\"terms-and-conditions\"]"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/help\">\n        Help using GOV.UK\n        </a>",
                "target": ["a[href$=\"help\"]"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/government/organisations/hm-revenue-customs/contact\">\n        Contact\n        </a>",
                "target": ["li:nth-child(6) > .govuk-footer__link"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/cymraeg\" lang=\"cy\" hreflang=\"cy\">\n        Rhestr o Wasanaethau Cymraeg\n        </a>",
                "target": ["a[href$=\"cymraeg\"]"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\"> Open Government Licence v3.0</a>",
                "target": ["a[rel=\"license\"]"]
            }, {
                "any": [{
                    "id": "has-visible-text",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "Element has text that is visible to screen readers"
                }],
                "all": [],
                "none": [{
                    "id": "focusable-no-name",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element is not in tab order or has accessible text"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link govuk-footer__copyright-logo\" href=\"https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/\">� Crown copyright</a>",
                "target": [".govuk-footer__copyright-logo"]
            }]
        }, {
            "id": "list",
            "impact": null,
            "tags": ["cat.structure", "wcag2a", "wcag131"],
            "description": "Ensures that lists are structured correctly",
            "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/list?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [],
                "none": [{
                    "id": "only-listitems",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List element only has direct children that are allowed inside <li> elements"
                }],
                "impact": null,
                "html": "<ul class=\"govuk-footer__inline-list govuk-!-display-none-print\">",
                "target": ["ul"]
            }]
        }, {
            "id": "listitem",
            "impact": null,
            "tags": ["cat.structure", "wcag2a", "wcag131"],
            "description": "Ensures <li> elements are used semantically",
            "help": "<li> elements must be contained in a <ul> or <ol>",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/listitem?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"/help/cookies\">\n        Cookies\n        </a>\n       </li>",
                "target": ["li:nth-child(1)"]
            }, {
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"http://localhost:12346/accessibility-statement/vat-flat-rate-calculator?referrerUrl=%2Fcheck-your-vat-flat-rate%2Fturnover\">\n        Accessibility statement\n        </a>\n       </li>",
                "target": ["li:nth-child(2)"]
            }, {
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"/help/privacy\">\n        Privacy policy\n        </a>\n       </li>",
                "target": ["li:nth-child(3)"]
            }, {
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"/help/terms-and-conditions\">\n        Terms and conditions\n        </a>\n       </li>",
                "target": ["li:nth-child(4)"]
            }, {
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"https://www.gov.uk/help\">\n        Help using GOV.UK\n        </a>\n       </li>",
                "target": ["li:nth-child(5)"]
            }, {
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"https://www.gov.uk/government/organisations/hm-revenue-customs/contact\">\n        Contact\n        </a>\n       </li>",
                "target": ["li:nth-child(6)"]
            }, {
                "any": [{
                    "id": "listitem",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"https://www.gov.uk/cymraeg\" lang=\"cy\" hreflang=\"cy\">\n        Rhestr o Wasanaethau Cymraeg\n        </a>\n       </li>",
                "target": ["li:nth-child(7)"]
            }]
        }, {
            "id": "meta-viewport-large",
            "impact": null,
            "tags": ["cat.sensory-and-visual-cues", "best-practice"],
            "description": "Ensures <meta name=\"viewport\"> can scale a significant amount",
            "help": "Users should be able to zoom and scale the text up to 500%",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/meta-viewport-large?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "meta-viewport-large",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "minor",
                    "message": "<meta> tag does not prevent significant zooming on mobile devices"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">",
                "target": ["meta[name=\"viewport\"]"]
            }]
        }, {
            "id": "meta-viewport",
            "impact": null,
            "tags": ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
            "description": "Ensures <meta name=\"viewport\"> does not disable text scaling and zooming",
            "help": "Zooming and scaling must not be disabled",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/meta-viewport?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "meta-viewport",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "critical",
                    "message": "<meta> tag does not disable zooming on mobile devices"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">",
                "target": ["meta[name=\"viewport\"]"]
            }]
        }, {
            "id": "nested-interactive",
            "impact": null,
            "tags": ["cat.keyboard", "wcag2a", "wcag412", "TTv5", "TT6.a"],
            "description": "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
            "help": "Interactive controls must not be nested",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/nested-interactive?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "no-focusable-content",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element does not have focusable descendants"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button value=\"accept\" type=\"button\" name=\"cookies\" class=\"cbanner-govuk-button\" data-module=\"cbanner-govuk-button\">\n        Accept additional cookies\n      </button>",
                "target": ["button[value=\"accept\"]"]
            }, {
                "any": [{
                    "id": "no-focusable-content",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element does not have focusable descendants"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button value=\"reject\" type=\"button\" name=\"cookies\" class=\"cbanner-govuk-button\" data-module=\"cbanner-govuk-button\">\n        Reject additional cookies\n      </button>",
                "target": ["button[value=\"reject\"]"]
            }, {
                "any": [{
                    "id": "no-focusable-content",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Element does not have focusable descendants"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button id=\"continue-button\" class=\"govuk-button\" data-module=\"govuk-button\" type=\"submit\">Continue</button>",
                "target": ["#continue-button"]
            }]
        }, {
            "id": "page-has-heading-one",
            "impact": null,
            "tags": ["cat.semantics", "best-practice"],
            "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
            "help": "Page should contain a level-one heading",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/page-has-heading-one?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [{
                    "id": "page-has-heading-one",
                    "data": null,
                    "relatedNodes": [{
                        "html": "<h1 class=\"govuk-label-wrapper\"><label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label> </h1>",
                        "target": ["h1"]
                    }],
                    "impact": "moderate",
                    "message": "Page has at least one level-one heading"
                }],
                "none": [],
                "impact": null,
                "html": "<html lang=\"en\" class=\"govuk-template \">",
                "target": ["html"]
            }]
        }, {
            "id": "region",
            "impact": "moderate",
            "tags": ["cat.keyboard", "best-practice"],
            "description": "Ensures all page content is contained by landmarks",
            "help": "All page content should be contained by landmarks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/region?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner govuk-!-display-none-print\" role=\"region\" aria-label=\"Cookies on HMRC services\" data-nosnippet=\"\">",
                "target": [".cbanner-govuk-cookie-banner"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner__message cbanner-govuk-width-container\">",
                "target": [".cbanner-govuk-cookie-banner__message"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-grid-row\">",
                "target": [".cbanner-govuk-grid-row"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-grid-column-two-thirds\">",
                "target": [".cbanner-govuk-grid-column-two-thirds"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h2 class=\"cbanner-govuk-cookie-banner__heading cbanner-govuk-heading-m\">Cookies on HMRC services</h2>",
                "target": [".cbanner-govuk-cookie-banner__heading"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-cookie-banner__content\">",
                "target": [".cbanner-govuk-cookie-banner__content"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<p class=\"cbanner-govuk-body\">We use some essential cookies to make our services work. </p>",
                "target": ["p:nth-child(1)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<p class=\"cbanner-govuk-body\">We would like to set additional cookies so we can remember your settings, understand how people use our services and make improvements. </p>",
                "target": ["p:nth-child(2)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"cbanner-govuk-button-group\">",
                "target": [".cbanner-govuk-button-group"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button value=\"accept\" type=\"button\" name=\"cookies\" class=\"cbanner-govuk-button\" data-module=\"cbanner-govuk-button\">\n        Accept additional cookies\n      </button>",
                "target": ["button[value=\"accept\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button value=\"reject\" type=\"button\" name=\"cookies\" class=\"cbanner-govuk-button\" data-module=\"cbanner-govuk-button\">\n        Reject additional cookies\n      </button>",
                "target": ["button[value=\"reject\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"cbanner-govuk-link\" href=\"http://localhost:12345/tracking-consent/cookie-settings\">View cookies</a>",
                "target": [".cbanner-govuk-link"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }], "all": [], "none": [], "impact": null, "html": "<header role=\"banner\">", "target": ["header"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-header hmrc-header \" data-module=\"govuk-header\">",
                "target": [".govuk-header"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-header__container  govuk-width-container\">",
                "target": [".govuk-header__container"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-header__logo\">",
                "target": [".govuk-header__logo"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a href=\"https://www.gov.uk\" class=\"govuk-header__link govuk-header__link--homepage\">",
                "target": [".govuk-header__link"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<span class=\"govuk-header__logotype\">",
                "target": [".govuk-header__logotype"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<span class=\"govuk-header__logotype-text\">\n          GOV.UK\n          </span>",
                "target": [".govuk-header__logotype-text"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-header__content\">\n          \n  \n      \n          <a href=\"/check-your-vat-flat-rate/vat-return-period\" class=\"hmrc-header__service-name hmrc-header__service-name--linked\">\n            Check your VAT flat rate\n          </a>\n    \n\n          \n\n          \n        </div>",
                "target": [".govuk-header__content"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a href=\"/check-your-vat-flat-rate/vat-return-period\" class=\"hmrc-header__service-name hmrc-header__service-name--linked\">\n            Check your VAT flat rate\n          </a>",
                "target": [".hmrc-header__service-name"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-width-container \">",
                "target": ["body > .govuk-width-container"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<main class=\"govuk-main-wrapper govuk-main-wrapper--auto-spacing\" id=\"main-content\" role=\"main\">",
                "target": ["#main-content"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-grid-row\">",
                "target": [".govuk-grid-row"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-grid-column-two-thirds\">",
                "target": [".govuk-grid-column-two-thirds"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<form method=\"POST\" novalidate=\"\" action=\"/check-your-vat-flat-rate/turnover\">",
                "target": ["form"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<input type=\"hidden\" name=\"csrfToken\" value=\"c24a932fb96061b048c693f682a09f29fd72e777-1694073771973-a0ce117550f49ebcab422510\">",
                "target": ["input[type=\"hidden\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-form-group\">",
                "target": [".govuk-form-group"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h1 class=\"govuk-label-wrapper\"><label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label> </h1>",
                "target": ["h1"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<label class=\"govuk-label govuk-label--l\" for=\"turnover\">\n          What was your turnover for the quarter including VAT in pounds?\n        </label>",
                "target": ["label"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div id=\"turnover-hint\" class=\"govuk-hint\">\n  This is the total sales of all goods and services. If you're estimating, give realistic figures.\n</div>",
                "target": ["#turnover-hint"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-input__wrapper\"><div class=\"govuk-input__prefix\" aria-hidden=\"true\">�</div>\n<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\"></div>",
                "target": [".govuk-input__wrapper"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "target": ["#turnover"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<button id=\"continue-button\" class=\"govuk-button\" data-module=\"govuk-button\" type=\"submit\">Continue</button>",
                "target": ["#continue-button"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a lang=\"en\" hreflang=\"en\" class=\"govuk-link hmrc-report-technical-issue \" target=\"_blank\" href=\"http://localhost:9250/contact/report-technical-problem?newTab=true&amp;service=VFR\">Is this page not working properly? (opens in new tab)</a>",
                "target": [".govuk-link"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<footer class=\"govuk-footer \" role=\"contentinfo\">",
                "target": ["footer"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-width-container \">",
                "target": ["footer > .govuk-width-container"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-footer__meta\">",
                "target": [".govuk-footer__meta"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-footer__meta-item govuk-footer__meta-item--grow\">",
                "target": [".govuk-footer__meta-item--grow"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<h2 class=\"govuk-visually-hidden\">Support links</h2>",
                "target": [".govuk-visually-hidden"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<ul class=\"govuk-footer__inline-list govuk-!-display-none-print\">",
                "target": ["ul"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"/help/cookies\">\n        Cookies\n        </a>\n       </li>",
                "target": ["li:nth-child(1)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/cookies\">\n        Cookies\n        </a>",
                "target": ["a[href$=\"cookies\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"http://localhost:12346/accessibility-statement/vat-flat-rate-calculator?referrerUrl=%2Fcheck-your-vat-flat-rate%2Fturnover\">\n        Accessibility statement\n        </a>\n       </li>",
                "target": ["li:nth-child(2)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"http://localhost:12346/accessibility-statement/vat-flat-rate-calculator?referrerUrl=%2Fcheck-your-vat-flat-rate%2Fturnover\">\n        Accessibility statement\n        </a>",
                "target": ["li:nth-child(2) > .govuk-footer__link"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"/help/privacy\">\n        Privacy policy\n        </a>\n       </li>",
                "target": ["li:nth-child(3)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/privacy\">\n        Privacy policy\n        </a>",
                "target": ["a[href$=\"privacy\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"/help/terms-and-conditions\">\n        Terms and conditions\n        </a>\n       </li>",
                "target": ["li:nth-child(4)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"/help/terms-and-conditions\">\n        Terms and conditions\n        </a>",
                "target": ["a[href$=\"terms-and-conditions\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"https://www.gov.uk/help\">\n        Help using GOV.UK\n        </a>\n       </li>",
                "target": ["li:nth-child(5)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/help\">\n        Help using GOV.UK\n        </a>",
                "target": ["a[href$=\"help\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"https://www.gov.uk/government/organisations/hm-revenue-customs/contact\">\n        Contact\n        </a>\n       </li>",
                "target": ["li:nth-child(6)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/government/organisations/hm-revenue-customs/contact\">\n        Contact\n        </a>",
                "target": ["li:nth-child(6) > .govuk-footer__link"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<li class=\"govuk-footer__inline-list-item\">\n        <a class=\"govuk-footer__link\" href=\"https://www.gov.uk/cymraeg\" lang=\"cy\" hreflang=\"cy\">\n        Rhestr o Wasanaethau Cymraeg\n        </a>\n       </li>",
                "target": ["li:nth-child(7)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/cymraeg\" lang=\"cy\" hreflang=\"cy\">\n        Rhestr o Wasanaethau Cymraeg\n        </a>",
                "target": ["a[href$=\"cymraeg\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<span class=\"govuk-footer__licence-description\">\n     All content is available under the\n     <a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\"> Open Government Licence v3.0</a>, except where otherwise stated\n    </span>",
                "target": [".govuk-footer__licence-description"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\"> Open Government Licence v3.0</a>",
                "target": ["a[rel=\"license\"]"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<div class=\"govuk-footer__meta-item\">\n    <a class=\"govuk-footer__link govuk-footer__copyright-logo\" href=\"https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/\">� Crown copyright</a>\n   </div>",
                "target": [".govuk-footer__meta-item:nth-child(2)"]
            }, {
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "All page content is contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": null,
                "html": "<a class=\"govuk-footer__link govuk-footer__copyright-logo\" href=\"https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/\">� Crown copyright</a>",
                "target": [".govuk-footer__copyright-logo"]
            }]
        }, {
            "id": "valid-lang",
            "impact": null,
            "tags": ["cat.language", "wcag2aa", "wcag312", "ACT", "TTv5", "TT11.b"],
            "description": "Ensures lang attributes have valid values",
            "help": "lang attribute must have a valid value",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/valid-lang?application=axeAPI",
            "nodes": [{
                "any": [],
                "all": [],
                "none": [{
                    "id": "valid-lang",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Value of lang attribute is included in the list of valid languages"
                }],
                "impact": null,
                "html": "<a lang=\"en\" hreflang=\"en\" class=\"govuk-link hmrc-report-technical-issue \" target=\"_blank\" href=\"http://localhost:9250/contact/report-technical-problem?newTab=true&amp;service=VFR\">Is this page not working properly? (opens in new tab)</a>",
                "target": [".govuk-link"]
            }, {
                "any": [],
                "all": [],
                "none": [{
                    "id": "valid-lang",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "serious",
                    "message": "Value of lang attribute is included in the list of valid languages"
                }],
                "impact": null,
                "html": "<a class=\"govuk-footer__link\" href=\"https://www.gov.uk/cymraeg\" lang=\"cy\" hreflang=\"cy\">\n        Rhestr o Wasanaethau Cymraeg\n        </a>",
                "target": ["a[href$=\"cymraeg\"]"]
            }]
        }],
        "incomplete": [{
            "id": "color-contrast-enhanced",
            "impact": null,
            "description": "Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",
            "message": "Unable to parse color \"\"",
            "stack": "Error: Unable to parse color \"\"\n    at e.value (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:240047)\n    at l (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:351442)\n    at c6 (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:351609)\n    at color-contrast-evaluate (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:373259)\n    at dX.run (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:408801)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:411475\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130\n    at Object.defer (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85230)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:411453\n    at Array.forEach (<anonymous>)",
            "error": {
                "errorNode": {
                    "selector": ["#turnover"],
                    "source": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                    "xpath": ["/input[@id='turnover']"],
                    "ancestry": ["html > body > div:nth-child(5) > main > div > div > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > input:nth-child(2)"],
                    "nodeIndexes": [146]
                }
            },
            "errorNode": {
                "selector": ["#turnover"],
                "source": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "xpath": ["/input[@id='turnover']"],
                "ancestry": ["html > body > div:nth-child(5) > main > div > div > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > input:nth-child(2)"],
                "nodeIndexes": [146]
            },
            "tags": ["cat.color", "wcag2aaa", "wcag146", "ACT"],
            "help": "Elements must meet enhanced color contrast ratio thresholds",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/color-contrast-enhanced?application=axeAPI",
            "nodes": []
        }, {
            "id": "color-contrast",
            "impact": null,
            "description": "Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
            "message": "Unable to parse color \"\"",
            "stack": "Error: Unable to parse color \"\"\n    at e.value (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:240047)\n    at l (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:351442)\n    at c6 (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:351609)\n    at color-contrast-evaluate (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:373259)\n    at dX.run (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:408801)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:411475\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130\n    at Object.defer (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85230)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:411453\n    at Array.forEach (<anonymous>)",
            "error": {
                "errorNode": {
                    "selector": ["#turnover"],
                    "source": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                    "xpath": ["/input[@id='turnover']"],
                    "ancestry": ["html > body > div:nth-child(5) > main > div > div > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > input:nth-child(2)"],
                    "nodeIndexes": [146]
                }
            },
            "errorNode": {
                "selector": ["#turnover"],
                "source": "<input class=\"govuk-input govuk-input--width-5\" id=\"turnover\" name=\"turnover\" type=\"text\" aria-describedby=\"turnover-hint\">",
                "xpath": ["/input[@id='turnover']"],
                "ancestry": ["html > body > div:nth-child(5) > main > div > div > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > input:nth-child(2)"],
                "nodeIndexes": [146]
            },
            "tags": ["cat.color", "wcag2aa", "wcag143", "ACT", "TTv5", "TT13.c"],
            "help": "Elements must meet minimum color contrast ratio thresholds",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/color-contrast?application=axeAPI",
            "nodes": []
        }, {
            "id": "link-in-text-block",
            "impact": null,
            "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
            "message": "`TypeError: Cannot read properties of undefined (reading 'actualNode')` - feature unsupported in your environment. Skipping link-in-text-block rule.",
            "stack": "Error\n    at new u (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:1052)\n    at dJ.run (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:412102)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:424471\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130\n    at Object.defer (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85230)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421429\n    at Array.forEach (<anonymous>)\n    at e.value (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421407)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:425498\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130",
            "error": {
                "name": "SupportError",
                "cause": {},
                "message": "`TypeError: Cannot read properties of undefined (reading 'actualNode')` - feature unsupported in your environment. Skipping link-in-text-block rule.",
                "ruleId": "link-in-text-block",
                "stack": "Error\n    at new u (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:1052)\n    at dJ.run (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:412102)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:424471\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130\n    at Object.defer (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85230)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421429\n    at Array.forEach (<anonymous>)\n    at e.value (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421407)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:425498\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130"
            },
            "tags": ["cat.color", "wcag2a", "wcag141", "TTv5", "TT13.a"],
            "help": "Links must be distinguishable without relying on color",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/link-in-text-block?application=axeAPI",
            "nodes": []
        }, {
            "id": "target-size",
            "impact": null,
            "description": "Ensure touch target have sufficient size and space",
            "message": "`TypeError: Cannot read properties of undefined (reading 'actualNode')` - feature unsupported in your environment. Skipping target-size rule.",
            "stack": "Error\n    at new u (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:1052)\n    at dJ.run (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:412102)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:424471\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130\n    at Object.defer (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85230)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421429\n    at Array.forEach (<anonymous>)\n    at e.value (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421407)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:425498\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130",
            "error": {
                "name": "SupportError",
                "cause": {},
                "message": "`TypeError: Cannot read properties of undefined (reading 'actualNode')` - feature unsupported in your environment. Skipping target-size rule.",
                "ruleId": "target-size",
                "stack": "Error\n    at new u (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:1052)\n    at dJ.run (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:412102)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:424471\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130\n    at Object.defer (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85230)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421429\n    at Array.forEach (<anonymous>)\n    at e.value (chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:421407)\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:425498\n    at chrome-extension://akielfgliddpkdigjgdaldmcilnbcdcc/content.437f2c42.js:1:85130"
            },
            "tags": ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
            "help": "All touch targets must be 24px large, or leave sufficient space",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/target-size?application=axeAPI",
            "nodes": []
        }],
        "violations": [{
            "id": "region",
            "impact": "moderate",
            "tags": ["cat.keyboard", "best-practice"],
            "description": "Ensures all page content is contained by landmarks",
            "help": "All page content should be contained by landmarks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/region?application=axeAPI",
            "nodes": [{
                "any": [{
                    "id": "region",
                    "data": {"isIframe": false},
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Some page content is not contained by landmarks"
                }],
                "all": [],
                "none": [],
                "impact": "moderate",
                "html": "<a href=\"#main-content\" class=\"govuk-skip-link\" data-module=\"govuk-skip-link\">Skip to main content</a>",
                "target": [".govuk-skip-link"],
                "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
            }]
        }]
    }];

    return {reportMetaData, axeAssessedPages}
}