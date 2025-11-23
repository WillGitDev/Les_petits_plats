import styles from "./styles.module.css";
import Image from "next/image";
import { anton } from "@/app/ui/fonts";

export default function RestaurantCard() {
    return (
        <article className={styles.article}>
            <Image
                className={styles.img}
                src="/images/recipes/Recette01.jpg"
                alt="Photo d'un plat"
                height={250}
                width={380}
            />
            <div className={styles.contentCard}>
                <h2 className={`${styles.titleCard} ${anton.className}`}>
                    Limonade de coco
                </h2>
                <div className={styles.recipe}>
                    <h3 className={styles.titleContent}>RECETTE</h3>
                    <p className={styles.contentRecipe}>
                        Mettre les glaçons à votre goût dans le blender, Ajouter
                        le lait la crème de coco, le jus de 2 citrons et le
                        sucre ensemble. Mixer jusqu'à obtenir la consistance
                        désirée.
                    </p>
                </div>
                <div className={styles.ingredients}>
                    <h3 className={styles.titleContent}>INGRÉDIENTS</h3>
                    <div className={styles.ingredientsContent}>
                        <div className={styles.ingredientContent}>
                            <p className={styles.ingredient}>Lait de coco</p>
                            <p className={styles.quantity}>400ml</p>
                        </div>
                        <div className={styles.ingredientContent}>
                            <p className={styles.ingredient}>Crème de coco</p>
                            <p className={styles.quantity}>4 cuillères</p>
                        </div>
                        <div className={styles.ingredientContent}>
                            <p className={styles.ingredient}>Glaçons</p>
                            <p className={styles.quantity}>2</p>
                        </div>
                        <div className={styles.ingredientContent}>
                            <p className={styles.ingredient}>Jus de citron</p>
                            <p className={styles.quantity}>2</p>
                        </div>
                        <div className={styles.ingredientContent}>
                            <p className={styles.ingredient}>Sucre</p>
                            <p className={styles.quantity}>20g</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
