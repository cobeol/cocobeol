import styles from "@pages/Trade.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";

export default function Trade() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu target="trade" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>거래 페이지</h1>
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
