import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Url } from "./types/urlType";
import { getAllUrls, shorten } from "./Api/Requests";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UrlTable from "./components/urlTable";
import RedirectForm from "./components/RedirectForm";

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
        setUrl(undefined);
      }
    }
  };

  return (
    <div className="main">
      {error && (
        <Alert sx={{ margin: "40px" }} variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <h1 className="title">URL SHORTENER</h1>
      <div className="url-container">
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
          Shorten
        </Button>
        {url && (
          <Accordion className="url-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h4">{url.shortUrl}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <strong>Clicks:</strong> {url.clicks}
                </li>
                <li>
                  <strong>Date Generated:</strong>{" "}
                  {new Date(url?.date).toLocaleString()}
                </li>
                <li>
                  <strong>Original URL:</strong> {url.origUrl}
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
      <RedirectForm/>
      <UrlTable />
    </div>
  );
}

export default App;
