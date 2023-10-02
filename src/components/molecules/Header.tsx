import Typography from "@material-ui/core/Typography";
import * as React from "react";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
