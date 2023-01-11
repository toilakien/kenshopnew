const API_URL = {
  auth: {
    login: `administrator/login`,
  },
  product: {},
  category: {},
  books: {
    createBook: `/book/create`,
    getAllBook: `/book`,
    deleteBook: (id: any) => `/books/${id}`,
  },
};
export default API_URL;
