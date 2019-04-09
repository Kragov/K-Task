import React from "react";

import "./images.css";
import data from "../test/data.json";

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ads: data
        };
    }

    render() {
        return (
            <div className="ads-container">
                <div className="vip-ads-text">VIP объявления</div>
                <div className="images-container">
                    {this.state.ads.ads.map((accountInfo, index) => (
                        <div
                            className="adv"
                            style={{
                                backgroundImage:
                                    "url(" +
                                    `https://content.kufar.by/line_thumbs_2x/58/${
                                        accountInfo.images[0].id
                                    }.jpg` +
                                    ")"
                            }}
                            alt="img"
                            key={index}
                        >
                            <div className="subject">{accountInfo.subject}</div>
                            <div className="place">{`${
                                accountInfo.ad_parameters[
                                    accountInfo.ad_parameters.length - 2
                                ].vl
                            }, ${
                                accountInfo.ad_parameters[
                                    accountInfo.ad_parameters.length - 1
                                ].vl
                            }`}</div>
                            <div className="price">{accountInfo.price_byn + ' р'}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Images;
