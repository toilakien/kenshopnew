const API_URL = {
  auth: {
    login: `administrator/login`,
  },
  product: {},
  category: {},
  books: {
    createBook: `/books`,
    getAllBook: `/`,
    deleteBook: (id: any) => `/books/${id}`,
  },
};
export default API_URL;
