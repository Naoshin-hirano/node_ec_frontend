import { Footer } from "@/components/molecules/Footer";
import Layout from "@/components/molecules/Layout";
import { LoginAuth } from "@/components/organisms/login/LoginAuth";
import Container from "@material-ui/core/Container";

export const LoginTemp = () => {
    return (
        <Layout>
            <Container maxWidth="lg">
                <LoginAuth />
            </Container>
            <Footer />
        </Layout>
    );
};
