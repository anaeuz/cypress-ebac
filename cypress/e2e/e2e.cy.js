
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
describe('Funcionalidade Página de Produtos', () => {

before(() => {
cy.visit('produtos/')
});

it('Deve adicionar 4 produtos ao carrinho e ir para o checkout', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 4)
    cy.get('class[name="button wc-forward"]').click()
    cy.get('class[name="checkout-button button alt wc-forward]').click()

});

it ('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados' , () =>{
    EnderecoPage.editarEnderecoFaturamento(
        dadosEndereco[0].nome,
        dadosEndereco[0].sobrenome,
        dadosEndereco[0].empresa,
        dadosEndereco[0].pais,
        dadosEndereco[0].endereco,
        dadosEndereco[0].numero,
        dadosEndereco[0].cidade,
        dadosEndereco[0].estado,
        dadosEndereco[0].cep,
        dadosEndereco[0].telefone,
        dadosEndereco[0].email)
        cy.get('input[id="payment_method_cod"]').click()
        cy.get('input[type="checkbox"]').click()
        cy.get('input[type="submit"]').click()
        
});

});
