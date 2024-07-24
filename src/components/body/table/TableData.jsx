import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Divider } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#B0D9E7",
        borderRadius: "30px",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
        borderRadius: "30px",
    },
}));

function createData(
    no,
    date,
    name,
    contact,
    brief,
    dmt,
    clientManager,
    followUp,
    calls,
    meetings,
    actions
) {
    return {
        no,
        date,
        name,
        contact,
        brief,
        dmt,
        clientManager,
        followUp,
        calls,
        meetings,
        actions,
    };
}

const rows = [
    createData(
        1,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        2,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        3,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        4,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        5,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        6,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        7,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
    createData(
        8,
        "20 Jul 24",
        "test",
        "test@gmail.com",
        "test",
        "ambal",
        "ambal",
        "...",
        0,
        0
    ),
];

export default function TableData() {
    return (
        <Box
            sx={{
                height: 400, // Adjust height as needed
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                    width: 0,
                    height: 0,
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
            }}
        >
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: "20px 20px 20px 20px",
                    overflowX: "auto", // Enable horizontal scrolling
                    overflowY: "hidden", // Hide vertical scrollbar if not needed
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                        sx={{
                            bgcolor: "#0A0D5F",
                            color: "white",
                            borderRadius: "20px",
                        }}
                    >
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>No</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                Date
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                Name
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                Contact
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                Brief
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                DMT
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                Client Manager
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                FollowUp
                            </TableCell>
                            <TableCell align="left" sx={{ color: "white" }}>
                                Calls
                            </TableCell>
                            <TableCell align="left" sx={{ color: "white" }}>
                                Meetings
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <StyledTableRow
                                key={row.no}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.no}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.date} <br />{" "}
                                    <span style={{ color: "grey" }}>12:20</span>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.contact}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.brief}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.dmt}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.clientManager}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.followUp}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Box>
                                        <Avatar
                                            sx={{
                                                bgcolor: "#FCFC61",
                                                color: "#767676",
                                            }}
                                        >
                                            {row.calls}
                                        </Avatar>
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Box>
                                        <Avatar
                                            sx={{
                                                bgcolor: "#26D85A",
                                                color: "#767676",
                                            }}
                                        >
                                            {row.meetings}
                                        </Avatar>
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Box>
                                        <MoreVertIcon />
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
