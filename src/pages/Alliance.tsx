import styles from "@pages/Alliance.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";

export default function Alliance() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu target="alliance" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>동맹 페이지</h1>
                        </div>
                    </div>
                </Item>
                <Item className={styles.item}>
                    <div className={styles.comment}>
                        <div>
                            <span>( 업데이트 예정.. )</span>
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );
}
