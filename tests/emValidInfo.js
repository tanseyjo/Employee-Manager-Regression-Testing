//Refer to JIRA test case QA6T-19 https://dmutah.atlassian.net/browse/QA6T-19

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

   //Check Employee Cards Load
    'Check Employee Cards': browser => {
        mainPage
            .click('@bernice')
            .verify.containsText('@empTitle', 'Bernice Ortiz')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@marnie')
            .verify.containsText('@empTitle', 'Marnie Barnett')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@phillip')
            .verify.containsText('@empTitle', 'Phillip Weaver')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@teresa')
            .verify.containsText('@empTitle', 'Teresa Osborne')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@dollie')
            .verify.containsText('@empTitle', 'Dollie Berry')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@harriett')
            .verify.containsText('@empTitle', 'Harriett Williamson')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@ruby')
            .verify.containsText('@empTitle', 'Ruby Estrada')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@lou')
            .verify.containsText('@empTitle', 'Lou White')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@eve')
            .verify.containsText('@empTitle', 'Eve Sparks')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
            .click('@lois')
            .verify.containsText('@empTitle', 'Lois Brewer')
            .expect.element('@disabledCancel').to.be.visible
        mainPage
            .expect.element('@disabledSave').to.be.visible
        mainPage
           
    },

     //Check Add Employee Creates New Card
     'Add Employee': browser => {
        mainPage
            .click('@addEmp')
            .click('@newEmp')
            .verify.containsText('@empTitle', 'New Employee')
     },

    //  //Check Updated Info Can Be Cancelled
     'Cancel Updated Info': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', 'Sam Smith')
            .click('@cancelButton')
            .verify.value('@nameEntryLine', 'Bernice Ortiz')
     },

    //Check Updated Name Can Be Saved
     'Save Updated Name': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', 'Sam Smith')
            .click('@saveButton')
            .click('@marnie')
            .click('@sam')
            .verify.value('@nameEntryLine', 'Sam Smith')
     },

     //Check Updated Info Won't Save if Page is Navigated Away From w/o Saving
     'Save Updated Name': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@nameEntryLine')
            .setValue('@nameEntryLine', 'Sam Smith')
            .click('@marnie')
            .click('@bernice')
            .verify.value('@nameEntryLine', 'Bernice Ortiz')
     },

     //Check Updated Phone Can Be Saved
     'Save Updated Phone': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@phoneEntryLine')
            .setValue('@phoneEntryLine', '1231231234')
            .click('@saveButton')
            .verify.value('@phoneEntryLine', '1231231234')
     },

     //Check Updated Title Can Be Saved
     'Save Updated Title': browser => {
        mainPage
            .click('@bernice')
            .clearValue('@titleEntryLine')
            .setValue('@titleEntryLine', 'Manager')
            .click('@saveButton')
            .verify.value('@titleEntryLine', 'Manager')
     },







}