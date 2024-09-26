import { Alert, TextField, Button, Box } from "@mui/material";
import { redirectToOrig, shorten } from "../Api/Requests";
import { useState, useRef } from "react";
import { Url } from "../types/urlType";

const RedirectForm = () => {
  const [error, setError] = useState<string | boolean>(false);
  const [shortUrl, setShortUrl] = useState<string>("http://shortUrl.com");
  const redirect = async () => {
    try {
      const urlArr = shortUrl.split("/");
      const res = await redirectToOrig(urlArr[urlArr.length - 1]);
      const { url } = res.data;
      if (url) {
        const confirmation = window.confirm(`Redirecting to: ${url}. Proceed?`);
        if (confirmation) {
          window.location.href = url;
        }
      }
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
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
          Redirect
        </Button>
      </Box>{" "}
    </Box>
  );
};

export default RedirectForm;
