import { gql, useQuery } from "@apollo/client";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const useGetFavorite = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { data, loading, error };
};

export default useGetFavorite;
