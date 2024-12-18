import { useParams } from "react-router";

export type Lang = 'en' | 'es';

const useLang = ():Lang => {
    return useParams().lang as Lang;
}

export default useLang;