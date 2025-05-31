
import Header from "@/components/Header";
import InstitutionsMenu from "@/components/InstitutionsMenu";
import Footer from "@/components/Footer";

const Institutions = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Apply hero gradient background to entire page */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10">
        <Header />
        <InstitutionsMenu />
        <Footer />
      </div>
    </div>
  );
};

export default Institutions;
