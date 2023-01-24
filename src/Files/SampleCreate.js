import { BsFillImageFill } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../myContext"
import { useNavigate } from "react-router-dom"

function SampleCreate() {

    const { setAdModal, postDetails, setPostDetails, category, localUser, url } = useContext(myContext)
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()

    const validate = () => {
        if (postDetails.title === "" || postDetails.post_category_id === "" || postDetails.date === "" || postDetails.excerpt === "" || postDetails.image === "" || postDetails.body === "" || postDetails.user_id === "") {
            setCheck(true)
        }
        else {
            fetch(`${url}/post`, {
                method: "POST",
                body: myform
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
            navigate(-1)
        }

    }


    let myform = new FormData()

    myform.append("title", postDetails.title)
    myform.append("post_category_id", postDetails.post_category_id)
    myform.append("date", postDetails.date)
    myform.append("excerpt", postDetails.excerpt)
    myform.append("image", postDetails.image)
    myform.append("body", postDetails.body)
    myform.append("user_id", localUser._id)

    return (
        <div>
            <div className="postImage_modal">
                <div className="txt">
                </div>
                <div style={{ width: "65%", position: "relative", margin: "auto", paddingTop: "15px" }}>
                    <div className="modal-dialog modal-dialog-centered" style={{ width: "95%" }}>
                        <div className="modal-content">
                            <div>
                                <div className="d-flx post_modal_body">
                                    <div className="adminpost_modal1">
                                        <div>
                                            <center style={{ paddingTop: "2em" }}><h6>Post Details</h6></center>
                                            <div className="admin_title">
                                                <input type="text" value={postDetails.title} className={check && postDetails.title === "" ? ("admin_title2") : null} placeholder=" write title" onChange={(e) => setPostDetails({ ...postDetails, title: e.target.value })} />
                                            </div>

                                            <div className="post_excerpt">
                                                <input type="text" placeholder="excerpt" className={check && postDetails.excerpt === "" ? ("admin_excerpt2") : null} value={postDetails.excerpt} onChange={(e) => setPostDetails({ ...postDetails, excerpt: e.target.value })} />
                                            </div>

                                            <div className="admin_input">
                                                <input type="text" placeholder="user_id" hidden value={localUser._id} />
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "3.5em" }}>
                                                <select value={postDetails.post_category_id} className={check && postDetails.excerpt === "" ? ("admin_category2") : ("admin_post_category")} onChange={(e) => setPostDetails({ ...postDetails, post_category_id: e.target.value })}>
                                                    <option value="">Select Category</option>
                                                    {
                                                        category.length ? (
                                                            category.map((data) => {
                                                                return (
                                                                    <option value={data._id}>{data.post_category_name}</option>
                                                                )
                                                            })
                                                        ) : null
                                                    }
                                                </select>

                                                <div className="admin_post_date">
                                                    <input type="date" value={postDetails.date} style={{ width: "100%" }} className={check && postDetails.date === "" ? ("admin_date2") : null} onChange={(e) => setPostDetails({ ...postDetails, date: e.target.value })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post_modal2">
                                        <div className="modal_phase2">
                                            <span className="admin_modal_image">
                                                <div className="admin_modal_image">
                                                    < BsFillImageFill /> <label For="post_image"> Choose Photo/Video </label>
                                                    <input type="file" id="post_image" name="image" hidden onChange={(e) => setPostDetails({ ...postDetails, image: e.target.files[0] })} />
                                                </div>
                                            </span>

                                            <div className={check && postDetails.body === "" ? ("admin_body2") : ("admin_modal_body")}>
                                                {/* <input  placeholder="Body" value={postDetails.body} onChange={(e) => setPostDetails({ ...postDetails, body: e.target.value })} /> */}
                                                <textarea cols={45} rows={3} placeholder="Give description to your post" style={{ backgroundColor: "black", color: "white", border: "none" }}
                                                    value={postDetails.body} onChange={(e) => setPostDetails({ ...postDetails, body: e.target.value })}
                                                />
                                            </div>


                                            <div className="admin_post_btn">
                                                <button onClick={() => validate()}>Create Post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modalItem-header">
                        <div onClick={() => setAdModal(false)}><IoClose /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SampleCreate