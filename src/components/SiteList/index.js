import React from 'react';
import DetailModal from './DetailModal';
import wallet from 'data/wallet';
import exchanger from 'data/exchanger';
import currency from 'data/currency';
import other from 'data/other';

currency.sites = currency.sites.sort((c1, c2) => Number(c1.rank) > Number(c2.rank) ? 1 : -1);
console.log(JSON.stringify(currency))

const domainData = {
    'wallet': wallet,
    'exchanger': exchanger,
    'currency': currency,
    'other': other
}

class SiteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activedTab: 'wallet',
            isModalOpen: false
        };
    }

    changeTab = (tab) => this.setState({activedTab: tab});
    toggleModal = (site) => this.setState({
        isModalOpen: !this.state.isModalOpen,
        currencyInfo: site || this.state.currencyInfo
    });

    render() {
        const genDomainBlock = (site) => {
            return this.state.activedTab === 'currency'
                ? (
                    <a 
                        key={site.name || site.domain}
                        className="panel-block"
                        href="javascript:void(0)" 
                        onClick={() => this.toggleModal(site)}>
                        <span className="panel-icon">
                            <img
                                src={`https://www.google.com/s2/favicons?domain=${site.domain || site.url}`}/>
                        </span>
                        {site.name || site.domain}
                    </a>
                )
                : (
                    <a
                        key={site.name || site.domain}
                        className="panel-block"
                        href={site.url || `https://${site.domain}`}
                        target="blank">
                        <span className="panel-icon">
                            <img
                                src={`https://www.google.com/s2/favicons?domain=${site.domain || site.url}`}/>
                        </span>
                        {site.name || site.domain}
                    </a>
                )
        }

        return (
            <nav className="panel">
                <h3 className="is-title">Trusted Crypto Sites</h3>
                <p className="panel-heading">
                    <span className="icon is-small clickable" onClick={this.props.toggleModal}>
                        <i className="fa fa-question-circle"></i>
                    </span>
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input is-small" type="text" placeholder="search"/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-search"></i>
                        </span>
                    </p>
                </div>
                <p className="panel-tabs">
                    <a
                        onClick={() => this.changeTab('wallet')}
                        className={this.state.activedTab === 'wallet' && 'is-active'}>wallet</a>
                    <a
                        onClick={() => this.changeTab('exchanger')}
                        className={this.state.activedTab === 'exchanger' && 'is-active'}>exchanger</a>
                    <a
                        onClick={() => this.changeTab('currency')}
                        className={this.state.activedTab === 'currency' && 'is-active'}>currencies</a>
                    <a
                        onClick={() => this.changeTab('other')}
                        className={this.state.activedTab === 'other' && 'is-active'}>others</a>
                </p>
                {domainData[this.state.activedTab]
                    .sites
                    .map(genDomainBlock)}
                <DetailModal isOpen={this.state.isModalOpen} toggleModal={() => this.toggleModal()} currencyInfo={this.state.currencyInfo} />
            </nav>
        )
    }
}

export default SiteList;