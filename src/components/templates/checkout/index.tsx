import Layout from "@/components/molecules/Layout";
import { OrderReview } from "@/components/organisms/checkout/OrderReview";
import Container from "@material-ui/core/Container";

export const CheckoutTemp = () => {
    return (
        <Layout>
            <Container maxWidth="sm">
                <OrderReview />
            </Container>
        </Layout>
    );
};
