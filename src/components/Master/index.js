import React from 'react';
import SiteList from 'components/SiteList';
import HelpDialog from './HelpDialog';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';
import './styles.scss';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        };
        this.toggleDialog = this
            .toggleDialog
            .bind(this);
    }

    toggleDialog() {
        this.setState({
            isDialogOpen: !this.state.isDialogOpen
        });
    }

    render() {
        return (
            <div className="Root">
                <AppBar iconElementLeft={<div />} title="Trusted Crypto Sites" iconElementRight={<IconButton><HelpIcon /></IconButton>} onRightIconButtonTouchTap={this.toggleDialog} />
                <div className="main-content">
                    <SiteList toggleDialog={this.toggleDialog} />
                </div>
                <HelpDialog toggleDialog={this.toggleDialog} isOpen={this.state.isDialogOpen} />
            </div>
        );
    }
}

export default Master;
