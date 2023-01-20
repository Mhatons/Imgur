// import { BsFillTrashFill, BsPlusLg } from "react-icons/bs"
import { useContext } from "react"
import { myContext } from "../myContext"
function AdminUsers() {

    const { users, setUsers, reverseUsers } = useContext(myContext)

    return (
        <div className="adminPage_users">
            <div>
                <div>
                    <h4 className="recent">Recent Users</h4>
                </div>
                <div className="table-responsive">
                    <table className="table table-light table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reverseUsers.length ? (
                                    reverseUsers.map((data) => {
                                        return (
                                            <tr className="">
                                                <td><b>{data.user_name}</b></td>
                                                <td><i style={{color: "brown"}}>{data.user_email}</i></td>
                                                <td><img src={`http://localhost:4001/uploads/${data.user_image}`} alt="" style={{ width: "25px", borderRadius: "50%" }} /></td>
                                            </tr>
                                        )
                                    })
                                ): null
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminUsers