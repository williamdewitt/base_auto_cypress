class HomePage {
    constructor() {
      //this.header = new Header();
    }
    
    visit() {
        cy.visit('http://demo.guru99.com/V1/index.php');
    }

    fill_username(value) {
        cy.get('input[name="uid"]').type(value)
    }

    fill_password(value) {
        cy.get('input[name="password"]').type(value)
    }

    submit_login_form() {
        cy.get('form[name="frmLogin"]').submit()
    }

    login(username, password) {
        this.fill_username(username)
        this.fill_password(password)
        this.submit_login_form()
    }
}

export default HomePage;