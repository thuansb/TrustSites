import React from 'react';
import DetailModal from './DetailModal';
import wallet from 'data/wallet';
import exchanger from 'data/exchanger';
import currency from 'data/currency';
import other from 'data/other';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import './styles.scss';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

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
            <Paper zDepth={1}>
                  <Tabs>
    <Tab label="Wallet" >
    <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
    </Tab>
    <Tab label="Exchanger" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Currencies"
      data-route="/home"
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>

            </Paper>            
        )
    }
}

export default SiteList;