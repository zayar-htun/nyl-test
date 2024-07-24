import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";

export default function Header() {
    return (
        <Box>
            <Box
                sx={{
                    mx: 4,
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton aria-label="delete">
                        <SearchIcon />
                    </IconButton>
                    <Box
                        sx={{
                            ml: 0.5,
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "rgba(128, 128, 128, 0.5)",
                            p: 1,
                            borderRadius: "10px",
                        }}
                    >
                        <FilterFramesIcon sx={{ color: "#747474" }} />
                        <Typography sx={{ color: "#747474" }}>K</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                            src="/flag.svg"
                            style={{
                                width: "40px",
                                height: "32px",
                                marginRight: 2,
                            }}
                            alt=""
                        />
                        <Badge badgeContent={4} color="error" sx={{ mx: 2 }}>
                            <NotificationsIcon
                                color="action"
                                sx={{ width: "32px", height: "32px" }}
                            />
                        </Badge>
                        <IconButton aria-label="delete">
                            <GroupIcon
                                sx={{ width: "32px", height: "32px", mr: 2 }}
                            />
                        </IconButton>
                        <Avatar>J</Avatar>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
