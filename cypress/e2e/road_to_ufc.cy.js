describe('Post Resource', () => {
    it('Spam Cedric Doumbe Vote', () => {
        for(let i = 0;i<10000;i++){
            cy.visit('https://j8tzvxqk3ck.typeform.com/ManagerDeCEDRIC?typeform-source=www.youtube.com');
            cy.wait(500)
            cy.get('.asjJS').click();
            cy.wait(500)
            cy.get('#4b3240bd-bb1b-4b30-8b6e-02d715c0a557').type('a');
            cy.wait(500)
            cy.get('.block-footer__Root-sc-1upe4h2-0:nth-child(3) .ButtonWrapper-sc-__sc-1qu8p4z-0').click({force: true});
            cy.wait(500)
            cy.get('#block-9c171345-fcf5-4ea0-bee0-c4b16111385c .ButtonWrapper-sc-__sc-1qu8p4z-0:nth-child(1)').click({force: true});
            cy.wait(500)
            cy.get('#block-5ac68a95-328b-4297-802e-95684ed8851e .ButtonWrapper-sc-__sc-1qu8p4z-0:nth-child(1)').click({force: true});
            cy.wait(500)
            cy.get('#block-b9ec8f5f-270f-4ad2-8680-f790985ea695 .ButtonWrapper-sc-__sc-1qu8p4z-0:nth-child(1)').click({force: true});
            cy.wait(500)
            cy.get('.AnimateStyled-sc-__sc-nw4u3g-0 > .Root-sc-__sc-wot2ho-0 .ButtonWrapper-sc-__sc-1qu8p4z-0').click({ multiple: true, force: true});
            cy.wait(500)
            cy.get('[alt="UFC_Logo"]').click()
            cy.wait(500)
            cy.contains('Submit').click();
        }
    });
});