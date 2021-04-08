import Section from '../components/Section'

const sections = [
  {
    title: "Description",
    content: "Le projet, inspiré de Photoshop et de After Effect, a pour but la création d'un logiciel permettant de \
              faire des modifications vidéos et images. L'objectif serait de proposer les algorithmes les plus complexes \
              de traitement d'image et de vidéo dans un seul logiciel. Le but de ce projet est donc de créer un outil \
              hybride et polyvalent, qui permet de traiter à la fois des images et des vidéos, avec différents outils disponibles selon le format",
    img: "images/artpad.png"
  }, {
    title: "Support du projet",
    content: "Le Logiciel sera développé en C, avec l'aide notamment de la librairie GTK et possiblement SDL. \
              Nous devons encore cependant rechercher une librairie qui nous aiderait à pouvoir traiter les vidéos.",
    img: "images/artpad.png"
  }, {
    title: "Intérêt et originalité",
    content: "Intérieurement, nous étions tous assez curieux quant au fonctionnement des logiciels de retouche \
              photos/vidéo que nous utilisons assez régulièrement. Il est vrai que ce projet n'est pas d'une originalité \
              débordante, mais nous souhaitons tout de même nous attaquer aux divers algorithmes complexes qui ont rendu \
              si célèbres certains logiciels. De plus, les principaux logiciels de retouches photos/vidéo sont assez onéreux, \
              il est donc intéressant de pouvoir proposer gratuite (et faite maison) une alternative qui corresponde à nos attentes !",
    img: "images/artpad.png"
  }
]

function ProjectPage(prop) {
  return (
    <>
      <div className="project">
        <div className="page-title">
          <h1 id="title">LE PROJET</h1>
        </div>
        {sections.map((section) =>
          <Section
            title={section.title} 
            content={section.content}
            img={section.img}
          />)}
      </div>
    </>
  );
}

export default ProjectPage;