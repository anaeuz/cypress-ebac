import EnderecoPage from '../support/page-objects/endereco.page'
describe('Funcionalidade Enderecos - Faturamento e entrega', () =>{
        
    beforeEach(() => {
        cy.visit ('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
     
    });


    it ('Deve fazer cadastro de faturamento com sucesso' , () =>{
        EnderecoPage.editarEnderecoFaturamento('Ana', 'Euzebio', 'EBAC', 'Brasil', 'Cidnei Luis', '213', 'São Paulo', 'São Paulo', '53485340', '872398579235', 'anapaula@gmail.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

});