import HomePage from './elements/pages/HomePage';
import ManagersPage from './elements/pages/ManagersPage';

describe("Logging in", function () {
    // Get login details here http://demo.guru99.com/
    const home = new HomePage();
    const manager = new ManagersPage();
    const USERNAME = 'mngr204008'
    const PASSWORD = 'sudaqum'

    beforeEach(() => {
        home.visit();
    });

    it('can log in', () => {
        home.login(USERNAME, PASSWORD)

        cy.get('marquee.heading3').should('contain', "Welcome To Manager's Page of GTPL Bank")
    });

    it('can log out', () => {
        home.login(USERNAME, PASSWORD)
        manager.logout();

        cy.get('form[name="frmLogin"]').should('be.visible')
    });
})