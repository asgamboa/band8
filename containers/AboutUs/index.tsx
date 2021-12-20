import React from "react";
import styles from "./AboutUs.module.scss";
import { ExpandableDescriptionProps } from "../../components/ExpandableDescription/index";
import ExpandableDescription from "../../components/ExpandableDescription/index";

const sections: ExpandableDescriptionProps[] = [
  {
    title: "¿Quiénes somos?",
    description: [
      "Creémos que la música es para todos, sin importar tú edad, género, etnia u orientación. Somos nuevos en la ciudad de Culiacán, tenemos algo nunca antes visto, te otorgamos un espacio seguro para ti y tus gustos.",
    ],
  },
  {
    title: "Misión",
    description: ["Transmitir seguridad al cliente creando una experiencia placentera donde pueda expresarse brindándole respeto, confianza, empatía y equidad que se merecen."],
  },
  {
    title: "Visión",
    description: [
      "Poder ser reconocidos como una empresa innovadora en Culiacán, dedicada a la nostalgia de los discos y vinilos. Queremos que nuestra reputación sea de un buen trabajo y servicio a nuestros clientes.",
    ],
  },
  {
    title: "Valores",
    description: ["El Respeto, la Confianza, la Equidad, la Empatía y la Puntualidad son los valores que definen el carácter de nuestra compañía, expresan quiénes somos y en qué creemos."],
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
