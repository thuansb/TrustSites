import React from 'react';

class SiteList extends React.Component {
    render() {
        return (
            <nav className="panel">
                <p className="panel-heading">
                    TRUSTED SITE LIST
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
                    <a className="is-active">all</a>
                    <a>public</a>
                    <a>private</a>
                    <a>sources</a>
                    <a>forks</a>
                </p>
                <a className="panel-block is-active" href="https://myetherwallet.com" target="blank">
                    <span className="panel-icon">
                        <img src="https://www.google.com/s2/favicons?domain=myetherwallet.com" />
                    </span>
                    myetherwallet.com
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fa fa-book"></i>
                    </span>
                    marksheet
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fa fa-book"></i>
                    </span>
                    minireset.css
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fa fa-book"></i>
                    </span>
                    jgthms.github.io
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fa fa-code-fork"></i>
                    </span>
                    daniellowtw/infboard
                </a>
            </nav>
        )
    }
}

export default SiteList;