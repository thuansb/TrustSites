import React from 'react';
import Modal from 'components/Modal';

function DetailModal({
    currencyInfo,
    ...props
}) {
    return (
        <Modal {...props}>
            {currencyInfo && (
                <div className="detail__modal">
                    <h5 className="title is-5">{`${currencyInfo.name} (${currencyInfo.code})`}</h5>
                    <div className="container">
                        <p className="is-size-6 has-text-grey-dark">related links</p>
                        <ul>
                            {currencyInfo
                                .relatedSite
                                .map(site => (
                                    <li>
                                        <img
                                            src={`https://www.google.com/s2/favicons?domain=${site.domain || site.url}`}/> {' '}
                                        <a target="blank" href={site.url || `https://${site.domain}`}>
                                            {site.name || site.domain}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </Modal>
    )
}

export default DetailModal;