import React from 'react';
import DetailModal from './DetailModal';
import wallet from 'data/wallet';
import exchanger from 'data/exchanger';
import currency from 'data/currency';
import other from 'data/other';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';
import './styles.scss';

currency.sites = currency.sites.sort((c1, c2) => Number(c1.rank) > Number(c2.rank) ? 1 : -1);

const domainData = {
    'wallet': wallet,
    'exchanger': exchanger,
    'currency': currency,
    'other': other
};

const options = {
    shouldSort: true,
    includeScore: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "domain",
        "url",
        "name",
        "code",
        "keywords",
        "props.country",
        "props.type",
        "props.pairs",
        "props.desc",
        "props.walletType",
        "relatedSite.name",
        "relatedSite.url"
  ]
};

let searchData = [];
Object.keys(domainData).forEach((key) => {
    searchData = searchData.concat(
        domainData[key].sites.map(site => {
            site.searchCategory = key;
            return site;  
        })
    );
});

const fuse = new Fuse(searchData, options);

class SiteList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activedTab: 'wallet',
            isModalOpen: false
        }

        this.searchDebounded = debounce(this.search, 500);
    }
    
    componentWillMount() {
        chrome.storage.sync.get('SiteListState', (data) => {
            data.SiteListState && this.setState(data.SiteListState)
        });
    }

    changeTab = (tab) => this.setState({activedTab: tab});
    toggleModal = (site) => this.setState({
        isModalOpen: !this.state.isModalOpen,
        currencyInfo: site || this.state.currencyInfo
    });

    search = (e) => {
        const searchTerm = e.target.value;
        domainData.searchResult = { name: 'Search Result', sites: [] }; 
        domainData.searchResult.sites = fuse.search(searchTerm).map(rs => rs.item);    
        this.setState({ activedTab: 'searchResult' });
    }

    handleSearch = (e) => {
        e.persist();
        this.searchDebounded(e);
    }

    render() {
        chrome.storage.sync.set({'SiteListState': this.state});

        const genDomainBlock = (site) => {
            return (this.state.activedTab === 'currency' || (site.searchCategory && site.searchCategory === 'currency'))
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
                        {site.searchCategory && ` - ${site.searchCategory}`}
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
                        {site.searchCategory && ` - ${site.searchCategory}`}
                    </a>
                )
        }

        return (
            <nav className="panel">
                <p className="panel-heading">
                    <h3 className="is-title">Trusted Crypto Sites</h3>
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input onChange={this.handleSearch} className="input is-small" type="text" placeholder="search" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-search"></i>
                        </span>
                    </p>
                    <span className="icon is-small is-clickable" onClick={this.props.toggleModal}>
                        <i className="fa fa-question-circle"></i>
                    </span>
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