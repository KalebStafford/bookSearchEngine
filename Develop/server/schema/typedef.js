const typeDefs = gql`
  type book {
    bookId: id
    authors: [string]
    description: string
    title: string
    image: png
    link: string
  }
  type user {
    _id: id
    username: string
    email: string
    bookCount: int
    savedBooks: [book]
  }
  type mutation {
    login(email: string, password: string): auth
    addUser(username: string, email: string, password: string): auth
    saveBook(newBook: InputBook): user
    removeBook(bookId: id): user
  }
  type query {
    me: user
  }
`;

module.exports = typeDefs;
