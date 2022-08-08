/// <reference types="cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('div').should('exist');
  });
});
