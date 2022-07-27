import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../api/users";

import {
  Grid,
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Box,
  CircularProgress,
  Pagination,
} from "@mui/material";
import GenderSelect from "../GenderSelect";
import TableHeader from "../TableHeader";

import IUserData from "../../types";

const UsersTable: React.FC = () => {
  const DEFAULT_PAGE_INDEX = 0;
  const DEFAULT_ROWS_INDEX = 4;
  const DEFAULT_GENDER = "All";

  const [rows, setRows] = useState<Array<IUserData>>([]);
  const [pageQty, setPageQty] = useState<number>(DEFAULT_PAGE_INDEX);
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [gender, setGender] = useState<string>(DEFAULT_GENDER);
  const [isLoading, setLoading] = useState<boolean>();

  const navTo = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllUsers().then((data: Array<IUserData>) => {
      setLoading(false);
      setRows(data);
      setPageQty(
        Math.ceil(selectedByGender().length / DEFAULT_ROWS_INDEX) ||
          Math.ceil(data.length / DEFAULT_ROWS_INDEX)
      );
    });
    /* eslint-disable-next-line */
  }, [gender]);

  const selectedByGender = () => {
    return rows.filter((row: IUserData) => {
      if (gender.toLocaleLowerCase() === DEFAULT_GENDER.toLocaleLowerCase()) {
        return row.gender;
      }
      return row.gender === gender.toLocaleLowerCase();
    });
  };

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage - 1);
  };

  const rowClickHandler = (id: string) => {
    navTo(`/Users/${id}/edit`);
  };

  return (
    <Grid
      container
      spacing={5}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        item
        xs={8}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        mt={7}
      >
        <GenderSelect setGender={setGender} gender={gender} />
        <Pagination
          count={pageQty}
          size='small'
          page={page + 1}
          variant='outlined'
          shape='rounded'
          onChange={handleChangePage}
        />
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHeader />
              <TableBody>
                {selectedByGender()
                  .slice(
                    page * DEFAULT_ROWS_INDEX,
                    page * DEFAULT_ROWS_INDEX + DEFAULT_ROWS_INDEX
                  )
                  .map((row: IUserData) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": { backgroundColor: "#1976d2" },
                        cursor: "pointer",
                      }}
                      onClick={() => rowClickHandler(row.id.toString())}
                    >
                      <TableCell component='th' scope='row'>
                        {row.id.toString()}
                      </TableCell>
                      <TableCell align='right'>{row.name}</TableCell>
                      <TableCell align='right'>{row.email}</TableCell>
                      <TableCell align='right'>{row.gender}</TableCell>
                      <TableCell align='right'>{row.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
};

export default UsersTable;
