import React from 'react';
import Modal from 'components/Modal';

function DetailModal({
    currencyInfo,
    ...props
}) {
    return (
        <Modal {...props}>
            <div className="detail__modal">
                <h5 className="title is-5">{currencyInfo && currencyInfo.name}</h5>
                <h6 className="subtitle is-6">{currencyInfo && currencyInfo.code}</h6>
                <ul>
                    {currencyInfo && currencyInfo
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
        </Modal>
    )
}

export default DetailModal;