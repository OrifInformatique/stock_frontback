import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import ImagePill from "./ImagePill";

const ImageItemCommon = ({ className, src, entity, itemCommonId }) => {
    const { t } = useTranslation("itemInformation");

    return (
        <div className="relative">
            <img className={clsx("my-2 max-w-full min-w-48", className)} src={src} alt={t("image") + " " + itemCommonId} />
            <ImagePill>{entity}</ImagePill>
        </div>
    );
}

export default ImageItemCommon;
