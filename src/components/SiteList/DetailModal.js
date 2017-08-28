import React from 'react';
import Modal from 'components/Modal';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const styles = {
    favIcon: {
        width: 16,
        height: 16,
        marginTop: 16
    }
}

function renderListItem(site) {
    const text = site.name || site.domain;
    return (<ListItem
        primaryText={text}
        onClick={() => window.open(site.url || `https://${site.domain}`)}
        leftIcon={
            < img
                style={styles.favIcon}
                src={`https://www.google.com/s2/favicons?domain=${site.domain || site.url}`}
            />
        }
    />
    );
}


function DetailModal({ currencyInfo, ...props }) {
    return (
        <Modal title={currencyInfo && `${currencyInfo.name} (${currencyInfo.code})`} {...props}>
            <List>
                <Subheader>Related sites</Subheader>
                {currencyInfo && currencyInfo
                    .relatedSite
                    .map(site => renderListItem(site))}
            </List>
        </Modal >)
}

export default DetailModal;