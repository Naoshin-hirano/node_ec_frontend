import { Header } from "@/components/molecules/Header";
import Layout from "@/components/molecules/Layout";
import { ProductList } from "@/components/organisms/product-list/ProdectList";
import Container from "@material-ui/core/Container";

export const ProductListTemp = () => {
    return (
        <Layout>
            <Header />
            <Container maxWidth="md">
                <ProductList />
            </Container>
        </Layout>
    );
};
