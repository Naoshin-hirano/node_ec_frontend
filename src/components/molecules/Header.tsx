import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, Grid, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    container: {
        marginLeft: 88,
        marginRight: 88,
    },
    arrow: {
        marginTop: 5,
    },
}));

export const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="relative">
            <Toolbar>
                <Grid
                    container
                    justifyContent="space-between"
                    className={classes.container}
                    alignItems="center"
                >
                    <Grid item>
                        <Grid
                            container
                            spacing={5}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item>
                                <Typography variant="h6" color="inherit" noWrap>
                                    Start ECApp
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    spacing={2}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Grid item>Home</Grid>
                                    <Grid item>About</Grid>
                                    <Grid item>
                                        <Grid
                                            container
                                            spacing={0}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>Shop</Grid>
                                            <Grid
                                                item
                                                className={classes.arrow}
                                            >
                                                <ArrowDropDownIcon
                                                    onClick={handleClick}
                                                />
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        すべての商品
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        人気アイテム
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        新アイテム
                                                    </MenuItem>
                                                </Menu>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={4} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
