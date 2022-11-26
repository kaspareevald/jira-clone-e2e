class IssueDetailsEdit {
    constructor() {

        this.issueType = '[data-testid="select:type"]'
        this.issueTypeStory = '[data-testid="select-option:Story"]'

        this.issueStatus = '[data-testid="select:status"]'
        this.issueStatusDone = '[data-testid="select-option:Done"]'

        this.issueAssignee = '[data-testid="select:assignees"]'
        this.IssueAssigneeLordGaben = '[data-testid="select-option:Lord Gaben"]'
        this.issueAssigneeBabyYoda = '[data-testid="select-option:Baby Yoda"]'

        this.issueReporter = '[data-testid="select:reporter"]'
        this.issueReporterPickleRick = '[data-testid="select-option:Pickle Rick"]'

        this.issuePriority = '[data-testid="select:priority"]'
        this.issuePriorityMedium = '[data-testid="select-option:Medium"]'

        this.issueModal = '[data-testid="modal:issue-details"]'
        this.issueTitle = 'textarea[placeholder="Short summary"]'
        this.issueActivateDescriptionField = '.ql-snow'
        this.issueEditDescription = '.ql-editor'

        this.issueSave = '[data-left="92"]'
        this.issueDelete = '[data-testid="icon:trash"]'
        this.issueConfirm = '[data-testid="modal:confirm"]'
        this.issueSubmitButton = '[button[type="Submit"]'

    }

    selectIssueType() {
        cy.get(this.issueType).click('bottomRight')
        cy.get(this.issueTypeStory)
            .trigger('mouseover')
            .trigger('click')

    }

    selectIssueStatus() {
        cy.get(this.issueStatus).click('bottomRight')
        cy.get(this.issueStatusDone)
            .trigger('mouseover')
            .trigger('click')

    }

    selectIssueAssignee() {
        cy.get(this.issueAssignee).click('bottomRight')
        cy.get(this.IssueAssigneeLordGaben).click()

        cy.get(this.issueAssignee).click('bottomRight')
        cy.get(this.issueAssigneeBabyYoda).click()

    }

    selectIssueReporter() {
        cy.get(this.issueReporter).click('bottomRight')
        cy.get(this.issueReporterPickleRick).click()
        cy.get('[data-testid="select:reporter"]').should('have.text', 'Pickle Rick')
    }

    selectIssuePriority() {
        cy.get(this.issuePriority).click('bottomRight')
        cy.get(this.issuePriorityMedium).click()
        cy.get('[data-testid="select:priority"]').should('have.text', 'Medium')

    }

    updateIssue() {
        this.selectIssueType()
        this.selectIssueStatus()
        this.selectIssueAssignee()
        this.selectIssueReporter()
        this.selectIssuePriority()

    }

    updateTitle() {

        const title = 'Test_title'
        cy.get(this.issueTitle).clear().type(title).blur()
    }

    /* selectDescriptionField() {
        cy.get(this.issueActivateDescriptionField)
        .click()
        .should().not('exist')

    }

    */

    updateDescription() {

        const description = 'Test_Description'
        cy.get(this.issueActivateDescriptionField).click().should().not('exist')
        cy.get(this.issueEditDescription).clear().type(description).blur()

    }

    saveIssue() {
        cy.contains('button', 'Save')
        .click()
        .should().not('exist')
    }
}

export default new IssueDetailsEdit();