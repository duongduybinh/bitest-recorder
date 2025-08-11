/*
 * An adapter that lets you use format() function with the format
 * that only defines formatCommand() function.
 *
 */

if (bowser.chrome) { this.active_browser = "chromium"; }
else if (bowser.firefox) { this.active_browser = "firefox"; }
else { this.active_browser = "chromium"; }

//cai dat cac thuoc tinh hien thi tren plugin
this.options = {
    version: "v1.0",
    receiver: "",
    environment: this.active_browser,
    indent: "2",
    initialIndents: '2',
    defaultExtension: 'robot-playwright',
    header:
        '*** Settings ***\n' +
        'Library  Browser\n' +
        'Suite Setup     Start Browser\n' +
        'Suite Teardown  End Browser\n\n' +
        '*** Variables ***\n' +
        '${BROWSER}   ' + this.active_browser + '\n\n' +
        '*** Test Cases ***\n',
    footer: ''
};

this.configForm =
    '<description>Variable for Selenium instance</description>' +
    '<textbox id="options_receiver" />' +
    '<description>Environment</description>' +
    '<textbox id="options_environment" />' +
    '<description>Indent</description>' +
    '<menulist id="options_indent"><menupopup>' +
    '<menuitem label="Tab" value="tab"/>' +
    '<menuitem label="1 space" value="1"/>' +
    '<menuitem label="2 spaces" value="2"/>' +
    '<menuitem label="3 spaces" value="3"/>' +
    '<menuitem label="4 spaces" value="4"/>' +
    '<menuitem label="5 spaces" value="5"/>' +
    '<menuitem label="6 spaces" value="6"/>' +
    '<menuitem label="7 spaces" value="7"/>' +
    '<menuitem label="8 spaces" value="8"/>' +
    '</menupopup></menulist>';

this.name = "robotframework-testing_playwright";

