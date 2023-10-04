import { Link, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#333333",
        color: "white",
        padding: theme.spacing(6),
    },
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center">
                {"Copyright © "}
                <Link href="https://mui.com/">Your Website</Link>
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </footer>
    );
};
