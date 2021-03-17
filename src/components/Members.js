import React from 'react';

class MemberContainer extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.description = props.description;
    this.img_src = props.img_src;
  };

  render() {
    return (
      <div className="member-container">
        <img className="member img" src={`${this.img_src}`} alt=""/>
        <div className="member description">
          <h3 id="name">{this.name}</h3>
          <p id="text">{this.description}</p>
        </div>
      </div>
    );
  }
}

export default function Members() {
  const members = [
    {
      name: "AUBERT Tom",
      description: "J'aime trop les neko traps ! OwO",
      img_src: "images/artpad.png"
    },{
      name: "LECOMTE Paul",
      description: "MiaMiam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)Miam les grosses bites turgescentes :)m les grosses bites turgescentes :)",
      img_src: "images/artpad.png"
    },{
      name: "DESMARRAIS Lowen",
      description: "J'ai cassé toutes mes lunettes snif (;-;)",
      img_src: "images/artpad.png"
    },{
      name: "DUBOIN Léo",
      description: "Je suis un peu weeb tehe ;p",
      img_src: "images/artpad.png"
    },
    {
      name: "MONTEAU--SHIOZAKI Emilie",
      description: "J'ai faim.",
      img_src: "images/artpad.png"
    },
    {
      name: "MACRON Emmanuel",
      description: "Parceque c'est notre PROJEEEEEET !",
      img_src: "images/artpad.png"
    },
  ];

  return (
    <>
      {members.map((member) =>
        <MemberContainer 
          img_src={`${member.img_src}`}
          description={`${member.description}`}
          name={`${member.name}`}
        />
      )}
    </>
  );
}