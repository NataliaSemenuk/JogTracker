import React, {Component} from 'react';
import bearFaceWhiteImage from '../../images/bearFaceWhite/bear-face.png';
import bearFacePurpleImage from '../../images/bearFacePurple/bearFace.png';
import './Authorization.css';

class Authorization extends Component {
    state = {
        bearImage: bearFaceWhiteImage,
    }
    updateDimensions() {
        if(window.innerWidth < 480) {
          this.setState({ bearImage:  bearFacePurpleImage});
        } else {
            this.setState({ bearImage:  bearFaceWhiteImage});
        }
    };
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    };
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    };
    render() {
        const {bearImage} = this.state;
        return (
            <div className = 'authorizationBox'>
                <div className='authorizationBox__img'>
                    <img src={bearImage}/>
                </div>
                <input type='button' value='Let me in' className='authorizationBox__btn'></input>
            </div>
        );
    }
}
export default Authorization;