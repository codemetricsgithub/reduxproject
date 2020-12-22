import React from 'react';
import './style/App.scss';
import Contacts from './components/contact/Contacts';
import Navbar from './components/elements/Navbar';
import { Provider, provider } from 'react-redux';
import Store from './Store';
function App() {
    return (
        <Provider store={Store}>
            <div className="App">
                <Navbar />
                <div className="container">
                    <div className="py-3">
                        <Contacts />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default App;
