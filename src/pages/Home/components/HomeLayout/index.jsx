import { Header } from "../Header";
import { Main } from "../Main";
import { Example } from "../Example";
import { Futures } from "../Futures";
import { Tech } from "../Tech";
import { Why } from "../Why";
import { Footer } from "../Footer";

export const HomeLayout = () => {
   return (
      <>
         <Header />
         <Main />
         <Example />
         <Futures />
         <Tech />
         <Why />
         <Footer />
      </>
   )
};