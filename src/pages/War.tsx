import styles from "@pages/War.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";
import { RedRoblox, RedDiscord } from "@components/Icon";
import WinRateGraph from "@components/WinRateGraph";

export default function War() {
    return (
        <Wrapper>
            <Container className={styles.container}>
                <Item className={styles.item}>
                    <SideMenu target="war" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <span>( 업데이트 예정.. )</span>
                        </div>
                    </div>
                </Item>
                <Item className={styles.item}>
                    <div className={styles.enemyList}>
                        <div>
                            <div className={styles.enemy}>
                                <h1>개인</h1>
                                <ul>{repeat()}</ul>
                            </div>
                            <div
                                className={`${styles.enemy} ${styles.guildEnemy}`}
                            >
                                <h1>길드</h1>
                                <ul>
                                    <li>
                                        <div className={styles.title}>
                                            <span>Test 1</span>
                                        </div>
                                        <div className={styles.winRate}>
                                            <div className={styles.graph}>
                                                <WinRateGraph percent={20} />
                                                <strong>20%</strong>
                                            </div>
                                            <div className={styles.content}>
                                                <span>
                                                    승리<b>1회</b><br/>
                                                    패배<b>4회</b>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.title}>
                                            <span>Test 2</span>
                                        </div>
                                        <div className={styles.winRate}>
                                            <div className={styles.graph}>
                                                <WinRateGraph percent={75} />
                                                <strong>75%</strong>
                                            </div>
                                            <div className={styles.content}>
                                                <span>
                                                    승리<b>3회</b><br/>
                                                    패배<b>1회</b>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.title}>
                                            <span>Test 3</span>
                                        </div>
                                        <div className={styles.winRate}>
                                            <div className={styles.graph}>
                                                <WinRateGraph percent={1} />
                                                <strong>1%</strong>
                                            </div>
                                            <div className={styles.content}>
                                                <span>
                                                    승리<b>1회</b><br/>
                                                    패배<b>99회</b>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <h1>동맹 페이지</h1>
                            {repeat()} */}
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );

    function repeat() {
        const result = [];
        for (let i: number = 0; i < 30; i++) {
            result.push(
                <li>
                    <div className={styles.title}>
                        <RedRoblox />
                        <span>{i} </span>
                    </div>
                </li>
            );
        }

        return result;
    }
}
