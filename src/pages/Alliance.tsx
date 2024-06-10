import styles from "@pages/Alliance.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";
import { PurpleDiscord, RedRoblox } from "@components/Icon";

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
                            <h1>( 업데이트 예정.. )</h1>
                        </div>
                    </div>
                    {/* <div className={styles.main}>
                        <div>
                            <div className={styles.alley}>
                                <h1>개인</h1>
                                <ul>
                                    <li>
                                        <span className={styles.roblox}>
                                            <RedRoblox />
                                            <span>Royal_Pathfinder </span>
                                        </span>
                                        <span className={styles.discord}>
                                            (<PurpleDiscord />
                                            <span>cp_pie</span>)
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.roblox}>
                                            <RedRoblox />
                                            <span>dfhlaskdj </span>
                                        </span>
                                        <span className={styles.discord}>
                                            (<PurpleDiscord />
                                            <span>gwaaa89</span>)
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.roblox}>
                                            <RedRoblox />
                                            <span>qdmmbp </span>
                                        </span>
                                        <span className={styles.discord}>
                                            (<PurpleDiscord />
                                            <span>the_isle</span>)
                                        </span>
                                    </li>
                                    {repeat()}
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </Item>

                <Item className={styles.item}>
                    <div className={styles.alleyList}>
                        <div>
                            <div className={styles.alley}>
                                <h1>개인</h1>
                                <ul>{repeat()}</ul>
                            </div>
                            {/* <h1>동맹 페이지</h1>
                            {repeat()} */}
                        </div>
                    </div>
                </Item>
                <Item className={styles.item}>
                    <div className={styles.alleyList}>
                        <div>
                            <div
                                className={`${styles.alley} ${styles.guildAlley}`}
                            >
                                <h1>길드</h1>
                                <ul>
                                    <li>
                                        <span>Eon Origin</span> (
                                        <span className={styles.roblox}>
                                            <RedRoblox />
                                            <span>Rhea_No0B</span>
                                        </span>
                                        )
                                    </li>
                                    <li>
                                        <span>Samsung</span> (
                                        <span className={styles.roblox}>
                                            <RedRoblox />
                                            <span>tarrvos</span>
                                        </span>
                                        )
                                    </li>
                                    <li>
                                        <span>Sakura Stand</span> (
                                        <span className={styles.roblox}>
                                            <RedRoblox />
                                            <span>123AAAFG</span>
                                        </span>
                                        )
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
                    <span className={styles.roblox}>
                        <RedRoblox />
                        <span>{i} </span>
                    </span>
                    <span className={styles.discord}>
                        (<PurpleDiscord />
                        <span>{i}</span>)
                    </span>
                </li>
            );
        }

        return result;
    }
}
