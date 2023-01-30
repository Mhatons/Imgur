import { IoFilterSharp, IoGridSharp, IoFilmOutline } from "react-icons/io5";
function PostContentHeader() {
    return (
        <div className="post_page_header">
            <div className="d-flx post_page_sub_header">
                <div className="d-flx" style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "15px", gap: "40px" }}>
                    <div>ALL</div>
                    <div>PUBLIC</div>
                    <div>HIDDEN</div>
                </div>
                <div>
                    <div>
                        <div className="d-flx header_newest" style={{ gap: "15px" }}>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "15px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    NEWEST
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">OLDEST</a></li>
                                </ul>
                            </div>
                            <div className="items_header" style={{ color: "#74738F", fontSize: "22px", gap: "10px", cursor: "pointer" }}>
                                <span toggle="tooltip" placement="top" title="Enable Autoplay"><IoFilmOutline /></span>
                                <span toggle="tooltip" placement="top" title="Uniform"><IoGridSharp /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContentHeader