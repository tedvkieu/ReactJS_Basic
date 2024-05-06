import videoHomePage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title-1">There's a better way to ask</div>
                <div className="title-2">
                    Get more data - like signups, feedback, and anything else -
                    with forms designed to be refreshingly differen
                </div>

                <div className="title-3">
                    <button>Get started. It's free</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
