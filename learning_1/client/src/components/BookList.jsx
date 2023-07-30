import { gql, useQuery } from "@apollo/client";
import { useEffect, useId } from "react";

const getBookQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

export const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  const booksHTML = data.books.map((book) => <li key={book.id}>{book.name}</li>);

  return <ul>{booksHTML}</ul>;
};
