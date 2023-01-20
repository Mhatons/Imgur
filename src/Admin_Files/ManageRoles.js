import { useContext, useState } from "react"
import { myContext } from "../myContext"
import AdminNav from "./AdminNav"
import { IoTrash, IoPencilSharp, IoClose, IoWarningSharp, IoHelpCircle, IoThumbsUp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

function ManageRoles() {
    const { roles, reverseRoles } = useContext(myContext)
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const [value, setValue] = useState(false)

    const [toast, setToast] = useState(false)
    const [message, setMessage] = useState(true)
    const [roleName, setRoleName] = useState({})

    const [changer, setChanger] = useState(false)
    const [getRole, setGetRole] = useState("")

    const [editRole, setEditRole] = useState(false)



    const validate = () => {
        if (role === "") {
            setValue(true)
        }
        else {
            fetch("http://localhost:4001/roles", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "role": role
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
            setRole("")
            navigate("/manage_roles")
        }

    }

    function findRole(id) {
        fetch(`http://localhost:4001/role/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setRoleName(data)
            })
    }

    function deleteRole(id) {
        fetch(`http://localhost:4001/delete_roles/${id}`, {
            method: "get",
        }).then((resp) => resp.json())
            .then((data) => {
                setMessage(false)
            })
    }

    function updateRoles() {
        if (getRole.role === "") {
            setValue(true)
        }
        else {
            fetch("http://localhost:4001/update_roles", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "role": getRole,
                    "id": roleName._id
                })
            }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)

                })
        }
    }

    return (
        <div>
            <div>
                <AdminNav />
                <div className="manage_others_bg">
                    <center><h4 style={{ color: "#f5f5f5" }}>Manage Roles</h4></center>
                </div>
                <center className="manageOthers_devide">
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="createRole_btn">
                        Create Roles
                    </button>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content role_modal_bg">
                                <div className="modal-header text-light">
                                    <h1 onClick={() => setChanger(false)} className="modal-title fs-5" id="staticBackdropLabel"> {!changer ? "Create Role": "Update post"} </h1>
                                    <button type="button" style={{ color: "white", backgroundColor: "transparent", border: "none", fontSize: "20px" }} data-bs-dismiss="modal" aria-label="Close"><IoClose /></button>
                                </div>
                                {
                                    !changer &&
                                    <>
                                        <div className={value && role === "" ? ("role_input") : ("role_input2")}>
                                            <input placeholder="role" value={role} onChange={(e) => setRole(e.target.value)} />
                                        </div>
                                        <div className="admin_post_btn"><button onClick={() => validate()}>Create</button></div>
                                    </>
                                }
                                {
                                    changer &&
                                    <>
                                        <div className={value && role === "" ? ("role_input") : ("role_input2")}>
                                            <input placeholder={roleName.role} value={getRole} onChange={(e) => setGetRole(e.target.value)} />
                                        </div>
                                        <div className="admin_post_btn">
                                            <button onClick={() => updateRoles()}>Update</button>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </center>

                <div className="manageOthers_body">
                    <div className="roles_table">
                        <table className="table table-striped table-hover table_bg">
                            <thead>
                                <tr>
                                    <th scope="col">Roles</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            {
                                reverseRoles.length ? (
                                    reverseRoles.map((data, i) => {
                                        return (
                                            <tbody key={i}>
                                                <tr>
                                                    <td style={{ color: "#f5f5f5" }}>{data.role}</td>
                                                    <td><div onClick={() => {setChanger(true); findRole(data._id)}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="edit_role"><IoPencilSharp /></div></td>
                                                    <td><div onClick={() => { setToast(true); findRole(data._id) }} className="del_role"><IoTrash /></div></td>
                                                    {
                                                        toast && <div className="toast_box_body">
                                                            <center className="toast_box_header">
                                                                <div className="toast_box">
                                                                    <div onClick={() => setToast(false)} className="close_toast">
                                                                        <IoClose />
                                                                    </div>
                                                                    <div className="toast_warn">
                                                                        <span style={{ color: "orange", fontSize: "19px" }}> <IoWarningSharp /> </span>
                                                                        <span style={{ color: "#f5f5f5" }}>Warning</span>
                                                                    </div>
                                                                    {
                                                                        message && <div className="toast_message">
                                                                            <span style={{ color: "#12B8BB", fontSize: "39px" }}><IoHelpCircle /></span>
                                                                            <div>You're about to delete <span style={{ color: "#12B8BB" }}>"{roleName.role}"</span> from Roles list.  <span style={{ color: "#f13737", textDecoration: "underline" }}>Note</span>: this action cannot be undone...</div>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        !message ? (
                                                                            < div className="toast_message">
                                                                                <span style={{ color: "green", fontSize: "29px" }}><IoThumbsUp /></span>
                                                                                <div>Delete operation successful!</div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    <div className="toast_btn">
                                                                        <button onClick={() => setToast(false)} className="btnClose_toast"> Close </button>
                                                                        <button onClick={() => deleteRole(data._id)} className="btnConfirm_toast"> Confirm </button>
                                                                    </div>
                                                                </div>
                                                            </center>
                                                        </div>
                                                    }
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                ) : null
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageRoles