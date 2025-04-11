import Aside from '../../Components/Aside/Aside'
import './Profile.css'

function Profile() {
    return (
        <div className="profile-container">
            <Aside />
            <div className="profile-main">
                <div className="profile_data">
                    <img src='/unsplash_WNoLnJo7tS8.png'/>
                    <h1>Hello John Smith!</h1>
                    <div className="profile__left">
                        <h4>@johnsmith</h4>
                        <h3>Joined on 12/01/2021</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
