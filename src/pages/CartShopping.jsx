import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import QuantButtons from '../components/QuantButtons';
import imgTrybe from '../imagens/trybe.png';

export default class CartShopping extends React.Component {
  state = {
    carrinho: [],
  }

  componentDidMount() {
    const lista = localStorage.getItem('carrinho-de-compras');
    const listaReturn = JSON.parse(lista);
    this.setState({ carrinho: listaReturn });
  }

  listaCarrinho = () => {
    const { carrinho } = this.state;
    const arrayListasCarrinho = [];
    const arrayCarrinho = [];
    carrinho.forEach((produto) => {
      if (!arrayListasCarrinho.includes(produto.id)) {
        arrayListasCarrinho.push(produto.id);
        arrayCarrinho.push(produto);
      }
    });
    return arrayCarrinho;
  }

  render() {
    const { carrinho } = this.state;
    console.log(carrinho);
    if (carrinho === null || carrinho.length === 0) {
      return (
        <div className="conteudo-carrinho">
          <Header />
          <h2>Bem vindo ao carrinho de compras</h2>
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        </div>
      );
    }
    return (
      <div className="conteudo-carrinho">
        <header>
          <Link to="/" className="link-product-home">
            <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
          </Link>
          <Link to="/checkout" data-testid="checkout-products">
            <h2>Finalizar Compra</h2>
          </Link>
        </header>
        {' '}
        <h2>Bem vindo ao carrinho de compras</h2>
        <div className="lista-de-produtos">
          {
            this.listaCarrinho().map((produto) => (
              <div
                className="produtos-enc"
                key={ produto.id }
              >
                <div className="div-produtos-encontrados produtos-carrinho">
                  <img
                    src={ produto.thumbnail }
                    alt={ `imagem de ${produto.title}` }
                    className="imagem-produto"
                  />
                  <p
                    data-testid="shopping-cart-product-name"
                    className="produtos-encontrados-title"
                  >
                    <strong>
                      { produto.title }
                    </strong>
                  </p>
                  <p>
                    {'R$ '}
                    <strong>
                      { produto.price }
                    </strong>
                  </p>
                  <QuantButtons />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
