import React from 'react';
import SiteList from 'components/SiteList';
import HelpModal from './HelpModal';
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
                <div className="main-content">
                    <SiteList toggleModal={this.toggleModal}/>
                </div>
            </div>
        );
    }
}

export default Master;
