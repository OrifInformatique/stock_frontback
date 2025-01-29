import React from "react";
import { useTranslation } from "react-i18next";

// UI elements
import Button from "../../../../ui/buttons";
import Icon from "../../../../ui/icons";
import Image from "../../../../ui/images";
import Pill from "../../../../ui/pills";

const ItemCommonDetail = ({ data }) => {
    const { t } = useTranslation("itemInformation");

    return (
        <div className="flex flex-col items-center border border-primary border-opacity-70 rounded-sm gap-x-4 p-3 my-2">
            {/* Item common image */}
            <Image.ItemCommon
                src={data.image_path}
                entity={data.entity.name}
                itemCommonId={data.item_common_id}
            />
            <div className="flex flex-col w-full flex-1 gap-2">
                {/* Edit and delete buttons */}
                <div className="flex justify-between gap-3">
                    <Button.Outlined className="flex-1" variant="warning">
                        <Button.Label className="text-primary text-sm">
                            {t("edit")}
                        </Button.Label>
                        <Button.Icon className="w-8">
                            <Icon.Edit className="text-white h-4" />
                        </Button.Icon>
                    </Button.Outlined>
                    <Button.Outlined className="flex-1" variant="danger">
                        <Button.Label className="text-primary text-sm">
                            {t("delete")}
                        </Button.Label>
                        <Button.Icon className="w-8">
                            <Icon.Delete className="text-white h-4" />
                        </Button.Icon>
                    </Button.Outlined>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                    {data.tags && data.tags.map(tag => (
                        <Pill key={tag.item_tag_id}>{tag.name}</Pill>
                    ))}
                </div>
                {/* Description */}
                <div className="bg-night bg-opacity-10 rounded-sm p-2">
                    <div className="text-xs text-justify">
                        {data.description ? data.description : t("noDescription")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCommonDetail;
