import React from 'react';
// import errorImg from '../../../images/404.jpg'
const Error = () => {
    const images = require.context('../../../assets', true);
    return (
        <div className='text-center'>
            <img className='w-100 vh-100 ' src={require('../../../assets/2488756.jpg')} />
            {/* <img className='w-50' src={images('./images/404.jpg')}/> */}
            {/* <img className='w-50 mt-5' src={require.context(images('../../../images/404.jpg'))} /> */}
            {/* <img src={images('./404.jpg').default} alt='My Image' /> */}

        </div>
    );
}

export default Error;
