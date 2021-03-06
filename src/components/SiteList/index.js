import React from 'react';
import DetailDialog from './DetailDialog';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import SearchBar from 'components/SearchBar';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const searchOptions = {
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

const SEARCH_TAB_NAME = 'searchResult';
const WALLET_TAB_NAME = 'wallet';
const EXCHANGER_TAB_NAME = 'exchanger';
const CURRENCY_TAB_NAME = 'currency';
const OTHER_TAB_NAME = 'other';

const styles = {
    favIcon: {
        width: 16,
        height: 16,
        marginTop: 16
    },
    list: {
        maxHeight: 420,
        overflow: 'auto'
    }
};

class SiteList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activedTab: WALLET_TAB_NAME,
            isDialogOpen: false,
            searchExpanded: false
        }

        this.searchDebounded = debounce(this.search, 500);
    }

    componentWillMount() {
        // Get domains data from background.js
        chrome.runtime.getBackgroundPage((bg) => {
            this.domainData = bg.domainData;
            this.fuse = new Fuse(bg.searchData, searchOptions);
            this.forceUpdate();
        });        
    }

    changeTab = (e, index, value) => this.setState({ activedTab: value });

    toggleDialog = (site) => this.setState({
        isDialogOpen: !this.state.isDialogOpen,
        currencyInfo: site || this.state.currencyInfo
    });

    search = (searchTerm) => {
        this.domainData.searchResult.sites = this.fuse
            .search(searchTerm)
            .map(rs => rs.item);
        this.forceUpdate();
    }

    handleToggleExpandSearch = (expanded) => {
        this.setState({
            searchExpanded: expanded,
            activedTab: expanded ? SEARCH_TAB_NAME : WALLET_TAB_NAME
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fetchRealFavIcon: true });
        }, 500);
    }

    render() {
        const genRow = (site) => {

            let text;
            if (site.searchCategory) {
                text = `${site.name || site.domain} - ${site.searchCategory}`;
            } else {
                text = site.name || site.domain;
            }

            const shouldOpenDialog =
                this.state.activedTab === 'currency'
                || (site.searchCategory && site.searchCategory === 'currency');

            return (
                <ListItem
                    key={text}
                    onClick={() => shouldOpenDialog
                        ? this.toggleDialog(site)
                        : window.open(site.url || `https://${site.domain}`)
                    }
                    primaryText={text}
                    leftIcon={(
                        <img
                            style={styles.favIcon}
                            src={this.state.fetchRealFavIcon ? `https://www.google.com/s2/favicons?domain=${site.domain || site.url}` : 'default-fav.png'}
                            alt="fav icon"
                        />
                    )}
                />
            );
        }

        return !this.domainData ? <div>Please wait...</div> : (
            <Paper zDepth={1}>
                <Toolbar>
                    {!this.state.searchExpanded && (
                        <ToolbarGroup firstChild>
                            <DropDownMenu value={this.state.activedTab} onChange={this.changeTab}>
                                <MenuItem value={WALLET_TAB_NAME} primaryText="Wallet" />
                                <MenuItem value={EXCHANGER_TAB_NAME} primaryText="Exchanger" />
                                <MenuItem value={CURRENCY_TAB_NAME} primaryText="Currency" />
                                <MenuItem value={OTHER_TAB_NAME} primaryText="Others" />
                            </DropDownMenu>
                        </ToolbarGroup>
                    )}
                    <ToolbarGroup firstChild={this.state.searchExpanded} lastChild>
                        <SearchBar onChange={this.searchDebounded} onToggleExpandSearch={this.handleToggleExpandSearch} />
                    </ToolbarGroup>
                </Toolbar>
                <List
                    style={styles.list}>
                    <Subheader>{this.domainData[this.state.activedTab].name}</Subheader>
                    {this.domainData[this.state.activedTab]
                        .sites
                        .map(genRow)}
                </List>
                <DetailDialog
                    isOpen={this.state.isDialogOpen}
                    toggleDialog={() => this.toggleDialog()}
                    currencyInfo={this.state.currencyInfo} />
            </Paper>
        )
    }
}

export default SiteList;