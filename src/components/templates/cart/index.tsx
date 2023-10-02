import Layout from "@/components/molecules/Layout";
import { AddressForm } from "@/components/organisms/cart/AddressForm";
import { PaymentForm } from "@/components/organisms/cart/PaymentForm";
import Container from "@material-ui/core/Container";
import React from "react";

export const CartTemp = () => {
    return (
        <Layout>
            <Container maxWidth="sm">
                <AddressForm />
                <PaymentForm />
            </Container>
        </Layout>
    );
};
