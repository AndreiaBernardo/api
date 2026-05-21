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
    <div className=" items-center justify-center text-center w-full p-14   bg-white">  
      <h2 className="shadow-lg shadow-[#110135] rounded-2xl text-3xl font-bold p-4 h-30 text-center justify-center items-center flex">Detalhes do filme</h2>
      </div>
    
      
      <div className="film-detail  flex flex-col  items-center justify-center p-5 text-2xl text-center gap-4">
          <img className=" h-auto mb-4  rounded-2xl shadow-lg shadow-[#110135]  p-10" src={film.image} alt={film.title} />
          <h3 className="font-bold text-3xl p-6">{film.title}</h3>
          <p><strong>Descrição:</strong> {film.description}</p>
          <p><strong>Diretor:</strong> {film.director}</p>
          <p><strong>Produtor:</strong> {film.producer}</p>
          <p><strong>Data de lançamento:</strong> {film.release_date}</p>
          <p><strong>Pontuação:</strong> {film.rt_score}</p>
      </div>
    </>
  );
};