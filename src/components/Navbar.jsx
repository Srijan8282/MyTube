import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'black', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
           My<span style={{ color: "#7FFFD4" }}>Tube</span>
        </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
