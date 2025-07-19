import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

const STORAGE_KEY = "favorite_movie_ids";

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
        setFavoriteIds(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    const toggleFavorite = (id) => {
        setFavoriteIds((prev) =>
        prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
    };

    const isFavorite = (id) => favoriteIds.includes(id);

    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
        {children}
        </FavoritesContext.Provider>
    );
    }

    export function useFavorites() {
    return useContext(FavoritesContext);
}
