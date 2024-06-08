import styles from "@pages/Build.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";

export default function Build() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu target="build" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>빌드 공유 페이지</h1>
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
