class CreateIssue {
    constructor() {

    this.createIssueButton = '[data-testid="icon:plus"]'

    this.selectType = '[data-testid="select:type"]'
    this.chooseTypeBug = '[data-testid="select-option:Bug"]'
    this.selectSummary = 'input[name="title"]'
    this.selectDescription = '.ql-editor'

    this.selectReporter = '[data-testid="select:reporterId"]'
    this.chooseReporter = '[data-testid="select-option:Pickle Rick"]'

    this.selectAssignee = '[data-testid="select:userIds"]'
    this.chooseAssignee = '[data-testid="select-option:Pickle Rick"]'

    this.selectPriority = '[data-testid="select:priority"]'
    this.choosePriority = '[data-testid="select-option:Medium"]'
    this.submitButton = 'button[type="submit"]'

    this.issueList = '[data-testid="board-list:backlog"]'
    this.deleteIssue = 'button[type="trash"]'

}

createNewIssue() {

    cy.get(this.createIssueButton)
        .click()

    cy.get(this.selectType)
        .click()
        .wait(500)

    cy.get(this.chooseTypeBug)
        .click()
        .wait(500)

    cy.get(this.selectSummary)
        .clear()
        .wait(500)
        .type('Test summary')
        .wait(500)
        .blur()

    cy.get(this.selectDescription)
        .clear()
        .type('Test description')
        .wait(500)
        .blur()

    cy.get(this.selectReporter)
        .click()

    cy.get(this.chooseReporter)
        .trigger('mouseover')
        .trigger('click')

    cy.get(this.selectAssignee)
        .click()

    cy.get(this.chooseAssignee)
        .trigger('mouseover')
        .trigger('click')

    cy.get(this.submitButton)
        .click()
        .wait(1000)
    
}

DeleteIssue() {

    cy.get(this.IssueList)
    


}


}

export default new CreateIssue();