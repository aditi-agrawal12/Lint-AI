import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import axios from "axios"
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
    return 'Write/Paste your code'
  }`);

const [review, setreview] = useState(``)

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  async function reviewCode(){
    const response = await axios.post('http://localhost:3000/ai/get-review',{code})  
    setreview(response.data)

  }

  return (
    <>
      <main>
      <h1 className="title">Lint AI</h1>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => Prism.highlight(code, Prism.languages.js, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                color: "#d4d4d4", // Light text
                height: "100%",
                width: "100%",
                overflow: "auto",
              }}
            />
          </div>
          <div onClick = {reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown
              rehypePlugins={[rehypeHighlight]}
          >{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
