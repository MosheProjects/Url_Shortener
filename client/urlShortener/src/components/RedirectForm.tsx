import { Alert, TextField, Button, Box } from "@mui/material";
import { redirectToOrig, shorten } from "../Api/Requests";
import { useState, useRef } from "react";
import { Url } from "../types/urlType";

const RedirectForm = () => {
  const [url, setUrl] = useState<Url | string>();
  const [error, setError] = useState<string | boolean>(false);
  const [shortUrl, setShortUrl] = useState<string>("http://shortUrl.com");
  const redirect = async () => {
    try {
      const urlArr = shortUrl.split("/");
      console.log(urlArr[urlArr.length - 1]);

      const res = await redirectToOrig(urlArr[urlArr.length - 1]);
      setUrl(res.data);
      setError(false);
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
      setUrl(undefined);
    }
  };

  return (
    <Box className="main">
      {error && (
        <Alert sx={{ margin: "40px" }} variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <h1 className="title">REDIRECT</h1>
      <Box className="url-container">
        <label htmlFor="urlInput">Enter a valid URL</label>
        <TextField
          onChange={(e) => setShortUrl(e.target.value)}
          label="Enter URL"
          variant="outlined"
          fullWidth
          type="text"
          value={shortUrl}
          placeholder="http://shortUrl.com..."
        />
        <Button variant="contained" onClick={redirect}>
          Shorten
        </Button>
      </Box>{" "}
      <h2>{url?.toString()}</h2>
    </Box>
  );
};

export default RedirectForm;
