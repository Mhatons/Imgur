import { useContext } from "react"
import avatar from "../Image/BIQmKpw_d.png"
import { myContext } from "../myContext"
function PostDetails() {

    const {followers, localUser, setFollowers, url} = useContext(myContext)

    fetch(`${url}/follow_user/${localUser._id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setFollowers(data)
        })

    return (
        <div>
            {
                localUser && <div className="post_details">
                    <div>
                        <img src={`${url}/uploads/${localUser.user_image}`} alt="" className="profile_photo"/>
                    </div>
                    <div>
                        <div className="profile_name">{localUser.user_name}</div>
                        <div className="profile_follow">
                            <p style={{ fontSize: "13px", fontWeight: "650" }}>1 PTS . NEUTRAL</p>
                            <p style={{ fontSize: "13px", fontWeight: "650" }}>No of Followers: <span style={{color: "green", fontSize: "18px", backgroundColor: "#f5f5f5", borderRadius: "50%", padding: "3px 6px"}}>{followers.length}</span></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PostDetails