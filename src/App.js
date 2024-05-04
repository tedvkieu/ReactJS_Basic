import { Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <div>
                Test Link
                <div>
                    <button>
                        <Link to="/users">Go to user Page</Link>
                    </button>
                    <button>
                        <Link to="/admin">Go to admin Page</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
