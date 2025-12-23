import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/articles")
      .then(res => res.json())
      .then(setArticles);
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 30 }}>
      <h1>BeyondChats Articles</h1>

      {articles.map(article => (
        <div key={article.id} style={{
          border: "1px solid #ddd",
          padding: 20,
          marginBottom: 20,
          borderRadius: 6
        }}>
          <h3>{article.title}</h3>
          <p><b>Status:</b> {article.is_updated ? "Updated" : "Original"}</p>
          <p>{article.content.slice(0, 300)}...</p>
        </div>
      ))}
    </div>
  );
}

export default App;
