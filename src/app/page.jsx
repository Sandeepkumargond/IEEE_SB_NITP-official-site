import Navbar from "./components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* move your original page JSX here (hero, sections, etc.) */}
        <div className="container mx-auto py-16">
          {/* ...existing homepage content... */}
        </div>
      </main>
      <Footer />
    </>
  );
}
