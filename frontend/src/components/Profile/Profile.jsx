import "./profile.css"

export function Profile (){
    let user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
            <div className="containerdiv">
                <div className="topdiv">
                    <div>
                        <h1>Profile</h1>
                        <img className="user-img" src={user.picture ? user.picture : "https://via.placeholder.com/100x100"} alt="" />
                        <h1 className="user-name">{user.name}</h1>
                        <h2 className="user-mob">{user.email}</h2>
                    </div>
                </div>
                <div className="bottomdiv">
                    <div>
                        Disney+ Hotstar Mobile for ₹ 199/year 
                    </div>
                    <div>UPLOAD FILES</div>
                </div>
            </div>
        </>
    )
}






