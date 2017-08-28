import React from 'react';
import SiteList from 'components/SiteList';
import HelpModal from './HelpModal';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';

import './styles.scss';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this
            .toggleModal
            .bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div className="Root">
                <AppBar iconElementLeft={<div />} title="Trusted Crypto Sites" iconElementRight={<IconButton><HelpIcon /></IconButton>} onRightIconButtonTouchTap={this.toggleModal} />
                <div className="main-content">
                    <SiteList toggleModal={this.toggleModal} />
                </div>
                <HelpModal toggleModal={this.toggleModal} isOpen={this.state.isModalOpen} />
            </div>
        );
    }
}

export default Master;
