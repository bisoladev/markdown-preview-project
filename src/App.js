import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## Markdown preview");
  return <h2>markdown preview starter</h2>;
}

export default App;
