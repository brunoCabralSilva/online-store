import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export default class SearchProduct extends React.Component {
  render() {
    const {
      handleClick,
      handleOnChange,
      busca,
    } = this.props;
    return (
      <section className="div-principal">
        <div data-testid="home-initial-message" className="div-info-inicial">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <div className="input-e-carrinho-de-compras">
          <input
            data-testid="query-input"
            type="text"
            name="search"
            value={ busca }
            onChange={ handleOnChange }
            className="input-busca"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ handleClick }
            className="btn-busca-produto"
          >
            Pesquisar
          </button>
        </div>
      </section>
    );
  }
}

SearchProduct.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  busca: PropTypes.string.isRequired,
};
