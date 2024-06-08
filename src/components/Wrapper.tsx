import "@components/Wrapper.css";

export default function Conatiner({ children }: any) {
    return <div className="wrapper"><div>{children}</div></div>;
}
