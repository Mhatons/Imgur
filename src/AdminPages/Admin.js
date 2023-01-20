import AdminBody from "../Admin_Files/AdminBody"
import AdminUsers from "../Admin_Files/AdminUsers"
import RecentPosts from "../Admin_Files/RecentPosts"

function Admin() {
    return (
        <div>
            <div>
                <AdminBody />
                <div className="admin_sub">
                    <div className="d-flex" style={{ width: "90%", margin: "auto", justifyContent: "space-between", gap: "1.5em" }}>
                        <div className="admin_posts_recent">
                            <RecentPosts />
                        </div>
                        <div  className="admin_users_recent">
                            <AdminUsers />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin