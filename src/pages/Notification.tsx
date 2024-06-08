import styles from "@pages/Notification.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";

export default function Notification() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu target="notification" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>공지 페이지</h1>
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );
}
