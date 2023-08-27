import Menu from "../../components/menu";
import Footer from "../../components/Footer";
import Formulario from "./components/form";

const contacto = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Menu />
      <Formulario />
      <Footer />
    </div>
  );
};
export default contacto;
