describe('template spec', () => {
  it('passes', () => {
    // Mengunjungi halaman Swag Labs
    cy.visit('https://www.saucedemo.com/')

    // Mengisi form login (tambahkan username dan password yang valid)
    cy.get('input[name="user-name"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()

    // Menambahkan ransel ke keranjang belanja
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Menghapus item darai keranjang belanja
    cy.get('[data-test="remove-sauce-labs-backpack"]')

    // Mengklik link keranjang belanja
    cy.get('[data-test="shopping-cart-link"]').click()
    
    // Memastikan bahwa item sudah ditambahkan ke keranjang
    cy.get('.cart_item').should('exist')

    // Memastikan bahwa item sudah checkout
    cy.get('[data-test="checkout"]')

  })
})