import React from "react";
import { TableCell, TableRow, TableHead } from "@mui/material";

const TableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>id</TableCell>
        <TableCell align='right'>name</TableCell>
        <TableCell align='right'>email</TableCell>
        <TableCell align='right'>gender</TableCell>
        <TableCell align='right'>status</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
