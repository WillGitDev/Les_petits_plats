import styles from "./styles.module.css";
import Banner from "@/app/components/Banner";
import SearchBar from "@/app/components/SearchBar";

export default function Header() {
    return (
        <header className={styles.header}>
            <Banner img="/images/recipes/Recette01.jpg" height="600">
                <SearchBar />
            </Banner>
        </header>
    );
}
