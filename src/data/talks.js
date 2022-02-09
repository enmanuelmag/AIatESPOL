import moment from 'moment';

const talks = [
  {
    speaker: "Dr. Vicente Ordoñez",
    title: "Deep Learning para extraer patrones de imágenes y texto en conjunto.",
    date: moment('2022-01-27T20:00:00-05:00').format('YYYY-MM-DD HH:mm'),
    link: "https://drive.google.com/file/d/1CeWD2rkXMXmecvr6absvL67xUNcuQG2B/preview",
    mode: "Online, Zoom",
    contact: "postgrados@fiec.espol.edu.ec",
    description: 'Los modelos computacionales propuestos en la actualidad, para el entendimiento de imágenes y texto, contienen muchas propiedades similares en sus arquitecturas a pesar de la gran diferencia en la naturaleza de estas dos modalidades.  En esta charla, se presentará algunas de las coincidencias con respecto al uso de redes neuronales con múltiples capas con módulos de multi-headed self-attention: Transformers.'
  },
  {
    speaker: "Dr. José Oramas",
    title: "La importancia de comprender el funcionamiento interno de los modelos inteligentes que construimos.",
    date: moment('2022-02-03T14:00:00-05:00').format('YYYY-MM-DD HH:mm'),
    link: "https://drive.google.com/file/d/1salOTg3vBZeMJN8-cQjPaG_YOKFGpeK-/preview",
    mode: "Online, Zoom",
    contact: "postgrados@fiec.espol.edu.ec",
    description: 'En la última década, disciplinas relacionas a Inteligencia Artificial y Aprendizaje Autónomo han experimentado un progreso significativo. En el aspecto teórico, esto ha llevado al desarrollo de modelos para la exploración de nuevas ideas y problemas fundamentales. En el aspecto práctico, modelos de alto rendimiento han sido desplegados en varias aplicaciones para resolver problemas reales. Aún cuando esto es positivo para el campo, en algunos casos el desarrollo y entrenamiendo de estos modelos se ha enfocado en optimizar su rendimiento de forma cuantitativa. Consecuentemente, menos atención se ha dado a su funcionamiento interno. En esta charla, conversaremos sobre los problemas causados por estas prácticas.'
  },
  {
    speaker: "Dr. Ramón Villa",
    title: "Mecanismos de auto-atención, Transformers y BERT.",
    date: moment('2022-02-10T20:00:00-05:00').format('YYYY-MM-DD HH:mm'),
    link: false,
    inscription: 'https://docs.google.com/forms/d/e/1FAIpQLSdTF3eSP_qz1Slc_Zd_OMtn4HfAz2PzXthGZkIRztwhbhwLFg/viewform',
    mode: "Online, Zoom",
    contact: "postgrados@fiec.espol.edu.ec",
    description: 'Aprendizaje Autónomo y Profundo en mecanismos de auto-atención, Transformers y BERT. El expositor será Ramón Villa Ph.D.(c) de la Universidad Carnegie Mellon.'
  },
];

export default talks;
