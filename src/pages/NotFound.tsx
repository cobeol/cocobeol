import styles from "@pages/NotFound.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";

export default function NotFound() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>404 Not Found Error</h1>
                            <h2>존재하지 않는 페이지!!</h2>
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );
}
