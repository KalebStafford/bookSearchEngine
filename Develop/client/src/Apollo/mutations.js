export let LOGIN = gql`

  mutation login( email: string, password: string) {
    login( email: email, password: password) {
      token, user {id, username}
    }
  }
`;

export let ADD = gql`

  mutation addUser( username: string, email: string, password: string) {
    addUser(username: username, email: email, password: password) {
       token, user {id, username, email, bookCount, savedBooks {
          authors, bookId, image, link, title, description}
      }
    }
  }
`;

export let SAVE = gql`

  mutation saveBook( newBook: InputBook) {
    saveBook(newBook: newBook) {
      id, username, email, savedBooks {
        bookId, authors, description, title, image, link}
    }
  }
`;

export let REMOVE = gql`
  mutation removeBook( bookId: id) {
    removeBook(bookId: bookId) {
      id, username, email, savedBooks {
        bookId. authors, description, title, image, link}
    }
  }
`;
