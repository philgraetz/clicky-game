import React from "react";
import Navbar from "./components/Navbar";
import ImageContainer from "./components/ImageContainer";
import Instructions from "./components/Instructions";
import "./App.css";

class App extends React.Component {
    // Initialize state
    state = {
        score: 0,
        topScore: 0,
        message: "Click on an image"
    }

    // Callback from ImageContainer
    // to update display
    scoreUpdate = (obj) => {
        // console.log(obj);
        let score = this.state.score;
        let topScore = this.state.topScore;
        let message = "Bzzzztt! You chose unwisely.";
        if (obj.goodClick) {
            score++;
            if (score > topScore) {
                topScore = score;
            }
            message = "Good Click!"
        }
        if (obj.allClicked) {
            message = "PERFECT SCORE!"
        }
        if (obj.reset) {
            score = 0;
            message = "Click an image"
        }
        this.setState({
            score    : score,
            topScore : topScore,
            message  : message
        });
    }
    
    render = () => (
        <div>
            <Navbar score={this.state.score}
                    topScore={this.state.topScore}>
            </Navbar>
            <Instructions message={this.state.message} />
            <ImageContainer updateCB={this.scoreUpdate} />
        </div>
    )
}

export default App;
