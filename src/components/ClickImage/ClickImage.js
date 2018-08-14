import React from 'react';
import './ClickImage.css';
// import { url } from 'inspector';
const imageArray = [
    require("./images/image0.jpg"),
    require("./images/image1.jpg"),
    require("./images/image2.jpg"),
    require("./images/image3.jpg"),
    require("./images/image4.jpg"),
    require("./images/image5.jpg"),
    require("./images/image6.jpg"),
    require("./images/image7.jpg"),
    require("./images/image8.jpg"),
    require("./images/image9.jpg"),
    require("./images/image10.jpg"),
    require("./images/image11.jpg"),
]

const styles=[
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[0] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[1] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[2] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[3] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[4] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[5] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[6] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[7] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[8] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[9] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[10] + ")"},
{ width: "160px",height: "160px",backgroundImage: "url(" + imageArray[11] + ")"}
];

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
                <div style={styles[this.props.imageNumber]} 
                    className="click-image-div"
                    onClick={() => this.props.clickCB(this.props.imageNumber)}>
                </div>
            </div>
        )
    }
}

export default ClickImage;