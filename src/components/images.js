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
                <div className="images-container">
                    {this.state.ads.ads.map((accountInfo, index) => (
                        <img
                            className="image"
                            src={`https://content.kufar.by/line_thumbs_2x/58/${
                                accountInfo.images[0].id
                            }.jpg`}
                            alt="img"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default Images;
