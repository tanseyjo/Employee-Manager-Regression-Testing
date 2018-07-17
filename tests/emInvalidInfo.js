//Refer to JIRA test case QA6T-20 https://dmutah.atlassian.net/browse/QA6T-20
mainPage = {}

module.exports = {
    beforeEach: browser => {
        mainPage = browser.page.EMpageObjects()
        mainPage.navigate()
    },

    after: browser => {
        browser.end()
    },

    //Emp List & Add Employee Present
    'Saving invalid name info': browser => {
        mainPage
            .expect.element('@empList').to.be.visible
    },

    //Check Invalid Info Can Be Cancelled
    'Cancel Invalid Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', '000')
            .click('@cancelButton')
            .verify.value('@nameEntryLine', 'Bernice Ortiz')
     },

    //Check Invalid Info Can Be Saved
    'Save Invalid Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', ' \uE003')
            .click('@saveButton')
            .expect.element('@errorNameLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorCard').to.be.present
        mainPage
            .click('@bernice')
            .verify.containsText('@empTitle', 'Bernice Ortiz')
     },

     //Check Error Messages Go Away With Valid Info: 1 Line
    'Save Invalid Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', ' \uE003')
            .click('@saveButton')
            .expect.element('@errorNameLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorCard').to.be.present
        mainPage
            .setValue('@nameEntryLine', 'Bernice Ortiz')
            .click('@saveButton')
            .verify.containsText('@empTitle', 'Bernice Ortiz')
            .expect.element('@errorNameLine').to.not.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
     },
    
     //Check Error Messages With Invalid Info: 2 Lines
    'Save Invalid Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', ' \uE003')
            .clearValue('@phoneEntryLine')
            .setValue('@phoneEntryLine', ' \uE003')
            .click('@saveButton')
            .expect.element('@errorNameLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorPhoneLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorCard').to.be.present
        mainPage
     },

     //Check Error Messages With Invalid Info: 3 Lines
    'Save Invalid Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', ' \uE003')
            .clearValue('@phoneEntryLine')
            .setValue('@phoneEntryLine', ' \uE003')
            .clearValue('@titleEntryLine')
            .setValue('@titleEntryLine', ' \uE003')
            .click('@saveButton')
            .expect.element('@errorNameLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorPhoneLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorTitleLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorCard').to.be.present
        mainPage
     },

     //Check Error Messages with Invalid Phone Info
    'Save Invalid Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@phoneEntryLine')
            .setValue('@phoneEntryLine', 'asdfjklasdfjkl')
            .click('@saveButton')
            .expect.element('@errorPhoneLine').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
        mainPage
            .expect.element('@errorCard').to.be.present
     }

    }