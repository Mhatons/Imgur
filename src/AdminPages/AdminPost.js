import { useContext, useState } from "react"
import AdminNav from "../Admin_Files/AdminNav"
import AdminPosts from "../Admin_Files/AdminPosts"
import PostAdmin from "../Admin_Files/PostAdmin"
import RecentPosts from "../Admin_Files/RecentPosts"
import PostContents from "../Files/PostContents"
import { myContext } from "../myContext"

function AdminPost(){
    const {adModal} = useContext(myContext)
    return(
        <div>
            <div className="admin_post_page">
                <div className="admin_post_page">
                    <AdminNav />
                    <div></div>
                </div>
                {
                    adModal && <div>
                    <PostAdmin />
                </div>
                }
                <div>
                    <AdminPosts />
                </div>
            </div>
        </div>
    )
}

export default AdminPost