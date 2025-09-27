import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import dress from '../assets/esmeralda/dressCodeIcon.svg'
import CountdownCircles from "./CountdownCircles";
import InstagramWall from "./InstagramWall";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import decoracionImagenes from "../assets/esmeralda/decoracionImagenes.svg";
import decoracionDressCode from "../assets/esmeralda/decoracionDressCode.svg";

import DressCodeEsmeralda from "./DressCodeEsmeralda";
import song from '../assets/song.mp3'

const Invitacion = () => {

  const targetDate = new Date("2025-10-05T13:00:00-03:00");

  const colorPrincipal = "#6b4e71";
  const colorSecundario = "#6b4e71";

  useEffect(() => {
    AOS.init({
        duration: 3000, 
        easing: 'ease-in-out',
        once: true,
      });
    
  }, []);



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

     <div
       className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
       style={{ backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1742341160/Fondo_de_Pantalla_Computador_Simple_Beige_18_gyfe4i.png')" }}
     >
        <div data-aos="fade-in">
            <p className="text-2xl mb-5 tracking-widest">Te invito a mis 15</p>
            <h1 className="text-9xl md:text-[10rem] font-brushNames text-[#4e4e4e] z-10 italic">
            Mara
            </h1>

            <div className="flex items-center justify-center py-2 px-4 mt-5">
            <p className="font-bold text-[#4e4e4e] text-2xl tracking-widest">
                0 5 . 1 0 . 2 0 2 5
            </p>
            </div>
        </div>
      </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#6b4e71]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#6b4e71"
              textColor="black"
              valueClassName="text-3xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            hora_inicio="13:00 hs"
            hora_fin="19:00 hs"
            salon="Golf Club Miramar"
            hora_civil="21:00hs"
          />
          <a href="https://maps.app.goo.gl/5MB8NCpquLcEKEdVA?g_st=aw" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-gray-700 my-5 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          <div className="relative bg-white">
            <img
              src={decoracionImagenes}
              alt="Decoración lateral"
              className="hidden md:block absolute -left-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />
            <img
              src={decoracionImagenes}
              alt="Decoración lateral invertida"
              className="hidden md:block absolute -right-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                 width: "30rem" ,
                }}
            />
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1758819529/61b820d5-ff66-403d-900d-ae6ebc6bc68c_uzmtda.jpg",
                    },
                    {
                      index: 2,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1758819529/64bfb38e-5e54-466f-8b55-5acd3ecde08b_zbrviu.jpg",
                    },
                    {
                      index: 3,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1758819529/7c06ff28-fb52-489b-b55c-900e256574d5_j8zlck.jpg",
                    },
                    {
                      index: 4,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1758819552/30f30151-d36c-4f95-ac3b-7fec4b395128_l0mngo.jpg",
                    },
                    {
                      index: 5,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1758819529/ec929d9c-a555-45fe-88f6-b563dd59d8b6_z2qscr.jpg",
                    },
                  ]}
                />
            </section>
          </div>

          <div className="bg-white border-b border-[#6b4e71]">
            <InstagramWall
              userClass="text-[#6b4e71]"
              logoClass="text-[#6b4e71]"
              user="@mr.almada_"
            />
          </div>

          <div className="bg-[#6b4e71] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-[#6b4e71]"
              buttonClass="border-white rounded-full"
              titleCalendar="XV de Mara"
              salon="Golf Club Miramar, Miramar, Provincia de Buenos Aires"
              fechaComienzo="20251005T130000"
              fechaFin="20251005T190000"
            />
          </div>

          <div className="relative bg-white py-10">
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Izq"
              className="hidden md:block absolute -left-40 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
              }}
            />
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Der"
              className="hidden md:block absolute -right-40 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />

            <DressCodeEsmeralda dressCode="Elegante Sport" icon={dress}/>
          </div>

          <DatosBancarios
            claseIcon="text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseContenedor="bg-[#6b4e71] text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-lg"
            background={{ backgroundColor: colorPrincipal }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#9eba8a",
            }}
            claseBotonModal={{
              backgroundColor: "#6b4e71",
              borderColor: "#6b4e71",
            }}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="0000003100065836533762"
            alias=""
            banco="Mercado Pago"
            nombre="Mara Almada"
            claseModal="bg-[#6b4e71]"
            borderModal="border-[#6b4e71]"
            textColor="text-[#6b4e71]"
          />

          <Asistencia
            clase="py-10 bg-white bg-fixed border-b-4 border-[#6b4e71]"
            claseTitle="text-[#6b4e71]"
            claseButton="border-2 border-[#6b4e71] font-semibold hover:bg-[#6b4e71]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSf4sT2pSpB-_xR7pNKJSW0-NLMmwI85v6149LOhmMuln_ITLQ/viewform?usp=dialog"
          />

        <div className="font-eleganteTitle text-4xl bg-white">
          <TextoFinal textoFinal="¡Gracias por venir!" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
