import React from "react";
import { useTranslation } from "react-i18next";

// UI elements
import Logo from '../../ui/logos';
import Title from '../../ui/titles';
import Link from '../../ui/links';

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="flex w-full items-baseline gap-1 bg-primary py-4 px-2">
            <Logo />
            <Title.App>{t('app-title')}</Title.App>
            <Link.Auth className="ml-auto" to="" />
        </div>
    );
}

export default Header;