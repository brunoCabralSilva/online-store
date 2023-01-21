import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  }

  async componentDidMount() {
    const categoriesList = await getCategories();
    this.setState({ categories: [...categoriesList] });
  }

  render() {
    const { categories } = this.state;
    const { buscaPorCategoria } = this.props;
    return (
      <aside className="div-categories">
        <ul className="ul-categories">
          <p>Categorias:</p>
          {
            categories.map((categorie) => (
              <li key={ categorie.id } className="cada-categoria">
                <input
                  className="btn-categoria"
                  data-testid="category"
                  type="button"
                  name={ categorie.id }
                  value={ categorie.name }
                  onClick={ buscaPorCategoria }
                />
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

Categories.propTypes = {
  buscaPorCategoria: PropTypes.func.isRequired,
};

export default Categories;
