
import { useState } from "react";

function NewsItem({ title, description, views }) {
    const [like, setLike] = useState(0);

    return (
        <div className="news-item">
            <h3 className="news-title">{title}</h3>
            <p>{description}</p>
            <p className="news-meta">Lượt xem: {views}</p>
            <p>Số lượt thích: {like}</p>

            <button onClick={() => setLike(like + 1)}>
                Tăng Like
            </button>

            <button onClick={() => setLike(like - 1)}>
                Giảm Like
            </button>
        </div>
    );
}

export default NewsItem;
