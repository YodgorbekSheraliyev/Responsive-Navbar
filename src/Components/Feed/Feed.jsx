import { Link } from "react-router-dom";
import './feed.css';
import twitter from "../../assets/img/twitter.svg";
import home from '../../assets/img/home.svg';
import explore from '../../assets/img/explore.svg';
import notification from '../../assets/img/notification.svg';
import message from '../../assets/img/message.svg';
import bookmark from '../../assets/img/bookmark.svg';
import list from '../../assets/img/lists.svg';
import profile from '../../assets/img/profile.svg';
import more from '../../assets/img/more.svg';
import search__icon from '../../assets/img/search.svg';
import { useState } from "react";


const Feed = () => {

  const [search, setSearch] = useState('');

  return (
    <main className="feed__wrapper">
      <section className="feed__panel">
        <Link to='/'>
          <img src={twitter} alt="twitter" />
        </Link>
        <ul className="panel__list">
          <li><img src={home} alt="home" /><span className="panel__name active__panel-name">Home</span></li>
          <li><img src={explore} alt="explore" /><span className="panel__name">Explore</span></li>
          <li><img src={notification} alt="notification" /><span className="panel__name">Notifications</span></li>
          <li><img src={message} alt="message" /><span className="panel__name">Messages</span></li>
          <li><img src={bookmark} alt="bookmark" /><span className="panel__name">Bookmarks</span></li>
          <li><img src={list} alt="list" /><span className="panel__name">Lists</span></li>
          <li><img src={profile} alt="profile" /><span className="panel__name">Profile</span></li>
          <li><img src={more} alt="message" /><span className="panel__name">More</span></li>
          <li><button className="panel__btn">Tweet</button></li>
        </ul>
        
      </section>
      <section className="feed__post"></section>
      <section className="feed__settings">
        <input type="search" placeholder="Search Twitter" className="feed__settings-input" value={search} onChange={(e)=>{setSearch(e.target.value)}} /><br/>
        <img src={search__icon} alt="icon" className="search__icon" />
      </section>
    </main>
  );
};

export default Feed;
