import { useEffect, useState } from 'react';
import axios from 'axios';
import './CardFilm.scss';

const CardFilm = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/movies/latest?page=1');
                if (res.data?.items?.length) {
                    setMovies(res.data.items);
                } else {
                    setError("Không có phim nào được tìm thấy.");
                }
            } catch (error) {
                console.error("Lỗi khi lấy danh sách phim:", error);
                setError("Không thể tải phim. Vui lòng thử lại.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <p className="loading">Đang tải phim...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="movie-container">
            {movies.map((movie) => (    
                <div key={movie._id} className="card">
                    <img src={movie.thumb_url} alt={movie.name} className="thumb" />
                    <div className="info">
                        <h2>{movie.name}</h2>
                        <p className="origin">{movie.origin_name}</p>
                        <p className="year">Năm: {movie.year}</p>
                        <p className="updated">
                            Cập nhật: {new Intl.DateTimeFormat('vi-VN').format(new Date(movie.modified.time))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardFilm;
