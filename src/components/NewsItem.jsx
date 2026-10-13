
function NewsItem({ title, description, views }) {
    return (
        <div className="news-item">
            <h3 className="news-title">{title}</h3>
            <p>{description}</p>
            <p className="news-meta">
                Lượt xem: {views}
            </p>
        </div>
    );
}

export default NewsItem;
