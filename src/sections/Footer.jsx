import React from 'react';
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container flex flex-col items-center">
                <div>
                    {socialImgs.map((img) => (
                        <div>
                            <a className="icon flex" target="_blank" href={img.url} key={img.url}>
                                <img src={img.imgPath} />
                                <p className="px-2">{img.name}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;