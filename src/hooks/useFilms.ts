import { useQuery } from "@tanstack/react-query";
import type { Film } from "../types/films";

const fetchFilms = async () => {
    const response = await fetch(`https://ghibliapi.vercel.app/films`);

    if (!response.ok) throw new Error("Erro ao buscar os filmes");

    return response.json()
}

const fetchFilmById = async (id: string | undefined) => {
    if (!id) return null;
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);

    if (!response.ok) throw new Error("Erro ao buscar os detalhes do filme");

    return response.json();
};

export function useFilms() {
    return useQuery<Film[]>({
        queryKey: ["films"],
        queryFn: () => fetchFilms(),
    });
};

export function useFilm(id: string | undefined) {
    return useQuery<Film>({
        queryKey: ["film", id],
        queryFn: () => fetchFilmById(id),
        enabled: !!id, 
    });
}