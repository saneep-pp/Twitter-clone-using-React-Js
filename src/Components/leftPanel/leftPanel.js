import './leftPanel.scss';
import { NavLink } from 'react-router-dom';
import {twitter,home,explore,search,notifications,messages,bookmarks,twitterblue,profile,more} from './icons';

const LeftPane=()=>{
    return(
        <div className='Left-pane'>
            <div className='container'>
                <header>{twitter}</header>
                <nav>
                <NavLink to="/" exact activeClassName='selected'>
                    <span>{home}Home</span>
                </NavLink>
                <NavLink to="/explore" activeClassName='selected'>
                   <span>{explore} Explore</span> 
                </NavLink>
                <NavLink to="/notifications" activeClassName='selected'>
                    <span>{notifications} Notifications</span>
                </NavLink>
                <NavLink to="/messages" activeClassName='selected'>
                  <span>{messages} Messages</span>  
                </NavLink>
                <NavLink to="/bookmarks"activeClassName='selected'>
                    <span>{bookmarks} Bookmarks</span>
                </NavLink>
                <NavLink to="/lists" activeClassName='selected'>
                   <span>{twitterblue} Lists</span>
                </NavLink>
                <NavLink to="/profile" activeClassName='selected'>
                   <span>{profile} Profile</span> 
                </NavLink>
                <button className='more'>{more}More</button>
                </nav>
                <button className='tweet'>Tweet</button>
                <footer>
                    <button className='account'>
                        <div className='photo'>
                            <img  alt="usr" src=""/>
                        </div>
                        <div>
                            <div className='name'>Saneep</div>
                            <div className='username'>@saneep456</div>

                        </div>
                        <div>

                        </div>
                    </button>
                </footer>
            </div>
        </div>
    )
}
export default LeftPane;