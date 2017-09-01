import React from 'react';
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton'

const styles = {
    favIcon: {
        width: 16,
        height: 16,
        marginTop: 16
    },

    dialogContent: {
        width: '90%',
        overflowY: 'auto'
    }
}

function renderListItem(site) {
    const text = site.name || site.domain;
    return (<ListItem
        key={text}
        primaryText={text}
        onClick={() => window.open(site.url || `https://${site.domain}`)}
        leftIcon={
            <img
                style={styles.favIcon}
                src={`https://www.google.com/s2/favicons?domain=${site.domain || site.url}`}
                alt="fav icon"
            />
        }
    />
    );
}

function DetailDialog({ currencyInfo, isOpen, toggleDialog }) {

    const actions = [
        <FlatButton label="Close" primary onClick={toggleDialog} />
    ];

    return (
        <Dialog
            title={currencyInfo && `${currencyInfo.name} (${currencyInfo.code})`}
            open={isOpen}
            onRequestClose={toggleDialog}
            modal={false}
            contentStyle={styles.dialogContent}
            autoScrollBodyContent
            actions={actions}
        >
            <List>
                <Subheader>Related sites</Subheader>
                {currencyInfo && currencyInfo
                    .relatedSite
                    .map(site => renderListItem(site))}
            </List>
        </Dialog >)
}

export default DetailDialog;