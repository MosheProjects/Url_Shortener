import { useRef, useState } from "react";
import "./App.css";
import { Url } from "./types/urlType";
import { shorten } from "./Api/Requests";
import { Alert, Button, TextField } from "@mui/material";

function App() {
  const [url, setUrl] = useState<Url>();
  const [error, setError] = useState<string | boolean>(false);
  const urlRef = useRef<HTMLInputElement>(null);

  const shortenUrl = async () => {
    if (urlRef.current) {
      try {
        const res = await shorten(urlRef.current?.value);
        setUrl(res.data);
        setError(false);
      } catch (error: any) {
        console.log(error.response.data);
        setError(error.response.data);
        setUrl(undefined)
      }
    }
  };

  return (
    <div className="main">
      {error && (
        <Alert sx={{margin:"40px"}} variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <h1 className="title">URL SHORTENER</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: "1px solid black",
          borderRadius: "15px",
          width: "500px",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
          padding:'45px'
        }}
      >
        <label htmlFor="urlInput">Enter a valid URL</label>
        <TextField
          inputRef={urlRef}
          label="Enter URL"
          variant="outlined"
          fullWidth
          type="text"
          placeholder="http://..."
        />
        <Button variant="contained" onClick={shortenUrl}>
          shorten
        </Button>
        <div>{<h2>{url?.shortUrl}</h2>}</div>
      </div>
    </div>
  );
}

export default App;
