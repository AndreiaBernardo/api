import { useFilms } from "../../hooks/useFilms";
import { Link } from "react-router-dom";
import type { Film } from "../../types/films";
import "./Home.css"


export function Home() {
    const { data, isLoading, error } = useFilms();

    if (isLoading) {
        
        return <p>Carregando...</p>
    }

    if (error) {
        return <p>Erro ao carregar os filmes: {error instanceof Error ? error.message : "Erro desconhecido"}</p>;
    }

    return (
        <section className="films-container">

            <h2>Diversão garantida é aqui 🎬 Com filmes que vão além da sua imaginação...</h2>

            <div className="films-grid">
            {
            Array.isArray(data) ? data
                .slice() 
                .sort((a, b) => a.title.localeCompare(b.title)) 
                .slice(0, 10) 
                .map((film: Film) => (
                <Link to={`/film/${film.id}`} key={film.id} className="film-card">
                   
                    <img src={film.image} alt={film.title} />

                    <div className="film-info">
                        <h3>{film.title}</h3>
                      <button type="button">Ver detalhes</button> 
                    </div>
                </Link>
            )) : null}
        </div>
        </section>
    );
}
