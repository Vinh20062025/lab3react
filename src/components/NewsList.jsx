
import NewsItem from "./NewsItem.jsx";

function NewsList() {
    return (
        <div>
            <h2>Danh sách tin tức</h2>

            <NewsItem
                title="NodeJS"
                description="Lập trình backend"
                views={120}
            />

            <NewsItem
                title="React"
                description="Lập trình frontend"
                views={85}
            />

            <NewsItem
                title="Express"
                description="Framework Node.js"
                views={60}
            />
        </div>
    );
}

export default NewsList;
