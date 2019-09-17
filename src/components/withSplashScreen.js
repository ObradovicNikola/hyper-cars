import React, { Component } from 'react';

import './Splashscreen.css'
import BMW from './splashFolder/BMW'
import AUDI from './splashFolder/AUDI'
import LAMBORGHINI from './splashFolder/LAMBORGHINI'

function LoadingMessage() {
    return (
        <div className="splash-container">
            <div className="splash-screen">
                <div className="container-1">
                    <BMW style={{ background: 'blue' }} />
                </div>
                <div className="container-2">
                    <LAMBORGHINI />
                </div>
                <div className="container-3">
                    <AUDI />
                </div>
            </div>
        </div>
    );
}

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            // try {
            //     await auth0Client.loadSession();
            //     setTimeout(() => {
            //         this.setState({
            //             loading: false,
            //         });
            //     }, 1500)
            // } catch (err) {
            //     console.log(err);
            //     this.setState({
            //         loading: false,
            //     });
            // }
            setTimeout(() => this.setState({ loading: false }), 3500)
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withSplashScreen;