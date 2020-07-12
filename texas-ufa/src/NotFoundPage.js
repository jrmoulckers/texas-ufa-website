import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h1 className='title-404'>
                <Link to='/'>404: Page not found </Link>
            </h1>
            <h3 className='message-404'>
                <Link to='/'>Click to return to home</Link>
            </h3>

          </div>;
    }
}
export default NotFoundPage;