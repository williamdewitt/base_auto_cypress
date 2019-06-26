import HomePage from '../../../pages/bank/HomePage'
import ManagersPage from '../../../pages/bank/ManagersPage'

describe("Logging in", function () {
    // Get login details here http://demo.guru99.com/
    const home = new HomePage();
    const manager = new ManagersPage();

    beforeEach(() => {
        home.visit();
    });

    it.only('can log in', () => {
        cy.fixture('example').then((example)  => {
            home.login(example['user'].username, example['user'].password)
        })

        cy.get('marquee.heading3').should('contain', "Welcome To Manager's Page of GTPL Bank")
    });

    it.skip('requires details', () => {
        home.submit_login_form();

        cy.on('window:prompt', (str) => {
            expect(str).to.equal(`This is an alert box!`)
        })
    });

    it('can log out', () => {
        home.login(USERNAME, PASSWORD)
        manager.logout();

        cy.get('form[name="frmLogin"]').should('be.visible')
    });
})