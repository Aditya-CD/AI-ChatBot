import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/context";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim()) {
            onSent();
        }
    };

    return (
        <div className="main">
            <div className="nav">
                <p>ChatBot</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello, User. </span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick("Suggest Some Place To Visit In India.")}>
                                <p>Suggest Some Place To Visit In India.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("What is the roadmap for web development?")}>
                                <p>What is the roadmap for web development? </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Suggest some thrilling activities to do on trip.")}>
                                <p>Suggest some thrilling activities to do on trip.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Find the error in the following code.")}>
                                <p>Find the error in the following code.</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                            onKeyDown={handleKeyDown}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? (
                                <img
                                    src={assets.send_icon}
                                    alt=""
                                    onClick={() => onSent()}
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>ChatBot may display inaccurate info, including about people, so double-check its responses.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
