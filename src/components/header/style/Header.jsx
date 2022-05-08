import "./header.css"
import zoro from "../../../img/a.jpeg"
export const header = (props) => {
    return (
        <>
            <header>
                <div className="in-box">
                    <div className="header-heading">
                        <a href="/">
                            <p>
                                Instagram
                            </p>
                        </a>
                    </div>
                    <div className="header-search-bar">
                        <input type="text" placeholder="  Search" >
                        </input>
                    </div>
                    <div className="icons-headers">
                        <div className="size-top home">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div className="size-top chat">
                            <i class="fa-brands fa-facebook-messenger"></i>
                        </div>
                        <div className="size-top post">
                            <div className="post-activity">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div className="size-top activate">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="size-top notification">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div className="size-top profile">
                            <div className="circle-box">
                                <img src={zoro} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}