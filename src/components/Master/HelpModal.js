import React from 'react';
import Modal from 'components/Modal';

function HelpModal(props) {
    return (
        <Modal {...props}>
            <div className="help">
                <div className="help__notation">
                    <div className="help__notation__icon">
                        <img src="red.png" />
                    </div>
                    <div className="help__notation__description">
                        Untrusted site/not in the list
                    </div>
                </div>
                <div className="help__notation">
                    <div className="help__notation__icon">
                        <img src="green.png" />
                    </div>
                    <div className="help__notation__description">
                        Trusted site
                    </div>
                </div>
            </div>
            <a target="blank" href="https://goo.gl/forms/JDKzxWekir3P2Gwm2">Suggest new site to the list</a>
        </Modal>
    );
}

export default HelpModal;