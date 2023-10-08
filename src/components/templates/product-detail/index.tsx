import { Footer } from "@/components/molecules/Footer";
import { Header } from "@/components/molecules/Header";
import Layout from "@/components/molecules/Layout";
import { ProductDetail } from "@/components/organisms/product-detail/ProductDetail";
import Container from "@material-ui/core/Container";

export const ProductDetailTemp = () => {
    return (
        <Layout>
            <Header />
            <Container maxWidth="lg">
                <ProductDetail />
            </Container>
            <Footer />
        </Layout>
    );
};
