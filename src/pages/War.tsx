import styles from "@pages/War.module.css";
import Wrapper from "@components/Wrapper";
import { Container, Item } from "@components/Container";
import { SideMenu } from "@components/SideMenu";
import { Cancel, RedRoblox, RightArrow } from "@components/Icon";
import WinRateGraph from "@components/WinRateGraph";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

export default function War() {
    const canvas = useRef(null);
    const [ctx, setCts] = useState(undefined);

    const [isOpen, setIsOpen] = useState(false);

    const [adjective, setAdjective] = useState({
        previous: "Angry",
        current: "Angry",
    });
    const [noun, setNoun] = useState({
        previous: "Angry",
        current: "Angry",
    });

    const [coordinate, setCoordinate] = useState({
        x: 0,
        y: 0,
    });

    const adjectives = [
        "Angry",
        "Awful",
        "Based",
        "Blessed",
        "Bloodless",
        "Burning",
        "Cheery",
        "Chilled",
        "Clever",
        "Conniving",
        "Crimson",
        "Cool",
        "Crying",
        "Cunning",
        "Drowned",
        "Dumb",
        "Foolhardy",
        "Foolish",
        "Eccentric",
        "Ecstatic",
        "Elegant",
        "Fashionable",
        "Flaming",
        "Frozen",
        "Furious",
        "Genius",
        "Goated",
        "Golden",
        "Grimacing",
        "Impudent",
        "Incompetent",
        "Joyous",
        "Kind",
        "Laughing",
        "Mischievous",
        "Platinum",
        "Prideful",
        "Prudent",
        "Quick",
        "Running",
        "Screaming",
        "Shocking",
        "Slothful",
        "Smart",
        "Snarky",
        "Spirited",
        "Spritely",
        "Steadfast",
        "Stupid",
        "Terrific",
        "Vainglorious",
        "Warm",
        "Wayward",
        "Willful",
    ];
    const nouns = [
        "Adret",
        "Brainsucker",
        "Brick",
        "Canor",
        "Capra",
        "Castle",
        "Celestial",
        "Celtor",
        "Church",
        "Crab",
        "Demon",
        "Enforcer",
        "Etrean",
        "Executioner",
        "Felinor",
        "Fence",
        "Fish",
        "Fisherman",
        "Flamecharmer",
        "Frostdrawer",
        "Galebreather",
        "Ganymede",
        "God",
        "Gremor",
        "Guard",
        "Gunslinger",
        "Hangman",
        "Horror",
        "House",
        "Hound",
        "House",
        "Ironsinger",
        "Island",
        "Khan",
        "Lightborn",
        "Lightkeeper",
        "Magician",
        "Megalodaunt",
        "Mountain",
        "Mudskipper",
        "Ocean",
        "Paladin",
        "Rodent",
        "Rogue",
        "Ruffian",
        "Sea",
        "Shadowcaster",
        "Shark",
        "Sky",
        "Squire",
        "Thundercaller",
        "Tree",
        "Thief",
        "Vagabond",
        "Vesperian",
        "Warrior",
        "Wizard",
    ];

    /* 
    1: Etrean Luminant,
    2: Eastern Luminant,
    3: Voidheart (Etrean),
    4: Voidheart (Eastern),
    5: The Depths
    */
    const [currentMap, setCurrentMap] = useState("etrean_luminant");
    const [selectedMap, setSelectedMap] = useState({
        parent: 1,
        children: 1,
    });

    useEffect(() => {
        if (!canvas) return;
        // @ts-ignore
        setCts(canvas.current.getContext("2d"));
    }, [canvas]);

    /* 기본 로딩 */
    useEffect(() => {
        reloadMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ctx]);

    useEffect(() => {
        changeMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedMap]);

    useEffect(() => {
        reloadMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMap]);

    return (
        <Wrapper>
            <Container className={styles.container}>
                <Modal className={styles.modal} isOpen={isOpen}>
                    <div className={styles.header}>
                        <span>서버 이름</span>
                        <button onClick={onCloseBtnClick}>
                            <Cancel />
                        </button>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.adjectives}>
                            {adjectiveList()}
                        </div>
                        <div className={styles.nouns}>{nounList()}</div>
                    </div>
                    <div className={styles.footer}>
                        <span>
                            {adjective.current} {noun.current}
                        </span>
                        <hr />
                        <button onClick={onSubmitBtnClick}>
                            <RightArrow />
                        </button>
                    </div>
                </Modal>

                <Item className={styles.item}>
                    <SideMenu target="war" />
                </Item>
                <Item className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <h1>전쟁 / 갱콜</h1>
                            <div className={styles.mapList}>
                                <div>
                                    <button
                                        className={`surface ${
                                            selectedMap.parent === 1
                                                ? styles.selected
                                                : ""
                                        }`}
                                        onClick={onParentMapClick}
                                    >
                                        <p>Surface</p>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={`voidheart ${
                                            selectedMap.parent === 2
                                                ? styles.selected
                                                : ""
                                        }`}
                                        onClick={onParentMapClick}
                                    >
                                        <p>Voidheart</p>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={`the_depths ${
                                            selectedMap.parent === 3
                                                ? styles.selected
                                                : ""
                                        }`}
                                        onClick={onParentMapClick}
                                    >
                                        <p>The Depths</p>
                                    </button>
                                </div>
                            </div>

                            <hr />

                            <div className={styles.mapList}>
                                <div>
                                    <button
                                        className={`${
                                            selectedMap.parent === 1 ||
                                            selectedMap.parent === 2
                                                ? `etrean_luminant`
                                                : `layer1`
                                        } ${
                                            selectedMap.children === 1
                                                ? styles.selected
                                                : ""
                                        }`}
                                        onClick={onChildrenMapClick}
                                    >
                                        <p>
                                            {selectedMap.parent === 1 ||
                                            selectedMap.parent === 2
                                                ? `Etrean Luminant`
                                                : `Layer 1`}
                                        </p>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={`${
                                            selectedMap.parent === 1 ||
                                            selectedMap.parent === 2
                                                ? `eastern_luminant`
                                                : ``
                                        } ${
                                            selectedMap.children === 2
                                                ? styles.selected
                                                : ""
                                        }`}
                                        onClick={onChildrenMapClick}
                                    >
                                        <p>
                                            {selectedMap.parent === 1 ||
                                            selectedMap.parent === 2
                                                ? `Eastern Luminant`
                                                : ""}
                                        </p>
                                    </button>
                                </div>
                            </div>

                            <hr />

                            <div className={styles.canvasWrapper}>
                                <canvas
                                    ref={canvas}
                                    width={520}
                                    height={345}
                                    onClick={onImageClick}
                                />
                            </div>
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
                            {/* <h1>동맹 페이지</h1>
                            {repeat()} */}
                        </div>
                    </div>
                </Item>
                <Item className={`${styles.item}`}>
                    <div className={styles.enemyList}>
                        <div>
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
                                                    승리<b>1회</b>
                                                    <br />
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
                                                    승리<b>3회</b>
                                                    <br />
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
                                                    승리<b>1회</b>
                                                    <br />
                                                    패배<b>99회</b>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
            </Container>
        </Wrapper>
    );

    function reloadMap() {
        if (!canvas || !ctx) return;

        /* 캔버스 초기화 */
        // @ts-ignore
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // @ts-ignore
        ctx.beginPath();

        const img = new Image();
        img.onload = function () {
            // @ts-ignore
            ctx.drawImage(
                img,
                0,
                0,
                // @ts-ignore
                canvas.current.width,
                // @ts-ignore
                canvas.current.height
            );
        };

        img.src = require(`@assets/${currentMap}.png`);
    }

    function onImageClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        setCoordinate({
            x: event.nativeEvent.offsetX,
            y: event.nativeEvent.offsetY,
        });

        setIsOpen(true);
    }

    function draw() {
        if (!canvas || !ctx) return;

        const server = `${adjective.current} ${noun.current}`;
        // const origin = "Tokyo, JP"       // 생각해보니 도쿄섭에서만 전쟁함 ㅋㅋ
        // const guild = "Test Test Test!";         // 길드명도 딱히..? 차피 갱콜도 가는 사람만 가는데 필요하냐?

        // @ts-ignore
        // const rect = canvas.current.getBoundingClientRect();

        // @ts-ignore
        ctx.beginPath();

        // @ts-ignore
        ctx.arc(coordinate.x, coordinate.y, 4, 0, 2 * Math.PI);
        // @ts-ignore
        ctx.strokeStyle = "#DB0F26";
        // @ts-ignore
        ctx.fillStyle = "#DB0F26";
        // @ts-ignore
        ctx.stroke();
        // @ts-ignore
        ctx.fill();

        // @ts-ignore
        ctx.beginPath();

        // @ts-ignore
        ctx.fillStyle = "#000000";
        // @ts-ignore
        ctx.strokeStyle = "#ffffff";
        // @ts-ignore
        ctx.font = "normal bold 12px Noto Sans KR";
        // @ts-ignore
        ctx.strokeText(
            server,
            coordinate.x - server.length * 2.6,
            coordinate.y - 10
        );
        // @ts-ignore
        ctx.fillText(
            server,
            coordinate.x - server.length * 2.6,
            coordinate.y - 10
        );
    }

    function onParentMapClick(
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) {
        let parent = 1;
        let children = 1;

        const parentMap = event.currentTarget.classList[0];
        switch (parentMap) {
            case "surface":
                parent = 1;
                children = selectedMap.children;
                break;

            case "voidheart":
                parent = 2;
                children = selectedMap.children;
                break;

            case "the_depths":
                parent = 3;
                break;
        }

        setSelectedMap({
            parent: parent,
            children: children,
        });
    }

    function onChildrenMapClick(
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) {
        let children = 1;
        const childrenMap = event.currentTarget.classList[0];

        if (
            childrenMap === "eastern_luminant" ||
            childrenMap === "voidheart_eastern"
        )
            children = 2;

        setSelectedMap({
            ...selectedMap,
            children: children,
        });
    }

    function changeMap() {
        const children = selectedMap.children;

        let map = "";
        switch (selectedMap.parent) {
            case 1:
                map = `${children === 1 ? "etrean" : "eastern"}_luminant`;
                break;

            case 2:
                map = `voidheart_${children === 1 ? "etrean" : "eastern"}`;
                break;

            case 3:
                map = `the_depths`;
                break;
        }

        setCurrentMap(map);
    }

    function onAdjectiveClick(
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) {
        setAdjective({
            previous: adjective.current,
            current: event.currentTarget.className,
        });
    }

    function adjectiveList() {
        const result: any[] = [];
        adjectives.forEach((adj) => {
            result.push(
                <li>
                    <button className={adj} onClick={onAdjectiveClick}>
                        <span>{adj}</span>
                    </button>
                </li>
            );
        });

        return result;
    }

    function onNounClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        setNoun({
            previous: noun.current,
            current: event.currentTarget.className,
        });
    }

    function nounList() {
        const result: any[] = [];
        nouns.forEach((noun) => {
            result.push(
                <li>
                    <button className={noun} onClick={onNounClick}>
                        <span>{noun}</span>
                    </button>
                </li>
            );
        });

        return result;
    }

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

    function onSubmitBtnClick() {
        draw();
        setIsOpen(false);
    }

    function onCloseBtnClick() {
        setAdjective({
            ...adjective,
            current: adjective.previous,
        });

        setNoun({
            ...noun,
            current: noun.previous,
        });

        setIsOpen(false);
    }
}
