describe('When the user opens the menu and clicks on an item. The page...', () => {
	it('Should scroll to the selected item', () => {
		cy.visit('https://wcswondenboek.nl/book');
		cy.get('.title-md', { timeout: 10000 }).should('be.visible');
		cy.get('.buttons-last-slot > .ion-color', { timeout: 10000 }).should('be.visible').click();
		
		cy.wait(1000);

		cy.get('.buttons-first-slot > .button', { timeout: 10000 }).click();
		cy.get('.searchbar-input').type('littekens');
		cy.get('#ion-overlay-2 > .modal-wrapper > .ion-page > ion-content.md > :nth-child(1)').click();
		
		 cy.wait(5000);

		cy.get('#chap-3a513052e1501512347ebe17a5927078 > h1').then($target => {
            let coords = $target[0].getBoundingClientRect();
			
			expect(Math.ceil(coords.y), { timeout: 10000 }).to.equal(56);
 		});

	});
  });