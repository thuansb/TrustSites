import React from 'react';
import Dialog from 'material-ui/Dialog';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    dialogContent: {
        width: '90%',
        overflowY: 'auto'
    },

    card: {
        margin: '20px auto'
    }
}

function HelpDialog({ isOpen, toggleDialog }) {

    const actions = [
        <FlatButton
            label="Close"
            primary={true}
            onClick={toggleDialog}
        />
    ];

    return (
        <Dialog
            title='Help'
            contentStyle={styles.dialogContent}
            autoScrollBodyContent
            modal={false}
            open={isOpen}
            onRequestClose={toggleDialog}
            actions={actions}
        >
            <Card style={styles.card}>
                <CardHeader title="How to use?" />
                <CardText>
                    <p>This small extension help to identifying the official crypto site, prevent from phishing attacks.</p>
                    <p>Based on the color of icon we can identify the trusted site</p>
                    <div className="help">
                        <div className="help__notation">
                            <div className="help__notation__icon">
                                <img src="red.png" alt="red square" />
                            </div>
                            <div className="help__notation__description">
                                Untrusted site/not in the list
                            </div>
                        </div>
                        <div className="help__notation">
                            <div className="help__notation__icon">
                                <img src="green.png" alt="green square" />
                            </div>
                            <div className="help__notation__description">
                                Trusted site
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>

            <Card style={styles.card}>
                <CardHeader title="Suggest new site" />
                <CardText>
                    If you know any other sites, please suggest to add new site to the list.
                </CardText>
                <CardActions>
                    <RaisedButton secondary onClick={() => window.open('https://goo.gl/forms/JDKzxWekir3P2Gwm2')} label="add new site"></RaisedButton>
                </CardActions>
            </Card>

            <Card style={styles.card}>
                <CardHeader title="Support me!" />
                <CardText>
                    I love to develop open source, if you see this tool helpful, give me some more FREE time please.
                </CardText>
                <CardActions>
                    <RaisedButton secondary onClick={() => window.open('https://etherscan.io/address/0xEb1d9926341945E28F3880e0F291B230FD92a3b9')} label="ETH" />
                    <RaisedButton secondary onClick={() => window.open('https://neotracker.io/address/AbfXhG5NhrZYKdUWQ2zH4tZ1RyvJhtD9ui')} label="NEO GAS" />
                </CardActions>
            </Card>

            <Card style={styles.card}>
                <CardHeader title="It's open source" />
                <CardText>
                    This project is open source. You also can install it manually from source code instead of download from store.
                </CardText>
                <CardActions>
                    <RaisedButton secondary onClick={() => window.open('https://github.com/thuansb/TrustSites')} label="Source code" />
                </CardActions>
            </Card>
        </Dialog >
    );
}

export default HelpDialog;