"use client"
import {useTranslations} from "use-intl";

export default function Maintenance() {
    const t = useTranslations('Maintenance');
    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h1> {t("text-1")}</h1>
            <p>{t("text-2")}</p>

        </div>
    )
}

