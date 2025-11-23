import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import DropDownMenu from "@/app/components/DropDownMenu";
import RestaurantCard from "@/app/components/RestaurantCard";
import NumberRecipe from "@/app/components/NumberRecipe";

export default function Home() {
    return (
        <>
            <Header />
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
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
            </main>
        </>
    );
}
