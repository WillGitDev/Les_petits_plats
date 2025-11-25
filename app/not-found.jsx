import Banner from "@components/Banner";
import notFound from "./notFound.module.css";
import { anton } from "@ui/fonts";

export default function NotFound() {
    return (
        <>
            <header className={notFound.header}>
                <Banner
                    img="/images/recipes/Recette01.jpg"
                    isFullHeight={true}
                    className={notFound.banner}
                >
                    <h1 className={`${notFound.title} ${anton.className}`}>
                        <span className={notFound.partOne}>404 :(</span>
                        <br />
                        <span className={notFound.partTwo}>
                            La page que vous demandez est introuvable
                        </span>
                    </h1>
                </Banner>
            </header>
        </>
    );
}
