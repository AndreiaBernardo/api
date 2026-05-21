import { useParams } from "react-router-dom";
import { useFilm } from "../../hooks/useFilms";

export const FilmDetail = () => {
  const { id } = useParams();
  const { data: film, isLoading, error } = useFilm(id);

  if (isLoading) {
    return <p>Carregando detalhes do filme...</p>;
  }

  if (error) {
    return <p>Erro ao carregar detalhes: {error.message}</p>;
  }

  if (!film) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <>
      <h2>Detalhes do filme</h2>
      
      <div className="film-detail">
          <img src={film.image} alt={film.title} />
          <h3>{film.title}</h3>
          <p><strong>Descrição:</strong> {film.description}</p>
          <p><strong>Diretor:</strong> {film.director}</p>
          <p><strong>Produtor:</strong> {film.producer}</p>
          <p><strong>Data de lançamento:</strong> {film.release_date}</p>
          <p><strong>Pontuação:</strong> {film.rt_score}</p>
      </div>
    </>
  );
};