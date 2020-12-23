import React from 'react';
import './style/App.scss';
import Contacts from './components/contact/Contacts';
import Navbar from './components/elements/Navbar';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
function App() {
    return (
        <Provider store={Store}>
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <div className="py-3">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route exact path="/contacts/add" component={AddContact} />
                                <Route exact path="/contacts/edit/:id" component={EditContact} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}
export default App;
