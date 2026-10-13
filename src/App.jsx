
import NewsList from "./components/NewsList.jsx";
import ChangeTitle from "./components/ChangeTitle.jsx";
import ToggleContent from "./components/ToggleContent.jsx";
import NewsStatus from "./components/NewsStatus.jsx";
import CategoryList from "./components/CategoryList.jsx";

function App() {
    return (
        <div>
            <h1>THỰC HÀNH REACT - LAB 4</h1>

            <main>
                <ChangeTitle />
                <ToggleContent />
                <NewsStatus />
                <CategoryList />
                <NewsList />
            </main>
        </div>
    );
}

export default App;
