class ManagersPage {
    constructor() {

    }

    logout() {
        cy.get('a[href="Logout.php"]').click()
    }
}

export default ManagersPage;