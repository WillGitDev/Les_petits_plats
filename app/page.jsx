import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import DropDownMenu from "@/app/components/DropDownMenu";
import RestaurantCard from "@/app/components/RestaurantCard";
import NumberRecipe from "@/app/components/NumberRecipe";
import data from "@/data/data_recipes.json";
import Banner from "@/app/components/Banner";
import SearchBar from "@/app/components/SearchBar";
import { anton } from "@/app/ui/fonts";

export default function Home() {
    return (
        <>
            <Header>
                <Banner img="/images/recipes/Recette01.jpg" height="600">
                    <h1 className={`${styles.title} ${anton.className}`}>
                        DÉCOUVREZ NOS RECETTES
                        <br /> DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
                    </h1>
                    <SearchBar />
                </Banner>
            </Header>
            <main className={styles.main}>
                <div className={styles.filterContainer}>
                    <div className={styles.filter}>
                        <DropDownMenu title="Ingrédients" />
                        <DropDownMenu title="Appareils" />
                        <DropDownMenu title="Ustensiles" />
                    </div>
                    <NumberRecipe numberRecipe={1} />
                </div>
                <div className={styles.card}>
                    {data.map((element) => (
                        <RestaurantCard
                            key={element.id}
                            img={element.image}
                            name={element.name}
                            description={element.description}
                            ingredients={element.ingredients}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
