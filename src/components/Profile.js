import profileImage from "../images/profile.jpg";
function Profile(props){
    return(
        <section id="profile" className="profile">

         <div className="profile-container">

            <img
             src={profileImage}
             alt="Profile"
             className="profile-image"
            />
            
            <div className="profile-info">
            <h2>PROFILE</h2>
            <h1>NTHATISI LOURONTINA BEFOLE</h1>
            <h3>{props.title}</h3>
            
            <p>
              I am a motivated Software Engineering and Multimedia student with a strong
              interest in web development, Java programming and database systems. I have
              gained practical experience through academic projects involving React.js,
              JavaFX and MySQL. I enjoy working in teams, solving problems and learning
              new technologies. I am eager to apply my technical skills and knowledge in
              a professional environment while continuing to grow as a software developer.
            </p>
            
            <p>Email:befolenthatisi@gmail.com</p>
            <p>Phone: 57589668</p>
            <p>Location: Lesotho</p>

         </div>

         </div>


        </section>
    
    );
}

export default Profile;