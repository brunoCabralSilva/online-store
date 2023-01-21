export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromQuery(query) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function getProductsByCategorie(categorie) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categorie}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function getProductsById(id) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}
