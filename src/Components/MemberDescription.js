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
            <div class="member container">
                <div class="member main-div">
                    <img class="member img" src={`${this.img_src}`}/>
                    <div class="member description">
                        <h3 id="name">{this.name}</h3>
                        <p id="text">{this.description}</p>
                    </div>
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
            description: "Miam les grosses bites turgescentes :)",
            img_src: "images/artpad.png"
        },{
            name: "DESMARRAIS Lowen",
            description: "J'ai cassé étoutes mes lunettes snif (;-;)",
            img_src: "images/artpad.png"
        },{
            name: "DUBOIN Léo",
            description: "Je suis un peu weeb tehe ;p",
            img_src: "images/artpad.png"
        }
    ];

    return (
        <div clas="member-list">
            {members.map((member) =>
                <MemberContainer 
                    img_src={`${member.img_src}`}
                    description={`${member.description}`}
                    name={`${member.name}`}
                />
            )}
        </div>
    );
}