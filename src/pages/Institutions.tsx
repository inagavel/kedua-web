
import Header from "@/components/Header";
import InstitutionsMenu from "@/components/InstitutionsMenu";
import Footer from "@/components/Footer";

const Institutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="min-h-screen hero-gradient">
        <InstitutionsMenu />
      </div>
      <Footer />
    </div>
  );
};

export default Institutions;
