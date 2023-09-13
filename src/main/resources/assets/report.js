async function init() {
    const issues = [];

    const {reportMetaData, axeAssessedPages} = reportData();

    // Init
    let initialSearchParams = new URLSearchParams(window.location.search);

    // Create page header with report metadata
    if (reportMetaData) {
        const reportMetaDataElement = document.getElementById('headerMetaData');
        const spanBuildNumber = document.createElement('span');
        const paragraph = document.createElement('p');
        if (reportMetaData.jenkinsBuildId) {
            paragraph.innerHTML = "Generated from build ";
            const arefBuildUrl = document.createElement('a');
            arefBuildUrl.href = reportMetaData.jenkinsBuildUrl;
            arefBuildUrl.innerText = reportMetaData.jenkinsBuildId;
            spanBuildNumber.appendChild(arefBuildUrl);
            paragraph.appendChild(spanBuildNumber);
            paragraph.innerHTML += ' (' + reportMetaData.browser + ')' + ' of '
        } else {
            paragraph.innerHTML = "Generated from ";
        }

        const arefProjectName = document.createElement('a');
        arefProjectName.href = "https://github.com/hmrc/" + reportMetaData.projectName;
        arefProjectName.innerText = reportMetaData.projectName;
        paragraph.appendChild(arefProjectName);
        paragraph.innerHTML += ' on ';
        const timeStamp = document.createElement('time');
        timeStamp.dateTime = reportMetaData.dateOfAssessment;
        timeStamp.innerText = reportMetaData.dateOfAssessment;
        paragraph.appendChild(timeStamp);
        reportMetaDataElement.appendChild(paragraph);

        const footerProjectLinkElement = document.getElementById('footerProjectLink');
        footerProjectLinkElement.append(arefProjectName);
    }

    // Create and populate violations
    const violationList = document.getElementById('violations');
    const createViolations = () => {
        const createViolationData = () => {
            Array.from(axeAssessedPages).forEach(page => {
                const testEngineVersion = page.testEngine.version;
                Array.from(page.violations).forEach(violation => {
                    const violationData = {
                        id: violation.id,
                        impact: violation.impact,
                        version: testEngineVersion,
                        help: violation.help,
                        helpUrl: violation.helpUrl,
                        html: Array.from(violation.nodes).map(node => node.html),
                        affects: [page.url],
                        testEngineVersion
                    };

                    const dataHash = MD5.generate(JSON.stringify(violationData));
                    const windowHref = window.location.href;
                    const permaLink = windowHref.includes('?search=') ? windowHref : windowHref + '?search=' + dataHash;
                    violationData.dataHash = dataHash;
                    violationData.permaLink = permaLink;

                    const existingIssue = issues.find(issue => {
                        return issue.id === violationData.id &&
                            issue.html.join(' ') === violationData.html.join(' ');
                    });

                    if (existingIssue) {
                        if (!existingIssue.affects.includes(page.url))
                            existingIssue.affects.push(page.url);
                    } else {
                        issues.push(violationData);
                    }
                });
            });
        };

        const createAndPopulateViolationElements = () => {
            issues.forEach(issue => {
                let temp = document.getElementsByTagName("template")[0];
                let clonedTemplate = temp.content.cloneNode(true);
                const li = clonedTemplate.querySelector('li');

                li.setAttribute('data-hash', issue.dataHash);
                li.setAttribute('data-impact', issue.impact);

                const helpUrl = clonedTemplate.getElementById('helpUrl');
                helpUrl.setAttribute('href', issue.helpUrl);
                helpUrl.innerText = issue.id;

                const impactTag = clonedTemplate.getElementById('impactTag');
                impactTag.setAttribute('data-tag', issue.impact);
                impactTag.innerText = issue.impact;

                const testEngine = clonedTemplate.getElementById('testEngineVersion');
                testEngine.innerText = issue.testEngineVersion;

                const violationHelp = clonedTemplate.getElementById('violationHelp');
                violationHelp.innerText = issue.help;

                const htmlSnippet = clonedTemplate.getElementById('htmlSnippet');
                htmlSnippet.innerText = issue.html;

                const urlViolationSummary = clonedTemplate.getElementById('urlViolationSummary');
                const affectsUrls = issue.affects;
                urlViolationSummary.innerText = `${affectsUrls.length} URLs`;
                const urlViolations = clonedTemplate.getElementById('urlViolations');
                affectsUrls.forEach(url => {
                    const urlListItem = document.createElement('li');
                    const urlHref = document.createElement('a');
                    urlHref.innerText = url;
                    urlListItem.appendChild(urlHref);
                    urlViolations.append(urlListItem);
                });

                const violationPermaLink = clonedTemplate.getElementById('violationPermaLink');
                violationPermaLink.setAttribute('href', issue.permaLink);
                violationPermaLink.innerText = issue.permaLink;

                violationList.appendChild(clonedTemplate);
            });
        }

        const sortByImpact = (array) => {
            const severityMap = {
                "critical": 0,
                "serious": 1,
                "moderate": 2,
                "info": 3,
            };

            array.sort((a, b) => {
                const aSeverity = severityMap[a.impact];
                const bSeverity = severityMap[b.impact];

                if (aSeverity !== bSeverity) {
                    return aSeverity - bSeverity;
                }

                return a.impact - b.impact;
            });

            return array;
        }

        createViolationData();
        sortByImpact(issues);
        createAndPopulateViolationElements();
    }
    createViolations();

    // Issue count
    const issueCount = document.getElementById('issueCount');
    const displayIssueCount = () => {
        const displayedViolations = document.querySelectorAll(`li[data-hash]`);

        const count = Array.from(displayedViolations)
            .map(liViolation => liViolation.style.display === 'none' ? 0 : 1)
            .reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0);

        if (count === 0) {
            issueCount.innerText = "No issues identified.";
        } else {
            issueCount.innerText = `Displaying ${count} of ${issues.length} issues identified.`;
        }
    }

    // Form
    const form = document.getElementById("form");
    form.addEventListener('keypress', function (e) {
        if (e.code === 'Enter') {
            e.preventDefault();
        }
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Search
    const highlighter = new Mark(document.getElementById("violations"));
    const searchViolations = (value) => {
        const showAllViolations = () => {
            issues.forEach(issue => {
                const dataHashFound = document.querySelector(`li[data-hash="${issue.dataHash}"]`);
                if (dataHashFound) {
                    dataHashFound.style.display = 'block';
                }
            });
        }

        const hideAllViolations = () => {
            issues.forEach(issue => {
                const dataHashFound = document.querySelector(`li[data-hash="${issue.dataHash}"]`);
                if (dataHashFound) {
                    dataHashFound.style.display = 'none';
                }
            });
        }

        if(value.trim() === "") {
            showAllViolations()
        } else {
            hideAllViolations();
            highlighter.mark(value, {
                element: "span",
                className: "highlight",
                acrossElements: true,
                each: (e) => {
                    const dataHashFound = e.closest("li[data-hash]");
                    if(dataHashFound) {
                        dataHashFound.style.display = 'block';
                    }
                },
                exclude: [
                    "dt"
                ]
            });
        }

        displayIssueCount();
    }

    const filterByViolationImpact = (violations) => {
        issues.forEach(issue => {
            const dataHashFound = document.querySelectorAll(`li[data-hash="${issue.dataHash}"]`);
            if (dataHashFound) {
                for (let i = 0; i < dataHashFound.length; ++i) {
                    if (violations && violations.length >= 0) {
                        dataHashFound[i].style.display = 'none';
                    } else {
                        dataHashFound[i].style.display = 'block';
                    }
                }
            }
        });

        violations.forEach(violation => {
            const dataHashFound = document.querySelectorAll(`li[data-hash="${violation.dataHash}"]`);
            if (dataHashFound) {
                for (let i = 0; i < dataHashFound.length; ++i) {
                    dataHashFound[i].style.display = 'block';
                }
            }
        });
        displayIssueCount();
    }

    const showAllViolations = () => {
        issues.forEach(issue => {
            const dataHashFound = document.querySelectorAll(`li[data-hash="${issue.dataHash}"]`);
            if (dataHashFound) {
                for (let i = 0; i < dataHashFound.length; ++i) {
                    dataHashFound[i].style.display = 'block';
                }
            }
        });
        displayIssueCount();
    }

    // URL query parameters
    initialSearchParams.forEach((valueFromUrl, name) => {
        const fields = document.querySelectorAll(`[name='${name}']`);

        if (fields[0].type === "checkbox") {
            Array.from(fields).forEach((field) => {
                if (field.value === valueFromUrl) {
                    field.checked = true;
                }
            });
        } else {
            fields[0].value = valueFromUrl;
        }

        if (name === "search") {
            const foundIssue = issues.find(issue => issue.dataHash === valueFromUrl);
            if (foundIssue) {
                searchViolations(foundIssue.dataHash);
            }
        }
    });

    const clearSearch = () => {
        const url = new URL(window.location);
        let clearUrlParams = url.href;
        if (url.search !== "") {
            clearUrlParams = url.href.replace(url.search, '');
        }
        history.pushState({}, "", clearUrlParams);
        window.location.href = clearUrlParams;
    }

    const search = document.getElementById("search");
    search.addEventListener("keyup", (e) => {
        applyFilters();
        searchViolations(e.target.value);
    });

    const clear = document.getElementById("clear");
    clear.addEventListener("click", () => {
        search.value = "";
        filters.forEach((filter) => (filter.checked = false));
        clearSearch();
    });

    // Filters
    const applyFilters = () => {
        const activeFilters = Array.from(filters).reduce((active, filter) => {
            return active.concat(filter.checked ? filter.value : []);
        }, []);

        let violationByImpact = [];
        if (activeFilters.length > 0) {
            violationByImpact = issues.filter((issue) => {
                return activeFilters.includes(issue.impact);
            });

            filterByViolationImpact(violationByImpact);
            const searchValue = document.getElementById('search');
            if (searchValue) {
                searchViolations(searchValue.value);
            }
        } else {
            showAllViolations();
        }
    }

    // Impact toggles
    const filters = document.querySelectorAll("input[name='impact']");
    filters.forEach((filter) => {
        filter.addEventListener("input", applyFilters);
    });

    displayIssueCount();

    // Visibility (based on JavaScript enabled/disabled in browser)
    document.getElementById("sidebar").classList.remove("js-hidden");
}