import React, {Fragment} from 'react';
import './InfoPage.css';
import Header from '../../components/Header/Header';

const InfoPage = () => {
    return (
        <Fragment>
            <Header isHidenFilterIcon={true}/>
            <div className='infoPage-content-wrapper'>
                <div className='infoPage-content'>
                    <h1 className='infoPage-content__title'>info</h1>
                    <p className='infoPage-content__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.</p>
                    <p className='infoPage-content__desc'>It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is 
                    that it has a more-or-less normal distribution of letters, as opposed to using 
                    'Content here, content here', making it look like readable English.</p>
                </div>
            </div>
        </Fragment>
    );
}
export default InfoPage;