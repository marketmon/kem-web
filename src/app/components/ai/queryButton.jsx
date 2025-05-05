
export default function AIButton(props) {

    const {
        setIsAIOn,
        isAiOn
    } = props

    return (
        <div>
            <button
                title="AI Enabled Knowledge Discovery"
                className="appleGlowBtn"
                onClick={() => { setIsAIOn((val) => !val) }}
            >
                <span>AI</span>
            </button>
        </div>
    );
}
