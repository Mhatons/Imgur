import Nav3 from "../Files/Nav3"
import { useContext, useState } from "react"
import { BsPlusLg, BsEye, BsFillTrashFill, BsDownload, BsCode } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { myContext } from "../myContext"
import { Link, useNavigate, useParams } from "react-router-dom"

function EditPost() {
    const { id } = useParams()
    const [postEdit, setPostEdit] = useState([])
    const navigate = useNavigate()

    const { localUser, url } = useContext(myContext)

    const [postValue, setPostValue] = useState({ body: "", image: "" })
    const [editBody, setEditBody] = useState(false)

    fetch(`${url}/post/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPostEdit(data)
        })

    function deletePost(id) {
        fetch(`${url}/delete_post/${id}`, {
            method: "get"
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate("/post")
            })
    }

    function updatePost() {
        fetch(`${url}/update_post/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "body": postValue.body,
                "post_category_id": postEdit.post_category_id,
                "user_id": localUser._id,
                "id": postEdit._id,
                "date": postEdit.date,
                "excerpt": postEdit.excerpt,
                "image": postEdit.image
            })
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    const updateForm = new FormData()

    updateForm.append("post_category_id", postEdit.post_category_id)
    updateForm.append("user_id", localUser._id)
    updateForm.append("id", postEdit._id)
    updateForm.append("date", postEdit.date)
    updateForm.append("excerpt", postEdit.excerpt)
    updateForm.append("title", postEdit.title)
    updateForm.append("body", postValue.body)
    updateForm.append("image", postEdit.image)



    return (
        <div>
            <div className="editpost_header">
                <Nav3 />
                <div className="postfinal_banner" style={{ padding: "5em 0em" }}>
                    <div className="post_final1">
                        <div className="pb-3">
                            <h4 style={{ color: "#f5f5f5", paddingLeft: "3.5em" }}>{postEdit.title}</h4>
                        </div>
                        <div className="post_final_img_header">
                            <div className="post_final_img_body">
                                <img src={`${url}/uploads/${postEdit.image}`} alt="" />
                            </div>
                            <div className="post_final_img_inner">
                                <button className="btn btn-secondary">Copy link</button>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">...</button>
                                <div className="dropdown">
                                    <div className="dropdown-menu onePost_drop">
                                        <div style={{ color: "silver" }}>Edit image</div>
                                        <div>Get share links</div>
                                        <div>Download image</div>
                                        <div style={{ color: "red" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete image</div>
                                    </div>
                                </div>
                            </div>
                            <div className="postEdit_body">
                                <input type="text" style={{ fontSize: "17px", fontStyle: "normal", width: "100%", fontWeight: "400", paddingLeft: "10px" }} value={!editBody ? postEdit.body : postValue.body} onChange={(e) => { setPostValue({ ...postValue, body: e.target.value }); setEditBody(true) }} />
                            </div>
                        </div>
                        <div style={{ textAlign: "center", width: "100%", marginTop: "2em", marginBottom: "2em" }}>
                            <button className="rounded-pill postfinal_imgbtn"> <BsPlusLg /> Add image</button>
                            <button onClick={() => updatePost()} className="rounded-pill postfinal_imgbtn"> Update</button>
                        </div>
                    </div>
                    <div className="post_final2">
                        <div>
                            <div className="postfinal_txtlg">
                                POST
                            </div>
                            <div>
                                <Link to={`/one_post/${postEdit._id}`}>
                                    <button className="postfinal_btn1 btn" style={{ backgroundColor: "#34C99D", color: "#f5f5f5", fontWeight: "700" }}>View Post in Gallery</button>
                                </Link>
                            </div>
                            <div style={{ color: "#9398A1", fontSize: "12px", paddingTop: "10px" }}><BsEye /> Your post is currently <span style={{ color: "#019E5B", border: "1px dotted red" }}>Hidden</span></div>
                            <div style={{ color: "#9398A1", fontSize: "14px", fontWeight: "500", paddingTop: "10px" }}>
                                <input type="checkbox" /> <label htmlFor="">Mature (?)</label>
                            </div>
                        </div>

                        <div style={{ padding: "6em 0em" }}>
                            <div className="postfinal_txtlg">
                                ADD TAGS
                            </div>
                            <div>
                                <button className="rounded-pill btn btn-secondary" style={{ fontSize: "14px" }}><BsPlusLg /> Tag</button>
                            </div>
                        </div>

                        <div>
                            <div className="postfinal_txtlg">
                                IMG TOOLS
                            </div>
                            <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                <div className="edit_post_events"><b style={{ fontSize: "16px", marginRight: "22px" }}><BsPlusLg /></b> Add more Images</div>
                                <div className="edit_post_events"><b style={{ fontSize: "18px", marginRight: "20px" }}><BsCode /></b> Emded post</div>
                                <div className="edit_post_events"><b style={{ fontSize: "18px", marginRight: "20px" }}><BsDownload /></b> Download post</div>
                                <div className="edit_post_events" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><b style={{ fontSize: "16px", marginRight: "22px" }}><BsFillTrashFill /></b> Delete post</div>
                            </div>

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content edit_modal_bg">
                                        <div className="modal-header text-light">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Delete image or video</h1>
                                            <button type="button" style={{ color: "white", backgroundColor: "transparent", border: "none", fontSize: "20px" }} data-bs-dismiss="modal" aria-label="Close"><IoClose /></button>
                                        </div>
                                        {/* <div className={value && roleDetails.role === "" ? ("role_input") : ("role_input2")}> */}
                                        <div style={{ color: "white", fontSize: "14px", padding: "1em 2em" }}>
                                            Removing images from this post does not delete the image from your account.
                                        </div>
                                        <div className="edit_post_btn">
                                            <button className="edit_btn_rmv">Remove from post</button>
                                            <button className="edit_btn_del" onClick={() => deletePost(postEdit._id)}>Delete from account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost