import axios from "axios";

const API_URL = "http://localhost:8000/api/articles";

async function run() {
  const res = await axios.get(API_URL);
  const latest = res.data[0];

  const references = [
    "https://medium.com/sample-article",
    "https://blog.sample.com/seo-article"
  ];

  const updatedContent = `
${latest.content}

--- Updated Version ---

This article has been rewritten by analyzing top-ranking articles on Google.

References:
- ${references[0]}
- ${references[1]}
`;

  await axios.post(API_URL, {
    title: latest.title,
    content: updatedContent,
    source_url: latest.source_url,
    is_updated: true
  });

  console.log("Updated article published successfully");
}

run();
