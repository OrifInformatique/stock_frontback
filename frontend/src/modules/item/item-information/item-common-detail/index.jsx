import React from "react";
import { useTranslation } from "react-i18next";

// UI elements
import Button from "../../../../ui/buttons";
import Icon from "../../../../ui/icons";
import Image from "../../../../ui/images";
import Pill from "../../../../ui/pills";

const ItemCommonDetail = () => {
    const { t } = useTranslation("itemInformation");

    return (
        <div className="flex flex-wrap border border-primary border-opacity-70 rounded-sm gap-x-4 p-2 my-2">
            {/* Item common image */}
            <Image.ItemCommon className="" src="/images/0307_picture.png" entity="Orif Pomy" itemCommonId={307} />
            <div className="flex flex-col flex-1 justify-start gap-2">
                {/* Edit and delete buttons */}
                <div className="flex justify-start gap-3">
                    <Button.Outlined className="flex-1" variant="warning">
                        <Button.Label className="text-primary text-sm">{t("edit")}</Button.Label>
                        <Button.Icon className="w-8">
                            <Icon.Edit className="text-white h-4" />
                        </Button.Icon>
                    </Button.Outlined>
                    <Button.Outlined className="flex-1" variant="danger">
                        <Button.Label className="text-primary text-sm">{t("delete")}</Button.Label>
                        <Button.Icon className="w-8">
                            <Icon.Delete className="text-white h-4" />
                        </Button.Icon>
                    </Button.Outlined>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                    <Pill>Observation</Pill>
                    <Pill>Ordinateur</Pill>
                    <Pill>Pavé numérique</Pill>
                </div>
                {/* Description */}
                <div className="bg-night bg-opacity-10 rounded-sm p-2">
                    <div className="text-xs text-justify">Pare-feu VPN pour l'accès distant VPN crypté (8 tunnels)  Jusqu'à 8 tunnels VPN simultanés, cryptage IPSec 3DES 168 bits  Débit : WAN vers LAN 11,5 Mbit/s, jusqu'à 2,1 Mbit/s pour 3 DES, Processeur : 200 MHz RISC, 2 MB Flash, 16 MB Ram</div>
                </div>
            </div>
        </div>
    );
}

export default ItemCommonDetail;
