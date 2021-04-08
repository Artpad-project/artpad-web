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
          <hr className="member separator" />
          <p id="text">{this.description}</p>
        </div>
      </div>
    );
  }
}

export default function Members(props) {
  const members = [
    {
      name: "LECOMTE Paul",
      description: "'OwO, what's this ? :3' - Les dragons sont sa plus grande passion.",
      img_src: "images/drip_palicock.png"
    },{
      name: "AUBERT Tom",
      description: "'Yeaaaah, Peace Peace' - Toujours fidèle à son leader, ce jeune rouquin est prêt à tout sacrifier, parce que c'est notre 'PROOOOJEEEEEET'",
      img_src: "images/big_saucisse.png"
    },{
      name: "DESMARRAIS Lowen",
      description: "'Rain falls without anyone to blame' - La dépression l'a soulevé, mais il compte bien soulever ce projet.",
      img_src: "images/drip_lowen.png"
    },{
      name: "DUBOIN Léo",
      description: "'shitsurei, kamimashita' - Si le groupe s'appelle la WEEBANCE c'est surtout à cause de lui.",
      img_src: "images/big_leo.png"
    }
  ];

  return (
    <>
      {members.map((member) =>
        <MemberContainer 
          img_src={member.img_src}
          description={member.description}
          name={member.name}
        />
      )}
    </>
  );
}