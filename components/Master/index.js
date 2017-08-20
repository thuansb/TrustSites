import React from 'react';
import SiteList from '../SiteList';
import './styles.scss';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() { 
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <div className="Root">
                <h5 className="title is-5">Trusted Crypto Site Indicator</h5>
                <div className="main-content">
                    <SiteList/>
                </div>
                <a href="javascript:void(0)" onClick={this.toggleModal}>how to use</a>
                <div className={`modal ${this.state.showModal && 'is-active'}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <div className="help">
                            <div className="help__notation">
                                <div className="help__notation__icon">
                                    <img src="red.png"/>
                                </div>
                                <div className="help__notation__description">
                                    Untrusted site/not in the list
                                </div>
                            </div>
                            <div className="help__notation">
                                <div className="help__notation__icon">
                                    <img src="green.png"/>
                                </div>
                                <div className="help__notation__description">
                                    Trusted site
                                </div>
                            </div>
                        </div>
                        <a target="blank" href="https://goo.gl/forms/JDKzxWekir3P2Gwm2">Suggest new site to the list</a>
                    </div>
                    <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close"></button>
                </div>
            </div>
        )
    }
}

export default Master;