this.robotKeywordMapping = {
    open: {
        command: 'Open New Page',
        codes: [
            '[Arguments]    ${url}',
            'New Page    ${url}    domcontentloaded'
        ]
    },
    clickAndWait: {
        command: 'Click First Element',
        codes: [
            '[Arguments]    ${selector}',
            'Sleep    3s',
            '${elements}=    Get Elements    ${selector}',
            'Wait For Elements State    ${elements[0]}    visible',
            'Should Not Be Empty    ${elements}',
            'Click    ${elements[0]}'
        ]
    },
    click: {
        command: 'Click First Element',
        codes: [
            '[Arguments]    ${selector}',
            'Sleep    2s',
            '${elements}=    Get Elements    ${selector}',
            'Should Not Be Empty    ${elements}',
            'Wait For Elements State    ${elements[0]}    visible',
            'Click    ${elements[0]}'
        ]
    },
    clickNoWaitAfter: {
        command: 'Click No Wait After',
        codes: [
            '[Arguments]    ${selector}',
            'Sleep    2s',
            '${elements}=    Get Elements    ${selector}',
            'Should Not Be Empty    ${elements}',
            'Wait For Elements State    ${elements[0]}    visible',
            'Click With Options    ${elements[0]}    force=True    noWaitAfter=True'
        ]
    },
    sendKeys: { command: 'Press Keys', codes: [] },
    submit: { command: 'Submit Form', codes: [
        'Press Key'
    ] },
    type: { command: 'Fill Text', codes: [] },
    selectAndWait: { command: 'Select From List', codes: [] },
    select: { command: 'Select From List', codes: [] },
    verifyValue: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    verifyText: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    verifyElementPresent: { command: 'Page Should Contain Element', codes: [] },
    verifyVisible: { command: 'Page Should Contain Element', codes: [] },
    verifyTitle: {
        command: 'Title Should Be',
        codes: [
            "[Arguments]    ${expected}",
            "Get Title    ==    ${expected}"
        ]
    },
    verifyTable: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    assertConfirmation: { command: 'Alert Should Be Present', codes: [] },
    assertText: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    assertValue: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    assertElementPresent: { command: 'Page Should Contain Element', codes: [] },
    assertVisible: { command: 'Page Should Contain Element', codes: [] },
    assertTitle: {
        command: 'Title Should Be',
        codes: [
            "[Arguments]    ${expected}",
            "Get Title    ==    ${expected}"
        ]
    },
    assertTable: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    waitForText: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    waitForValue: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    waitForElementPresent: { command: 'Page Should Contain Element', codes: [] },
    waitForVisible: { command: 'Page Should Contain Element', codes: [] },
    waitForTitle: {
        command: 'Wait For Title',
        codes: [] 
    },
    waitForTable: {
        command: 'Element Should Contains',
        codes: [
            '[Arguments]    ${selector}    ${expected}',
            '${elements}=    Get Elements    ${selector}',
            'FOR    ${el}    IN    @{elements}',
            '   ${text}=    Get Text    ${el}',
            '   Return From Keyword If    $text == $expected    ${text}',
            'END',
            'Fail'
        ]
    },
    doubleClick: { command: 'Double Click Element', codes: [] },
    doubleClickAndWait: { command: 'Double Click Element', codes: [] },
    goBack: { command: 'Go Back', codes: [] },
    goBackAndWait: { command: 'Go Back', codes: [] },
    runScript: { command: 'Execute Javascript', codes: [] },
    runScriptAndWait: { command: 'Execute Javascript', codes: [] },
    setSpeed: { command: 'Set Selenium Timeout', codes: [] },
    setSpeedAndWait: { command: 'Set Selenium Timeout', codes: [] },
    verifyAlert: { command: 'Wait For Alert', codes: [] },
    assertUrl: {
        command: "Url Should Be",
        codes: [
            "[Arguments]    ${expected}",
            "Get Url    ==    ${expected}"
        ]
    },
    assertInputValueMissing: {
        command: "Input Should Be Value Missing",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.valueMissing",
            "Should Be True    ${validy}"
        ]
    },
    assertInputTypeMismatch: {
        command: "Input Should Be Type Mismatch",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.typeMismatch",
            "Should Be True    ${validy}"
        ]
    },
    assertInputPatternMismatch: {
        command: "Input Should Be Pattern Mismatch",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.patternMismatch",
            "Should Be True    ${validy}"
        ]
    },
    assertInputTooShort: {
        command: "Input Should Be Too Short",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.tooShort",
            "Should Be True    ${validy}"
        ]
    },
    assertInputTooLong: {
        command: "Input Should Be Too Long",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.tooLong",
            "Should Be True    ${validy}"
        ]
    },
    assertInputRangeUnderflow: {
        command: "Input Should Be Range Underflow",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.rangeUnderflow",
            "Should Be True    ${validy}"
        ]
    },
    assertInputRangeOverflow: {
        command: "Input Should Be Range Overflow",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.rangeOverflow",
            "Should Be True    ${validy}"
        ]
    },
    assertInputStepMismatch: {
        command: "Input Should Be Step Mismatch",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.stepMismatch",
            "Should Be True    ${validy}"
        ]
    },
    assertInputBadInput: {
        command: "Input Should Be Bad Input",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.badInput",
            "Should Be True    ${validy}"
        ]
    },
    assertInputCustomError: {
        command: "Input Should Be Custom Error",
        codes: [
            "[Arguments]    ${selector}",
            "${validy}=    Evaluate JavaScript    ${selector}    input => input.validity.customError",
            "Should Be True    ${validy}"
        ]
    },
    waitForTitle: {
        command : 'Wait For Title',
        codes: [
            '[Arguments]    ${expected}',
            'Wait For     Title    ${expected}'
        ]
    },
    waitForUrl: {
        command : 'Wait For Url',
        codes: [
            '[Arguments]    ${expected}    ${timeout}=60s',
            'Wait For Navigation    ${expected}    timeout=${timeout}'
        ]
    },
    takeScreenShot: {
        command: 'Take Screenshot',
        codes: []
    },
    'vtiger.selectField': {
        command: 'Select Field',
        codes: [
            '[Arguments]    ${selector}    ${option}',
            'Wait For Elements State    ${selector}    visible',
            'Sleep    1s',
            '${select2}    Evaluate JavaScript    ${selector}    (selector, option) =>',
            "...    '#select2-results-' + $(selector).closest('.fieldValue').find('.select2-chosen').attr('id').split('-')[2];",
            'Evaluate JavaScript    ${selector}',
            "...    (selector) => $(selector).select2('open');",
            "Evaluate JavaScript    ${select2}    (selector, option) =>",
            "...    $(selector).find('[role=option]').filter(function() {return $(this).text().trim() == option}).trigger('mouseup');",
            "...    arg=${option}"
        ]
    },
    'vtiger.clickMainMenu': {
        command: 'Click Main Menu',
        codes: [
            '[Arguments]    ${selector}',
            '${mainMenu}    Evaluate JavaScript    ${None}    () =>',
            "...    $('#app-menu').addClass('on-hover-trigger-used').css('display', 'block');",
            'Wait For Elements State    ${mainMenu}    visible',
            'Click No Wait After    ${selector}'
        ]
    }
};


this.robotKeywordReplace = {
    'Start Browser': [
        'New Browser    ${BROWSER}    timeout=60000',
        'New Context    ignoreHTTPSErrors=True'
    ],
    'End Browser': [
        'Close Browser'
    ],
    'Open New Page': [
        '[Arguments]    ${url}',
        'New Page    ${url}    domcontentloaded'
    ]
};
/**
 * Parse source and update TestCase. Throw an exception if any error occurs.
 *
 * @param testCase TestCase to update
 * @param source The source to parse
 */
function parse(testCase, source) {
    testCase.header = null;
    testCase.footer = null;
    var commands = [];

    var reader = new LineReader(source);
    var line;
    while ((line = reader.read()) != null) {
        commands.push(new Line(line));
    }
    testCase.commands = commands;
    testCase.formatLocal(this.name).header = "";
}

/**
 * Format TestCase and return the source.
 *
 * @param testCase TestCase to format
 * @param name The name of the test case, if any. It may be used to embed title into the source.
 */
