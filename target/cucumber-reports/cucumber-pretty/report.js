$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM login feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": ": FreeCRM login test scenario",
  "description": "",
  "id": "freecrm-login-feature;:-freecrm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the login page is CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "title of the login page is CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "freecrm-login-feature;:-freecrm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "freecrm-login-feature;:-freecrm-login-test-scenario;;1"
    },
    {
      "cells": [
        "shilpaabc",
        "Sh$ln9606"
      ],
      "line": 14,
      "id": "freecrm-login-feature;:-freecrm-login-test-scenario;;2"
    },
    {
      "cells": [
        "Tom",
        "test123"
      ],
      "line": 15,
      "id": "freecrm-login-feature;:-freecrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": ": FreeCRM login test scenario",
  "description": "",
  "id": "freecrm-login-feature;:-freecrm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the login page is CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"shilpaabc\" and \"Sh$ln9606\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "title of the login page is CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 17077902000,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.title_of_the_login_page_is_CRM_software()"
});
formatter.result({
  "duration": 14069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shilpaabc",
      "offset": 13
    },
    {
      "val": "Sh$ln9606",
      "offset": 29
    }
  ],
  "location": "loginsteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 256412900,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8301141100,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.title_of_the_login_page_is_CRMPRO()"
});
formatter.result({
  "duration": 12939200,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.close_the_browser()"
});
formatter.result({
  "duration": 700342900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": FreeCRM login test scenario",
  "description": "",
  "id": "freecrm-login-feature;:-freecrm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the login page is CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Tom\" and \"test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "title of the login page is CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 15633581500,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.title_of_the_login_page_is_CRM_software()"
});
formatter.result({
  "duration": 16447400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    },
    {
      "val": "test123",
      "offset": 23
    }
  ],
  "location": "loginsteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 207110000,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6796243200,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.title_of_the_login_page_is_CRMPRO()"
});
formatter.result({
  "duration": 24642100,
  "error_message": "java.lang.AssertionError: expected [CRMPRO - CRM software for customer relationship management, sales, and support.] but found [CRMPRO]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepDefinition.loginsteps.title_of_the_login_page_is_CRMPRO(loginsteps.java:61)\r\n\tat ✽.Then title of the login page is CRMPRO(login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginsteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});