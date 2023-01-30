import { useContext, useState } from "react"
import AdminNav from "../Admin_Files/AdminNav"
import { myContext } from "../myContext"

import { IoTrash, IoPencilSharp, IoClose, IoWarningSharp, IoHelpCircle, IoThumbsUp } from "react-icons/io5"

function ManageCategory() {

    const { category, reverseCategory, url } = useContext(myContext)
    const [addCat, setAddCat] = useState("")
    const [value, setValue] = useState(false)

    const [toast, setToast] = useState(false)
    const [message, setMessage] = useState(true)

    const [catName, setCatName] = useState({})

    const [catChanger, setCatChanger] = useState(false)
    const [editCat, setEditCat] = useState("")


    const validate = () => {
        if (addCat === "") {
            setValue(true)
        } else {
            fetch(`${url}/post_category`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "post_category_name": addCat
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
            setAddCat("")
        }
    }

    function removeCategory(id) {
        fetch(`${url}/delete_category/${id}`, {
            method: "get"
        }).then((resp) => resp.json())
            .then((data) => {
                setMessage(false)
            })
    }

    function categoryName(id) {
        fetch(`${url}/one_category/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setCatName(data)
            })
    }

    function updateCategory() {
        if(editCat === ""){
            setValue(true)
        }
        else{
            fetch(`${url}/update_category`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "post_category_name": editCat,
                    "id": catName._id
                })
            }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
        }
        setEditCat("")
    }

    return (
        <div>
            <AdminNav />
            <div className="category_bg">
                <center><h4>Manage Post Category</h4></center>
            </div>
            <center className="category_divide">
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="category_divide_btn">
                    Create Category
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content role_modal_bg">
                            {
                                !catChanger && <>
                                    <div className="modal-header text-light">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Create Category</h1>
                                        <button type="button" style={{ color: "white", backgroundColor: "transparent", border: "none", fontSize: "20px" }} data-bs-dismiss="modal" aria-label="Close"><IoClose /></button>
                                    </div>
                                    <div className={value && addCat === "" ? ("role_input") : ("role_input2")}>
                                        <input placeholder="Enter category name" value={addCat} onChange={(e) => setAddCat(e.target.value)} />
                                    </div>
                                    <div className="admin_post_btn">
                                        <button onClick={() => validate()}>Create</button>
                                    </div>
                                </>
                            }
                            {
                                catChanger && <>
                                    <div className="modal-header text-light">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Category</h1>
                                        <button type="button" style={{ color: "white", backgroundColor: "transparent", border: "none", fontSize: "20px" }} data-bs-dismiss="modal" aria-label="Close"><IoClose /></button>
                                    </div>
                                    <div className={value && addCat === "" ? ("role_input") : ("role_input2")}>
                                        <input placeholder={catName.post_category_name} value={editCat} onChange={(e) => setEditCat(e.target.value)} />
                                    </div>
                                    <div className="admin_post_btn">
                                        <button onClick={() => updateCategory()}>Update</button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </center>

            <div className="category_body">
                <div className="category_table">
                    <table className="table table-striped table-hover table_bg">
                        <thead>
                            <tr>
                                <th scope="col">Post Categories</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        {
                            reverseCategory.length ? (
                                reverseCategory.map((data, i) => {
                                    return (
                                        <tbody key={i}>
                                            <tr>
                                                <td style={{ color: "#f5f5f5" }}>{data.post_category_name}</td>
                                                <td onClick={() => {categoryName(data._id); setCatChanger(true)}}> <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="edit_category">
                                                    <IoPencilSharp />
                                                </button></td>
                                                <td onClick={() => { setToast(true); categoryName(data._id); removeCategory(data._id) }} data-bs-target={`#${data._id}`}><div className="del_role" style={{ width: "5%" }}><IoTrash /></div></td>
                                                {
                                                    toast && <div className="toast_box_body" id={data._id}>
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
                                                                        <div>You're about to delete <span style={{ color: "#12B8BB" }}>"{catName.post_category_name}"</span> from category list.  <span style={{ color: "#f13737", textDecoration: "underline" }}>Note</span>: this action cannot be undone...</div>
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
                                                                {/* <div className="toast_btn">
                                                                    <button onClick={() => setToast(false)} className="btnClose_toast"> Close </button>
                                                                    <button onClick={() => removeCategory(data._id)} className="btnConfirm_toast"> Confirm </button>
                                                                </div> */}
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
            </div >
            d
        
        </div >

    )
}

export default ManageCategory