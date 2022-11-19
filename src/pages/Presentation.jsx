import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DepositionCard from "../components/reusable/DepositionCard";
import group from "../assets/img/group.png";
import profile from "../assets/img/profile.png";
import Button from "../components/reusable/Button";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";

import { fb } from "../db/firebase";

const Presentation = () => {

  const depositions = [
    {
      name: "Germano Max",
      text: "Excelente aplicativo web para quem precisa encontrar serviços para festas!! Facilita muito a vida de quem precisa resolver tudo com certa urgência.",
      image: profile
    },
    {
      name: "Jéssica Fernandes",
      text: "Posso dizer com toda certeza, tem muito potencial e pode agregar muitos clientes para nós prestadores de serviço, conforme o aplicativo se tornar mais conhecido.",
      image: profile
    },
    {
      name: "Cacilda Maria",
      text: "Muito bem planejado, vai proporcionar uma boa experiência a nós profissionais, como também aos clientes.",
      image: profile
    },
    {
      name: "Jorge Buffet",
      text: "Nota 10!! Espero apresentar a qualidade do meu buffet para possíveis clientes pela plataforma.",
      image: profile
    }
  ]

  const depCards = depositions.map((dep) => {
    return (
      <SwiperSlide key={dep.name}>
        <DepositionCard name={dep.name} text={dep.text} image={dep.image} />
      </SwiperSlide>
    )
  })

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <>
      <Header />
      <main className="container presentation">

        <section className="introduction">
          <img src={group} alt="Grupo" />
          <div className="intro-content">
            <h3 className="sub-title">PartYou</h3>
            <h1>Seja bem vindo ao PartYou</h1>
            <p>Encontre todo o serviço e suporte necessário para execução de seu evento ou venha fazer parte de nossa equipe de profissionais qualificados.</p>
            <Button
              color="secondary"
              onclick={user.loggedIn ? () => {
                fb.auth.out().then(() => {
                  dispatch(logout())
                  console.log("Logout")
                })
                navigate("/signup")
              } : () => { navigate("/signup") }}
            >Cadastrar</Button>
          </div>
        </section>

        <section className="depositions">
          <h3 className="sub-title">DEPOIMENTOS</h3>
          <h2>O que dizem sobre nós?</h2>
          <div className="slider">
            <Swiper
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false
              }}
              breakpoints={{
                750: {
                  slidesPerView: 2,
                },
                1210: {
                  slidesPerView: 3,
                }
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {depCards}
            </Swiper>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Presentation