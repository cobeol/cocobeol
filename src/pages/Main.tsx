// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@pages/Main.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";
import { Discord, Roblox } from "@components/Icon";
// import { Container } from "react-bootstrap";
// import ImageCard from "@components/ImageCard";
// import Wrapper from "@components/Wrapper";
// import CardContainer from "@components/CardContainer";
// import ImageText from "@components/ImageText";

export default function Main() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu target="home" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>코코벌</h1>
                            <h2>Created in 2024.05.25</h2>
                        </div>
                    </div>
                </Item>
                <Item className={styles.item}>
                    <div className={styles.userInfo}>
                        <div>
                            <img
                                src={require("@assets/profile.jpg")}
                                alt="profile"
                            />
                            <h1>코벌</h1>
                            <div>
                                <Roblox />
                                <span>cobeo111</span>
                            </div>
                            <div>
                                <Discord />
                                <span>cobeol0111</span>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item className={styles.item}>
                    <div className={styles.history}>
                        <div>
                            <span>( 업데이트 예정.. )</span>
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );
}
