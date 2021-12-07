import React from "react";
import styles from "./AboutUs.module.scss";
import { ExpandableDescriptionProps } from "../../components/ExpandableDescription/index";
import ExpandableDescription from "../../components/ExpandableDescription/index";

const sections: ExpandableDescriptionProps[] = [
  {
    title: "¿Quiénes somos?",
    description: [
      "Somos una compañía que cree en la teoría de que la música es para todos, sin importar tú edad, género, etnia u orientación. Somos nuevos en la ciudad de Culiacán, tenemos algo nunca antes visto, te otorgamos un espacio seguro para ti y tus gustos.",
      "Buscamos envolverte con la música y que te dejes llevar por tus emociones, creando personas libres, que puedan expresar sus intereses y aficiones, nuestra meta es crear un ambiente positivo y divertido sin límites musicales en donde tu eres nuestro principal interés, brindando confianza y entretenimiento.",
      "Queremos que cuando entres a nuestra tienda, vayamos juntos a un viaje a través de la historia de la música y es algo que solo vas a encontrar en Band 8 “Música que cura”.",
    ],
  },
  {
    title: "Misión",
    description: [
      "Transmitir seguridad al cliente creando una experiencia placentera donde pueda expresar sus sentimientos y gustos brindándoles el respeto, la confianza, empatía y equidad que se merecen, dándoles un trabajo puntual y bien hecho.",
    ],
  },
  {
    title: "Visión",
    description: [
      "Poder ser reconocidos como una empresa innovadora en culiacán , Sinaloa dedicada a la nostalgia de los discos y vinilos entre otras cosas más , queremos que nuestra reputación sea de un buen trabajo y servicio a nuestros clientes .",
    ],
  },
  {
    title: "Valores",
    description: [
      "Nuestros valores definen el carácter de nuestra compañía, expresan quiénes somos, cómo nos comportamos, y en qué creemos",
      "Respeto",
      "Confianza",
      "Equidad",
      "Empatía",
      "Puntualidad",
    ],
  },
];

const AboutUs = () => {
  return (
    <section className={styles["about-us"]}>
      {sections.map((section, idx) => (
        <ExpandableDescription key={idx} {...section} />
      ))}
    </section>
  );
};

export default AboutUs;
