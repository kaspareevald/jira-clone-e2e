describe('Workshop 20 assignment', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', 'https://jira.ivorreic.com/project').then((url) => {
            cy.visit(url + '/board');
            cy.get('[data-testid="icon:plus"]').click();
        });
    });

    it('Validate that system gives error messages when mandatory fields are not absent', () => {

        cy.get('[data-testid="select:type"]').should('contain', 'Task').click().invoke('val')
        cy.get('button[type="submit"]').click();

        // Assert that the summary field has red border and displays error message when left blank

        cy.get('input[name="title"]')
            .should('have.css', 'border')
            .should('contain', 'rgb(225, 60, 60)');
        cy.get('.sc-gisBJw').should('contain', 'This field is required')

        /* Assert that the reporter field displays red border and error message when not selected
        
        cy.get('[data-testid="select:reporterId"]').should('contain', 'option', '1')
        .should('contain', 'Select')
        .should('have.css', 'border')
        .should('contain', 'rgb(225, 60, 60)');
        cy.get('sc-gisBJw hyXJaC').should('contain', 'This field is required')

        */

    });

    it('Fill in the fields with random data and submit the filled issue', () => {

        // Select task
        cy.get('[data-testid="select:type"]').should('contain', 'Task').invoke('val');

        // Select summary field and type test title
        cy.get('input[name="title"]').clear()
            .wait(2000)
            .type('Test summary')
            .wait(2000)
            .blur();

        // Select description field and type test description
        cy.get('.ql-editor').clear()
            .type('Test description')
            .wait(2000)
            .blur();

        // Select reporter and choose the Lord Gaben
        cy.get('[data-testid="select:reporterId"]').should('contain', 'Lord Gaben')

        // Submit the issue
        cy.get('button[type="submit"]').click()
            .wait(2000)

        // Assert that the issue is visible on the board
        cy.get('[data-testid="board-list:backlog"]').should('contain', 'Test summary')

        // Assert that the Backlog consists of actual numbers of tasks
        cy.get(':nth-child(1) > .sc-RefOD > .sc-iQKALj').should('contain', '5')

        // ADDITIONAL: Assert that the issue has correct icon (Task)
        // cy.get('[data-rbd-draggable-id="802422"] > .sc-kPVwWT > .sc-esjQYD > :nth-child(1) > [data-testid="icon:task"]').should('be.visible')

    })

    it.only('Create issue with type “Bug”, priority “Highest”, reporter “Pickle Rick"', () => {


        //vaata praegu olemasolevat valikut
        cy.get('[data-testid="select:type"]').invoke('text').then((extractedText) => {
            //kui praegu on valitud see, mdia vaja, siis ei ole vaja midagi rohkem teha
            if (extractedText != ('[data-testid="select:type"]')) {
                //kui ei ole praegu valitud, siis ava dropdown'i
                cy.get('[data-testid="select:type"]').click('bottomRight');
                //dropdownist vali õiget elementi ja klikki selle peale
                cy.get('[data-testid="select-option:Bug"]').click('bottomRight')
                .invoke('text')
                 
            }
        })


        /* Select issue type as 'Bug'
        cy.get('[data-testid="select:type"]')
            .select(0)
            .invoke('val')
            .should('eq', 'Bug')

        */

        // Select summary field and type test title
        cy.get('input[name="title"]').clear()
            .wait(2000)
            .type('Bug summary')
            .wait(2000)
            .blur();

    // Select description field and type test description
    cy.get('.ql-editor').clear()
        .type('Bug description')
        .wait(2000)
        .blur();

    // Select reporter and choose the Lord Gaben
    cy.get('[data-testid="select:reporterId"]')
    .find('text', 'Pickle Rick')
        
   

    // Submit the issue
    cy.get('button[type="submit"]').click()
        .wait(2000)

})

})