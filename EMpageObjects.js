module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    elements: {
        'header' : 'span[class="titleText"]',
        'bernice' : { selector: '(//li[@class="listText"])[text()="Bernice Ortiz"]', locateStrategy: 'xpath' },
        'marnie' : { selector: '(//li[@class="listText"])[text()="Marnie Barnett"]', locateStrategy: 'xpath' },
        'phillip' : { selector: '(//li[@class="listText"])[text()="Phillip Weaver"]', locateStrategy: 'xpath' },
        'teresa' : { selector: '(//li[@class="listText"])[text()="Teresa Osborne"]', locateStrategy: 'xpath' },
        'dollie' : { selector: '(//li[@class="listText"])[text()="Dollie Berry"]', locateStrategy: 'xpath' },
        'harriett' : { selector: '(//li[@class="listText"])[text()="Harriett Williamson"]', locateStrategy: 'xpath' },
        'ruby' : { selector: '(//li[@class="listText"])[text()="Ruby Estrada"]', locateStrategy: 'xpath' },
        'lou' : { selector: '(//li[@class="listText"])[text()="Lou White"]', locateStrategy: 'xpath' },
        'eve' : { selector: '(//li[@class="listText"])[text()="Eve Sparks"]', locateStrategy: 'xpath' },
        'lois' : { selector: '(//li[@class="listText"])[text()="Lois Brewer"]', locateStrategy: 'xpath' },
        'newEmp' : { selector: '(//li[@class="listText"])[text()="New Employee"]', locateStrategy: 'xpath' },
        'addEmp' : { selector: '(//li[@class="listText"])[text()=" + Add Employee "]', locateStrategy: 'xpath' },
        'sam' : { selector: '(//li[@class="listText"])[text()="Sam Smith"]', locateStrategy: 'xpath' },
        'disabledCancel' : { selector: '(//button[@name="cancel"])[@disabled]', locateStrategy: 'xpath' },
        'disabledSave' : { selector: '(//button[@name="save"])[@disabled]', locateStrategy: 'xpath' },
        'empList' : 'ul[class="listContainer"]',
        'empID' : 'span[id="employeeID"]',
        'empTitle' : 'p[id="employeeTitle"]',
        'saveButton' : 'button[id="saveBtn"]',
        'cancelButton' : 'button[class="neutralButton"]',
        'nameTitle' : 'span[class="placeholderText"]',
        'nameEntryLine' : 'input[name="nameEntry"]',
        'phoneEntryLine' : 'input[name="phoneEntry"]',
        'titleEntryLine' : 'input[name="titleEntry"]',
        'errorNameLine' : 'input[name="nameEntry"]',
        'errorPhoneLine' : 'input[name="phoneEntry"]',
        'errorTitleLine' : 'input[name="titleEntry"]',
        'errorCard' : 'div[class="errorCard"]' 



    }
}