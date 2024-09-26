import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Url } from "../types/urlType";
import { useEffect, useState } from "react";
import { getAllUrls } from "../Api/Requests";

const UrlTable = () => {
  const [allUrls, setAllUrls] = useState<Url[]>([]);

  useEffect(() => {
    getAllUrlObj();
  }, []);
  const getAllUrlObj = async () => {
    const res = await getAllUrls();
    setAllUrls(res.data);
  };
  return (
    <Box >
              <h3 className="title">URL History</h3>

      <TableContainer
        sx={{
          margin: "5%",
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <TableCell align="right"></TableCell>
              <TableCell align="right"><strong>Original URL</strong></TableCell>
              <TableCell align="right"><strong>Short URL</strong></TableCell>
              <TableCell align="right"><strong>Date created</strong></TableCell>
              <TableCell align="right"><strong>number Of clicks</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUrls?.map((url: Url, index: number) => (
              <TableRow key={url.urlId}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{url.origUrl}</TableCell>
                <TableCell align="right">{url.shortUrl}</TableCell>
                <TableCell align="right">{new Date(url.date).toLocaleString()}</TableCell>
                <TableCell align="right">{url.clicks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UrlTable;
