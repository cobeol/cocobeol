export default function WinRateGraph({ percent }: any) {
    return (
        <div style={{ padding: "10px", width: "60px", height: "60px" }}>
            <div style={{ width: "60px", height: "60px" }}>
                <svg viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#EC5D62"
                        strokeWidth="20"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#5D9CEC"
                        strokeWidth="20"
                        strokeDasharray={`${2 * Math.PI * 90 * (percent / 100)} ${
                            2 * Math.PI * 90 * (1 - (percent / 100))
                        }`}
                        strokeDashoffset={2 * Math.PI * 90 * (1 - (percent / 100))}
                    />
                </svg>
            </div>
        </div>
    );
}
