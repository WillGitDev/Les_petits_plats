import "./globals.css";
import Footer from "@/app/components/Footer";
import { manrope } from "@/app/ui/fonts";

export const metadata = {
    title: "Les bon petits plats",
    description: "Découvrez nos recettes du quotidien, simples et délicieuses",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={`${manrope.className} "app"`}>
                <main className="page">{children}</main>

                <Footer />
            </body>
        </html>
    );
}
