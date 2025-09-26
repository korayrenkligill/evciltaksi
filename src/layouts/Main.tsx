import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

type Props = {
  children?: React.ReactNode;
};
const Main = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow flex flex-col">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Main;
