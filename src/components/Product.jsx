import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgTrybe from '../imagens/trybe.png';

export default class Product extends React.Component {
  render() {
    const {
      titulo,
      custo,
      imagem,
      atributos,
      adicionaAoCarrinho,
      id,
    } = this.props;
    return (
      <div className="div-product-id">
        <header>
          <div className="div-product-id-header">
            <Link to="/" className="link-product-home">
              <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
            </Link>
            <h1>Frontend Online Store</h1>
          </div>
          <Link
            data-testid="shopping-cart-button"
            to="/CartShopping"
            className="link-shopping-cart"
          >
            Carrinho de Compras
          </Link>
        </header>
        <div className="informations-product-id">
          <div>
            <h2 data-testid="product-detail-name">{ titulo }</h2>
            <h2>{ `R$ ${custo}` }</h2>
            <img src={ imagem } alt={ titulo } />
          </div>
          <ul>
            <h2>Especificações Técnicas:</h2>
            {
              atributos.map((atributo) => (
                <li key={ atributo.id } className="product-atributos-id">
                  <strong>{ `${atributo.name}: ` }</strong>
                  <span>{ atributo.value_name }</span>
                </li>
              ))
            }
            <button
              type="button"
              className="adicionar-ao-carrinho-productDetails"
              data-testid="product-detail-add-to-cart"
              value={ id }
              onClick={ adicionaAoCarrinho }
            >
              Adicionar ao Carrinho
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  titulo: PropTypes.string.isRequired,
  custo: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  atributos: PropTypes.string.isRequired,
  adicionaAoCarrinho: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
