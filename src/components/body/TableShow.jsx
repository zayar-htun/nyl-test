import {
    Box,
    Card,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import DateRangeIcon from "@mui/icons-material/DateRange";
import TableData from "./table/TableData";
import TablePegi from "./table/TablePegi";

export default function TableShow() {
    const currencies = [
        {
            value: "USD",
            label: "$",
        },
        {
            value: "EUR",
            label: "€",
        },
        {
            value: "BTC",
            label: "฿",
        },
        {
            value: "JPY",
            label: "¥",
        },
        {
            value: "OK",
            label: " ",
        },
    ];
    return (
        <Box>
            <Card sx={{ m: 4, p: 2, borderRadius: "10px" }}>
                <Typography
                    sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    All Client
                </Typography>
                <Box
                    sx={{ width: "110px", height: "2px", bgcolor: "black" }}
                ></Box>
                <Divider />

                <Box
                    sx={{
                        mt: 2,
                        display: { xs: 'block', sm: 'flex' },
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4.5}>
                            {" "}
                            <FormControl
                                sx={{ m: 1, width: "25ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Start Date
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-Start Date"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle Start Date visibility"
                                                edge="end"
                                            >
                                                <DateRangeIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Start Date"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4.5}>
                            <FormControl
                                sx={{ m: 1, width: "25ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    End Date
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-End Date"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle End Date visibility"
                                                edge="end"
                                            >
                                                <DateRangeIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="End Date"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}></Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={6} md={3}></Grid>
                        <Grid item xs={12} sm={6} md={4.5}>
                            {" "}
                            <TextField
                                sx={{ minWidth: "230px" }}
                                id="outlined-select-currency"
                                select
                                label="Owner"
                                defaultValue="OK"
                                // helperText="Please select owner"
                            >
                                {currencies.map(option => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4.5}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    placeholder="search"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                    label=""
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <FormControl
                                sx={{ m: 1, width: "25ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Start Date
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-Start Date"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle Start Date visibility"
                                                edge="end"
                                            >
                                                <DateRangeIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Start Date"
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl
                                sx={{ m: 1, width: "25ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    End Date
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-End Date"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle End Date visibility"
                                                edge="end"
                                            >
                                                <DateRangeIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="End Date"
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <TextField
                                sx={{ minWidth: "230px" }}
                                id="outlined-select-currency"
                                select
                                label="Owner"
                                defaultValue="OK"
                                // helperText="Please select owner"
                            >
                                {currencies.map(option => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <Box>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    placeholder="search"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                    label=""
                                />
                            </FormControl>
                        </Box>
                    </Box> */}
                </Box>

                <Box sx={{ mt: 4 }}>
                    <TableData />
                </Box>
                <Box sx={{ mt: 1 }}>
                    <TablePegi />
                </Box>
            </Card>
        </Box>
    );
}
