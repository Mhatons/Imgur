import { useEffect } from "react"
import { createContext } from "react"
import { useState } from "react"

export const myContext = createContext()

function PostProvider({ children }) {

    function filterComment(postId) {
        const myComment = comments.filter(({ post_id }) => post_id === postId)
        return myComment
    }
    function filterLikes(postId) {
        const myLikes = likes.filter(({ post_id }) => post_id === postId)
        return myLikes
    }

    function clearItem() {
        localStorage.removeItem("user")
        setLogin(false)
    }


    const [localUser, setlocalUser] = useState("")
    const [sampleForm, setSampleForm] = useState(false)
    const [userChanger, setUserChanger] = useState(false)
    const [post, setPost] = useState([])
    const reverse = [...post].reverse()
    const [followers, setFollowers] = useState([])
    const [usermodal, setUsermodal] = useState(false)
    const [category, setCategory] = useState([])
    const reverseCategory = [...category].reverse()
    const [login, setLogin] = useState(false)
    const [adminLog, setAdminLog] = useState(false)
    const [verify, setVerify] = useState("")
    const [users, setUsers] = useState([])
    const reverseUsers = [...users].reverse() 
    const [roles, setRoles] = useState([])
    const reverseRoles = [...roles].reverse()
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [modal, setModal] = useState(true)
    const [adModal, setAdModal] = useState(false)
    const [oneUser, setOneUser] = useState([])
    const [postImage, setPostImage] = useState("")
    const [roleDetails, setRoleDetails] = useState("")
    const [user_details, setUser_details] = useState(
        { user_email: "", user_name: "", password: "", user_phone: "", confirm_password: "", role_id: "", user_image: "", current_verification: "" })
    const [postDetails, setPostDetails] = useState({
        post_category_id: "", date: "", title: "", excerpt: "", image: "", body: ""
    })

 

    useEffect(() => {

        let myuser = JSON.parse(localStorage.getItem("user"))
        if (myuser) {
            setlocalUser(myuser)
            setLogin(true)
            if (myuser.user_email === "admin@gmail.com") {
                setAdminLog(true)
            }

        }


        fetch("http://localhost:4001/posts")
            .then((resp) => resp.json())
            .then((data) => {
                setPost(data)
            })

        fetch("http://localhost:4001/post_category")
            .then((resp) => resp.json())
            .then((data) => {
                setCategory(data)
            })


        fetch("http://localhost:4001/users")
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data)
            })


        fetch("http://localhost:4001/comments")
            .then((resp) => resp.json())
            .then((data) => { 
                setComments(data)
            })


        fetch("http://localhost:4001/likes")
            .then((resp) => resp.json())
            .then((data) => {
                setLikes(data)
            })

        fetch("http://localhost:4001/roles")
        .then((resp) => resp.json())
        .then((data) => {
            setRoles(data)
        })


    }, [])


    const exportedDate = {
        users,
        setUsers,
        reverseCategory,
        reverseRoles,
        reverseUsers,
        reverse,
        userChanger,
        setUserChanger,
        followers,
        setFollowers,
        roleDetails,
        setRoleDetails,
        usermodal,
        setUsermodal,
        roles,
        setRoles,
        adminLog,
        setAdminLog,
        category,
        setCategory,
        postDetails,
        setPostDetails,
        adModal,
        setAdModal,
        post,
        setPost,
        comments,
        setComments,
        likes,
        setLikes,
        oneUser,
        setOneUser,
        user_details,
        setUser_details,
        verify,
        setVerify,
        filterComment,
        filterLikes,
        login,
        setLogin,
        localUser,
        setlocalUser,
        clearItem,
        modal,
        setModal,
        postImage,
        setPostImage

    }



    // console.log(comments)







    return (
        <myContext.Provider value={exportedDate}>
            {children}
        </myContext.Provider>
    )
}

export default PostProvider