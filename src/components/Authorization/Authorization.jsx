import React, {Component} from 'react';
import bearFaceWhiteImage from '../../images/bearFaceWhite/bear-face.png';
import bearFacePurpleImage from '../../images/bearFacePurple/bearFace.png';
import './Authorization.css';
import ApiService from '../../apiService/ApiService';
import { connect } from 'react-redux';

class Authorization extends Component {
    state = {
        bearImage: bearFaceWhiteImage,
    }
    updateDimensions = () => {
        const widthWindow = 480;
        if(window.innerWidth < widthWindow) {
            this.setState({ 
                bearImage:  bearFacePurpleImage,
            });
        } else {
            this.setState({ 
                bearImage:  bearFaceWhiteImage,
            });
        }
    };
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    };
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    };

    authorize = async () => {
        const apiService = new ApiService();
        const {response:{access_token}} = await apiService.getToken();
        console.log(access_token);
        localStorage.setItem('token', JSON.stringify(access_token));
    }

    render() {
        const {bearImage} = this.state;
        return (
            <div className = 'authorizationBox'>
                <div className='authorizationBox__img'>
                    <img src={bearImage}/>
                </div>
                <button className='authorizationBox__btn' onClick={this.authorize}>Let me in</button>
            </div>
        );
    }
}

export default Authorization;