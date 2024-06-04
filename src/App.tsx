import { useFetchRepositories } from "./hooks/useRepos";
import Card from "./components/Card";
import { useFavoriteReposStore } from "./store/favoriteRepos";
import { Repository } from "./hooks/types";

function App() {
  const { data, isLoading } = useFetchRepositories();
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data && data.map((repository: Repository) => (
        <Card
          repository={repository}
          key={repository.id}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  );
}

export default App;


