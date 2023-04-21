describe('Visit my application', () => {
    it('should have correct title', () => {
        cy.visit('localhost:3000'), cy.title().should('include', 'ROOOT')
    })

    it
});



describe('Navbar', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('renders the navbar', () => {
        cy.get('nav').should('exist');
    });

    it('contains links to Home, Shop Now, and Contact Us', () => {
        { multiple: true }
        cy.get('nav li').eq(0).should('contain.text', 'Home');
        cy.get('nav li').eq(1).should('contain.text', 'Shop Now');
        cy.get('nav li').eq(2).should('contain.text', 'Contact Us');
    });

});


describe('Button navigation', () => {
    it('navigates to the products page when the "Shop Now" button is clicked', () => {
        // visit the homepage
        cy.visit('localhost:3000');
        // find the "Shop Now" button and click it
        cy.contains('Shop Now').click();
        // ensure that the browser URL is now the products page
        cy.url().should('include', '/products');
    });
});


describe('Carousel', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    it('displays the correct images', () => {
        cy.get('.roundnround').should('have.length', 5)

    })
    it("displays images in carousel", () => {
        cy.get(".carousel-root")
            .find("img")
            .should("exist");
    });
})



