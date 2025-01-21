import React from "react";

// Declinations
import ImageItemCommon from "./ImageItemCommon";
import ImagePill from "./ImagePill";

const Image = ({ src }) => {
    return (
        <img src={src} alt="" />
    );
}

Image.ItemCommon = ImageItemCommon;
Image.Pill = ImagePill;

export {Image, ImageItemCommon, ImagePill}
export default Image;