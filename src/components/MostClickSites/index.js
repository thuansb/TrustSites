import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

class MostClickSites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostClicks: []
        }
    }

    static defaultProps = {
        noOfItems: 5
    }

    componentWillMount() {
        chrome.storage.sync.get('MostClickSites', (rs) => {
            if (rs.MostClickSites && rs.MostClickSites.length > 0) {
                const { noOfItems } = this.props;
                const filtered = rs.MostClickSites.sort((s1, s2) => s1.clicks > s2.clicks ? -1 : 1).filter((s, index) => index < noOfItems);
                this.setState({ mostClicks: filtered });
            }   
        });
    }

    render() {
        return ( 
            this.state.mostClicks.length > 0 && <Paper style={ {
                marginTop: 10,
                padding: 5,
                display: 'flex',
                justifyContent: 'space-around'                
              } }>
                {this.state.mostClicks.map(site => (
                    <Chip key={site.url} onClick={() => window.open(`https://${site.url}`)}>
                        <Avatar src={`https://www.google.com/s2/favicons?domain=${site.url}`} />
                        {site.clicks}      
                    </Chip>
                ))}
            </Paper>
        )
    }
}

export default MostClickSites;