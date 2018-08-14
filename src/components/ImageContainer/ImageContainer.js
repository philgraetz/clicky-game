import React from "react";
import "./ImageContainer.css";
import ClickImage from "../ClickImage";

const NUMBER_IMAGES = 12;
const TIMER_SECONDS = 5;

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.updateCB = this.props.updateCB;
        // Initialize the state
        this.state = {
            imageOrder: this.randomOrder(),
            finished  : false,
            wrongImage: -1
        }
        // Initialize these other internal values
        // (Don't render just because these change)
        this.clicked = [];
        for (let i = 0; i < NUMBER_IMAGES; i++)
            this.clicked.push(false);
    }

    // Reset state, etc
    reset = () => {
        // Initialize these other internal values
        // (Don't render just because these change)
        this.clicked = [];
        for (let i = 0; i < NUMBER_IMAGES; i++)
            this.clicked.push(false);

        // Initialize the state
        this.setState({
            imageOrder: this.randomOrder(),
            finished  : false,
            wrongImage: -1
        });
    }

    // Check if all images have been successfully clicked
    allClicked = () => {
        for (let i = 0; i < NUMBER_IMAGES; i++)
            if (!this.clicked[i])
                return false;
        return true;
    }

    // An image was clicked
    clickCB = (imageNumber) => {
        if (this.state.finished)
            return; // Ignore this click

        // console.log("Clicked image " + imageNumber);

        let ok = false;
        let wrongImage = -1;
        let imageOrder = this.state.imageOrder;

        // Have we clicked this one before?
        if (!this.clicked[imageNumber]) {
            this.clicked[imageNumber] = true;
            ok = true;
            imageOrder = this.randomOrder();
        } else {
            wrongImage = imageNumber;
            // console.log("wrongImage " + wrongImage);
        }
        
        let allClicked = this.allClicked();
        let finished = (!ok || allClicked);

        // Update state (and render)
        this.setState({
            imageOrder: imageOrder,
            finished  : finished,
            wrongImage: wrongImage
        })

        // Update the parent's state
        this.updateCB({
            goodClick  : ok,
            allClicked : allClicked,
        });

        // If we're finished, start a timer to refresh the screen
        // with clean values
        if (finished)
            this.startTimer();
    }

    randomOrder = () => {

        let order = [];
        let currentIndex = 0;
        let picked = [];
        for (let i = 0; i < NUMBER_IMAGES; i++) {
            picked.push(false);
        }
        for (let i = 0; i < NUMBER_IMAGES; i++) {
            // Get random number between 1 and number of slots left
            let rand = Math.floor(Math.random()*(NUMBER_IMAGES-i))+1;

            // Count 'rand' slots not yet picked
            let j = 0;
            while (j < rand) {
                if (++currentIndex === NUMBER_IMAGES)
                    currentIndex = 0;
                if (!picked[currentIndex])
                    j++;
            }
            picked[currentIndex] = true;
            order.push(currentIndex);
        }
        return order;
    }

    // Determine if we're displaying image that was wrongly clicked
    isWrongImage = (index) => {
        let isWrong = (index === this.state.wrongImage);
        // console.log("isWrongImage index " + index + " state.wrongImage " + this.state.wrongImage + " isWrong " + isWrong);
        return isWrong;
    }

    // If we've completed, determine if this image is yet to be selected
    isRemaining = (index) => {
        if (this.state.finished && !this.clicked[index])
            return true;
        return false;
    }

    // If we've completed, don't allow click on anything already clicked
    // (Others are disabled above)
    isDisabled = (index) => {
        let disabled = false;
        if (!this.state.finished || !this.clicked[index])
            disabled = false;
        else
            disabled = true;
        // console.log("disabled for " + index + " = " + disabled);
        return disabled;
    }

    // Start a timer to refresh
    startTimer = () => {
        if (this.timerId !== null)
           clearTimeout(this.timerId);
        this.timerId = setTimeout(this.timeoutCB, TIMER_SECONDS*1000);
    }

    // Refresh with all clean values
    timeoutCB = () => {
        this.timerId = null;
        this.reset();
        this.updateCB({reset: true});
        // console.log("reset");
        // console.log(this.state);
    }

    render = (props) => {
        return (
            <div className="container image-container mt-0">
                {
                    this.state.imageOrder.map(i => {
                        return (<ClickImage key={i} 
                                            imageNumber={i} 
                                            clickCB={() => this.clickCB(i)}
                                            wrong={this.isWrongImage(i)}
                                            remaining={this.isRemaining(i)}
                                            disabled={this.isDisabled(i)} />)
                    })
                }
            </div>
        )
    }
}

export default ImageContainer;
