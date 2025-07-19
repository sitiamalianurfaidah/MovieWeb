import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { FavoritesProvider } from "@/contexts/FavoritesContext"; // Import context-nya

export default function App({ Component, pageProps }) {
  return (
    <FavoritesProvider> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavoritesProvider>
  );
}
