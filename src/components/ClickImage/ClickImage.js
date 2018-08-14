import React from 'react';
import './ClickImage.css';
// import { url } from 'inspector';
const imageArray = [
    require("./images/200x200.png"),
]

const styles={
    width: "160px",
    height: "160px",
    backgroundImage: "url(" + imageArray[0] + ")"
}

class ClickImage extends React.Component {
    clickCB = null;
    imageNumber = 0;
    render = (props) => {
        // console.log(this.props);
        this.imageNumber = this.props.imageNumber;
        let className = "image-border-div";
        if (this.props.wrong)
            className = "image-border-wrong";
        else if (this.props.disabled)
            className = "image-border-disabled";
        else if (this.props.remaining) 
            className = "image-border-remaining";
        return (
            <div className={className}>
                <div style={styles} 
                    className="click-image-div"
                    onClick={() => this.props.clickCB(this.props.imageNumber)}>
                    {this.props.imageNumber}
                </div>
            </div>
        )
    }
}

export default ClickImage;