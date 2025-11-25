import Image from "next/image";
import styles from "./styles.module.css";
import { anton } from "@/app/ui/fonts";

/**
 * Composant Banner.
 * Affiche une image de fond avec un contenu surperposé(falcutatif).
 *
 * @typedef {Object} BannerProps
 * @property {string} img - Chemin de l'image de fond.
 * @property {number} [height=180] - Hauteur de la bannière en pixels.
 * @property {boolean} isFullHeight - Mettre une valeur à true ignore le paramètre hauteur et la fixe à 100%.
 * @property {React.ReactNode} [children] - Contenu affiché par-dessus la bannière.
 *
 * @param {BannerProps} props - Propriétés du composant Banner.
 * @returns {JSX.Element} Élément React représentant la bannière.
 */
export default function Banner({
    img,
    height = 130,
    isFullHeight = false,
    children,
}) {
    return (
        <div
            className={styles.banner}
            style={{
                "--header-height": isFullHeight ? "100%" : `${height}px`,
            }}
        >
            <Image
                className={styles.img}
                src={img}
                alt="Image d'un plat"
                fill
                sizes="100vw"
                priority
            />
            <div className={styles.logo}>
                <p className={`${styles.contentLogo} ${anton.className}`}>
                    LES PETITS PLATS
                </p>
                <div className={styles.circleOne}>
                    <div className={styles.circleTwo}></div>
                </div>
            </div>
            <div className={styles.containerChildren}>{children}</div>
        </div>
    );
}
