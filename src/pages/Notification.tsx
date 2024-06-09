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
                        <div className={styles.header}>
                            <h1>공지</h1>
                            <hr />
                        </div>
                        <div className={styles.list}>
                            {/* <div>
                                <div className={styles.postName}>최근 게시글 #1</div>
                                <div className={styles.postInfo}>1</div>
                            </div> 
                            
                            18개.
                            */}
                            <div className={styles.listItem}>
                                <p><b>제목</b></p>
                                <p><b>작성자</b></p>
                                <p><b>작성일</b></p>
                                <p><b>조회수</b></p>
                                <p><b>좋아요</b></p>
                            </div>

                            <hr />

                            <div className={styles.listItem}>
                                <p className={styles.postName}>1</p>
                                <p>3k</p>
                                <p>2k</p>
                                <p>10K</p>
                                <p>10K</p>
                            </div>

                            <hr />

                            <div className={styles.listItem}>
                                <p className={styles.postName}>1</p>
                                <p>3k</p> 
                                <p>2k</p>
                                <p>10K</p>
                                <p>10K</p>
                            </div>

                            <hr />
                        </div>
                        <div className={styles.footer}>
                            <div>
                                <div className={styles.leftArrow}>
                                    <button>
                                        <img
                                            src={
                                                require(`@assets/leftArrow.svg`)
                                                    .default
                                            }
                                            alt="leftArrow"
                                        />
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>1</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>2</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>3</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>4</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>5</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>6</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>7</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>8</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>9</p>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <p>10</p>
                                    </button>
                                </div>
                                <div className={styles.rightArrow}>
                                    <button>
                                        <img
                                            src={
                                                require(`@assets/rightArrow.svg`)
                                                    .default
                                            }
                                            alt="rightArrow"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );
}
