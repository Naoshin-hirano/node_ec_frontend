import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    detailCard: {
        height: 700,
        width: 600,
    },
    cardContent: {
        flexGrow: 1,
    },
    pdtTitle: {
        marginBottom: 10,
        fontWeight: "bold",
    },
    item: {
        marginLeft: 20,
        marginRight: 20,
    },
    description: {
        width: 500,
        marginBottom: 20,
    },
    price: {
        marginBottom: 30,
    },
    number: {
        width: 60,
        height: 100,
    },
    addCart: {
        height: 56,
        width: 180,
    },
    quantity: {
        width: 60,
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ProductDetail = () => {
    const classes = useStyles();

    const [quantity, setQuantity] = useState(1);

    const handleChange = (e: any) => {
        const targetValue: number = e.target.value;
        setQuantity(targetValue);
    };

    const plusQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <React.Fragment>
            <main>
                <Container className={classes.cardGrid}>
                    <Grid container alignItems="center">
                        <Grid item xs={6} className={classes.item}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.detailCard}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={5} className={classes.item}>
                            <Typography color="inherit">
                                SKU: BST-498
                            </Typography>
                            <Typography variant="h3" color="inherit">
                                Shop Item Template
                            </Typography>
                            <Typography
                                variant="h5"
                                color="inherit"
                                className={classes.price}
                            >
                                $40.00
                            </Typography>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={classes.description}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium at dolorem quidem
                                modi. Nam sequi consequatur obcaecati excepturi
                                alias magni, accusamus eius blanditiis delectus
                                ipsam minima ea iste laborum vero?
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <TextField
                                        className={classes.quantity}
                                        label="数量"
                                        value={quantity}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        onClick={plusQuantity}
                                    >
                                        ➕
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={minusQuantity}
                                    >
                                        ➖
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        className={classes.addCart}
                                    >
                                        <ShoppingCartIcon />
                                        カートへ
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.cardGrid}>
                    <Typography variant="h5" className={classes.pdtTitle}>
                        関連のある商品
                    </Typography>
                    <Grid container spacing={4}>
                        {cards.slice(0, 3).map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Heading
                                        </Typography>
                                        <Typography>$18:00</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined">
                                            <ShoppingCartIcon />
                                            カートへ
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};
