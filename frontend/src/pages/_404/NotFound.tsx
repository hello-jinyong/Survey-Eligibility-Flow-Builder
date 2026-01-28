import { Box, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
      card: {
        borderRadius: 4,
        padding: 6,
        maxWidth: '100%',
        width: "100%",
    },
    title: {
        fontSize: "6rem",
        fontWeight: 800,
        lineHeight: 1,
        mb: 1,
    },
    subtitle: {
        opacity: 0.9,
        mb: 3,
    },
    button: {
        borderRadius: 999,
        px: 3,
    },
};

export default function NotFound() {
    const navigate = useNavigate();

    return (
            <Box sx={styles.card}>
                <Typography sx={styles.title}>404</Typography>
                <Typography variant="h6" sx={styles.subtitle}>
                    Oops. This page doesn't exist.
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={styles.button}
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={styles.button}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </Button>
                </Stack>
            </Box>
    );
}
