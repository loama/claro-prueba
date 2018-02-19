describe('general tests', function() {
  it('open home', function() {
    cy.visit('localhost:8080')
    cy.contains('ul')
  })

  it('has movies', function() {
    cy.visit('localhost:8080')
    cy.contains('ul')
  })

  it('find movie and open modal', function() {
    cy.visit('localhost:8080')
    cy.get('input').type('armage')
    cy.get('li').click()
  })

  it('search for wrong movie and display no movies found', function() {
    cy.visit('localhost:8080')
    cy.get('input').type('armagefdsfse')
    cy.contains('No se encontraron')
  })

  it('open and close modal', function() {
    cy.visit('localhost:8080')
    cy.get('input').type('armage')
    cy.get('li').click()
    //visible
    cy.get('.modalOverlay').click()
  })

  it('empty search', function() {
    cy.visit('localhost:8080')
    cy.get('input').type('{selectall}{backspace}')
  })

  it('find movie, open modal and check it has correct data', function() {
    cy.visit('localhost:8080')
    cy.get('input').type('cuerpos')
    cy.get('li').click()
    cy.contains('Jayne Eastwood')
  })
})
