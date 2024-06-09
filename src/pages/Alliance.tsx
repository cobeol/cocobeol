import styles from "@pages/Alliance.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";
import { Discord, Roblox } from "@components/Icon";

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
                            <div className={styles.alley}>
                                <h1>개인</h1>
                                <ul>
                                    <li>
                                        <Roblox />
                                        <span>Royal_Pathfinder </span>
                                        (<Discord />
                                        <span>cp_pie</span>)
                                    </li>
                                    <li>
                                        <Roblox />
                                        <span>dfhlaskdj </span>
                                        (<Discord />
                                        <span>gwaaa89</span>)
                                    </li>
                                    <li>
                                        <Roblox />
                                        <span>qdmmbp </span>
                                        (<Discord />
                                        <span>the_isle</span>)
                                    </li>
                                    {repeat()}
                                </ul>
                            </div>
                            <div
                                className={`${styles.alley} ${styles.guildAlley}`}
                            >
                                <h1>길드</h1>
                                <ul>
                                    <li>
                                        <span>Eon Origin</span> (
                                        <Roblox />
                                        <span>Rhea_No0B</span>, <Discord />
                                        <span>cp_pie</span>)
                                    </li>
                                    <li>
                                        <span>Samsung</span> (
                                        <Roblox />
                                        <span>tarrvos</span>, <Discord />
                                        <span>carnival4219</span>)
                                    </li>
                                    <li>
                                        <span>Sakura Stand</span> (
                                        <Roblox />
                                        <span>123AAAFG</span>, <Discord />
                                        <span>steam64</span>)
                                    </li>
                                </ul>
                            </div>
                            {/* <h1>동맹 페이지</h1>
                            {repeat()} */}
                        </div>
                    </div>
                </Item>
                {/* <Item className={styles.item}>
                    <div className={styles.comment}>
                        <div>
                            <span>( 업데이트 예정.. )</span>
                        </div>
                    </div>
                </Item> */}
            </Container>
        </Wrapper>
    );

    function repeat() {
        const result = [];
        for (let i: number = 0; i < 30; i++) {
            result.push(
                <li>
                    <Roblox />
                    <span>{i} </span>
                    (<Discord />
                    <span>{i}</span>)
                </li>
            );
        }

        return result;
    }
}
