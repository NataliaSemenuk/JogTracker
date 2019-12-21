import React, {Component} from 'react';
import bearFaceWhiteImage from '../../images/bearFaceWhite/bear-face.png';
import bearFacePurpleImage from '../../images/bearFacePurple/bearFace.png';
import './Authorization.css';
import ApiService from '../../apiService/ApiService';
import {Redirect} from 'react-router-dom';

class Authorization extends Component {
    state = {
        bearImage: bearFaceWhiteImage,
        isRedirect: false,
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
        this.setState({
            isRedirect: true,
        })
        localStorage.setItem('token', JSON.stringify(access_token));
        return access_token;
        
    }

    render() {
        const {bearImage, isRedirect} = this.state;
        if(isRedirect) {
            return <Redirect to = '/jogs'/>
        } else { 
            return (
                <div className = 'authorizationBox'>
                    <div className='authorizationBox__img'>
                        <img src={bearImage} alt='Bear'/>
                    </div>
                    <button className='authorizationBox__btn' onClick={this.authorize}>Let me in</button>
                </div>
            );
        }
    }
}

export default Authorization;