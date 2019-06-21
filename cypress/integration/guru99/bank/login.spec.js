
describe("Logging in", function () {
    // Get login details here http://demo.guru99.com/

    it('can log in', () => {
        cy.visit('http://demo.guru99.com/V1/index.php')

        cy.get('input[name="uid"]').type('mngr204008')
        cy.get('input[name="password"]').type('sudaqum')

        cy.get('form[name="frmLogin"]').submit()

        cy.get('marquee.heading3').should('contain', "Welcome To Manager's Page of GTPL Bank")
    });

    it.only('can log out', () => {
        cy.visit('http://demo.guru99.com/V1/index.php')

        cy.get('input[name="uid"]').type('mngr204008')
        cy.get('input[name="password"]').type('sudaqum')

        cy.get('form[name="frmLogin"]').submit()

        cy.get('marquee.heading3').should('contain', "Welcome To Manager's Page of GTPL Bank")

        cy.get('a[href="Logout.php"]').click()

        cy.get('form[name="frmLogin"]').should('be.visible')
    });
})