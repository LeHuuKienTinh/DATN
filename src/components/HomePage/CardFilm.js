import { useEffect, useState } from 'react';
import axios from 'axios';
import './CardFilm.scss';

const CardFilm = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/movies/latest?page=1');
                console.log("DỮ LIỆU API:", res.data.items); // Log chỉ khi có dữ liệu
                setMovies(res.data.items);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách phim:", error);
            }
        };

        fetchMovies(); // Gọi hàm async
    }, []); // Chạy 1 lần khi component mount

    const sliderStyle = {
        "--width": "230px",
        "--height": "100%",
        "--quantity": "9",
    };

    return (
        <div className="slider" style={sliderStyle}>
            <div className="list">

                {movies.length === 0 ? (
                    <p>Đang tải phim...</p> // Hiển thị loading khi chưa có dữ liệu
                ) : (
                    movies.map((movie, index) => (
                        console.log("phim", movie),
                        <div key={movie._id} className="item" style={{ "--position": index + 1 }}>
                            <div className="card" style={{ backgroundImage: `url(${movie.poster_url})` }}>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CardFilm;
