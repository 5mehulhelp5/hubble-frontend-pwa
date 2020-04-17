/* eslint-disable */

const loginEmail = Cypress.env('login-email')
const loginPw = Cypress.env('login-pw')
const loginWrongPw = Cypress.env('login-wrong-pw')


describe('Login Flow', function() {

    context('Desktop resolution 1300w x 600h', () => {
        before(() => {
            cy.visit('')

            cy.get('.cookie-notice')
                .within(()=> {
                    cy.get('.button-primary').click()
                })
        })



        beforeEach(() => {
            cy.viewport(1300, 660)
        })



        it('Click Login, no credentials', function () {
            cy.get('.customer-account-cpt-wrp').click()

            cy.get('form').within(()=> {
                cy.get('.button-primary').click()
            })

            cy.contains('Email is required')
        })



        it('Login existing user', function () {
            cy.get('#email').type(loginEmail)
                .should('have.value', loginEmail)

            cy.get('#password').type(loginPw)
                .should('have.value', loginPw)

            cy.get('form').within(() => {
                cy.get('.button-primary').click()
            })

            cy.contains('Logout')
        })



        it('Logout logged in user', function () {
            cy.get('.logout-button').click().wait(500)
        })



        it('Check if user is logged out', function () {
            cy.get('.customer-account-cpt-wrp').click()

            cy.get('form').within(() => {
                cy.get('.button-primary').click()
            })

            cy.contains('Email is required')
        })
    })


    context('Mobile resolution 560w x 812h', () => {
        before(() => {
            cy.visit('')

            cy.get('.cookie-notice')
                .within(()=> {
                    cy.get('.button-primary').click()
                })
        })



        beforeEach(() => {
            cy.viewport(560, 812)
        })



        it('Click Login, no credentials', function () {
            cy.get('.customer-account-cpt-wrp').click()

            cy.get('form').within(()=> {
                cy.get('.button-primary').click()
            })

            cy.contains('Email is required')
        })




        it('Login existing user', function () {
            cy.get('#email').type(loginEmail)
                .should('have.value', loginEmail)

            cy.get('#password').type(loginPw)
                .should('have.value', loginPw)

            cy.get('form').within(() => {
                cy.get('.button-primary').click()
            })

            cy.contains('Logout')
        })




        it('Logout logged in user', function () {
            cy.get('.logout-button').click().wait(500)
        })




        it('Check if user is logged out', function () {
            cy.get('.customer-account-cpt-wrp').click()

            cy.get('form').within(() => {
                cy.get('.button-primary').click()
            })

            cy.contains('Email is required')
        })



        it('Login existing user, wrong PW', function () {
            cy.get('.customer-account-cpt-wrp').click()

            cy.get('#email').type(loginEmail)
                .should('have.value', loginEmail)

            cy.get('#password').type(loginWrongPw)
                .should('have.value', loginWrongPw)

            cy.get('form').within(() => {
                cy.get('.button-primary').click()
            })

            cy.contains('Login failed')
        })
    })
})

