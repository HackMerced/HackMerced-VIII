import Video from '../Assets/landing.mp4';
function MainPage() {
    return (
      <div className="MainPage">
         <video className='Main-video'
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline=""
              src={Video}/>

            <div className="Main-text">
                <h1 className="Main-title">hackmerced viii</h1>
                <p className="Main-subtitle">march 3-5 2023 @ uc merced</p>
                <p className="Main-subtitle2">Join us for the largest hackathon in the San Joaquin Valley.</p>
                <button className="Main-registerButton2">REGISTER NOW</button>
            </div>
      </div>
    );
  }
  
  export default MainPage;