import { IconType } from "react-icons";
import { FiHeadphones, FiDollarSign, FiDatabase } from "react-icons/fi";
export interface CardData {
    title: string;
    subtitle: string;
    Icon: IconType;
    href: string;
}

export const moreProjectData: CardData[] = [
    {
        title: "Headphone Website",
        subtitle: "React Js,Tailwind",
        Icon: FiHeadphones,
        href: "#",
    },
    {
        title: "Currency Converter",
        subtitle: "HTML,Css, JAVASCRIPT",
        Icon: FiDollarSign,
        href: "#",
    },
    {
        title: "CRUD_RestApi",
        subtitle: "Node Js,Experss Js",
        Icon: FiDatabase,
        href: "#",
    },
];