function format(testCase, name) {
    this.log.info("formatting testCase: " + name);
    var result = "";

    result += formatHeader(name, testCase);
    result += formatCommands(name, testCase.commands);
    result += formatFooter(name, testCase);

    return result;
}

function filterForRemoteControl(originalCommands) {
    var commands = [];
    this.log.info('filterForRemoteControl');
    this.log.info(originalCommands);
    for (var i = 0; i < originalCommands.length; i++) {
        var command = originalCommands[i];
        c1 = String(command);
        if (c1.match("|")) {
            c1 = c1.replace("|", "  ").replace("|", "  ");
        }

        if (c1.match("label=")) {
            c1 = c1.replace(/label=/g, "");
        }

        //Xu ly xpath
        var temp = c1.indexOf("//");
        if (temp != -1 && c1.charAt(temp - 1) == " ") {
            c1 = c1.replace("//", "xpath=//");
        }

        if (c1.indexOf("/html") == 0) {
            c1 = "xpath=" + c1;
        }

        var key_str_start = c1.search(/\${KEY_.*}/)
        if (key_str_start != -1) {
            this.log.info("key_str_start: " + key_str_start);
            var key_str_stop = c1.indexOf("}", key_str_start + 6);
            this.log.info("key_str_stop: " + key_str_stop);
            var key_str = normalizeKeys(c1.slice(key_str_start + 6, key_str_stop));
            this.log.info("key_str: " + key_str);
            c1 = c1.replace(/\${KEY_.*}/, key_str);
            this.log.info("C1 |: " + c1);
        }
        commands.push(c1);
    }
    return commands;
}

function normalizeKeys(keyString) {
  if (isNullOrWhitespace(keyString)) return '';
    var key = keyString.trim().toLowerCase();
    switch (key) {
        case "ctrl":
        case "control":
          return "Control";
        case "enter":
          return "Enter";
        case "alt":
          return "Alt";
        case "shift":
          return "Shift";
        case "meta":
        case "cmd":
        case "command":
          return "Meta";
        case "tab":
          return "Tab";
        case "escape":
        case "esc":
          return "Escape";
        case "backspace":
          return "Backspace";
        case "delete":
          return "Delete";
        case "space":
          return " ";
        default:
          return key.charAt(0).toUpperCase() + key.slice(1); // fallback: Capitalize
    }
}

function commandMapping(cmd) {
    if (typeof cmd === 'object' && cmd !== null && cmd.type === 'command') {

        var altCommand = this.robotKeywordMapping[cmd.command.replace('robot.','')];
        if (altCommand) {
            cmd.command = altCommand.command;
            if (altCommand.codes && altCommand.codes.length > 0)
                this.robotKeywordReplace[altCommand.command] = altCommand.codes;
        }
    }

    return cmd;
}

function isNullOrWhitespace(str) {
    return str === null || str === undefined || (typeof str === 'string' && str.trim().length === 0);
}

function formatCommands(name, commands) {

    commands = commands.map((cmd) => commandMapping(cmd));
    commands = filterForRemoteControl(commands);
    var result = "";
    for (var i = 0; i < commands.length; i++) {
        if (commands[i] != null) {
            result += "    " + commands[i] + "\n";
        }
    }
    return result;
}

function formatHeader(name, testCase) {
    var header = "";
    var openurl = "";
    header = options.header;
    if ((name) && (name != "")) { header += name + "\n"; }
    else { header += "Test Case\n"; }
    if (testCase.commands[0] != null) {
        var firstcmd = String(testCase.commands[0]);
        if (firstcmd.startsWith("open")) {
            var firstcmds = [firstcmd];
            firstcmds = filterForRemoteControl(firstcmds);
            firstcmd = firstcmds[0];
            openurl = firstcmd.split(/\s+/).slice(1, 2);
            testCase.commands[0] = "# " + testCase.commands[0];
        }
        else {
            openurl = testCase.getBaseURL();
        }
    }
    // header += "    [Setup]  Run Keywords  Open Browser  " + openurl + "  ${BROWSER}\n";
    // header += "    ...              AND   Set Selenium Speed  ${SELSPEED}\n";
    header += "    Open New Page    " + openurl + "\n";
    return header;
}

function formatFooter(name, testCase) {
    var footer = '\n*** Keywords ***\n';
    // footer += "    [Teardown]  Close Browser\n";
    for (const key in this.robotKeywordReplace) {
        var keywordName = key;
        footer += keywordName + '\n';
        this.robotKeywordReplace[key].forEach(code => {
            footer += '    ' + code + '\n';
        });
        footer += '\n';
    }

    // footer += options.footer;
    return footer;
}

function CallSelenium(message, args) {
    this.message = message;
    if (args) {
        this.args = args;
    } else {
        this.args = [];
    }
}

this.remoteControl = true;
this.playable = false;

//Ham xu li comment
function formatComment(comment) {
    return comment.comment.replace(/.+/mg, function (str) {
        return "// " + str;
    });
}