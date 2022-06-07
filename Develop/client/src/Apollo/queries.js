export const GET = gql`
  {
    me { _id, username, email ,bookCount ,savedBooks {
        bookId, authors, description, title, image, link }}
  }
`;