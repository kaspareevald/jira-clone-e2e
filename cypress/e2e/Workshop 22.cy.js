import CreateIssue from "../pages/CreateIssue.cy.js";

describe('Workshop 22 assignment', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', 'https://jira.ivorreic.com/project').then((url) => {
            cy.visit(url + '/board');
        });
    })

it('Create new issue and delete it after creation', () => {

    CreateIssue.createNewIssue();

})

})