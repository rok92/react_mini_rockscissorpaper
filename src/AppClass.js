import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";


const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEhEz4kJVAo-ApFTt3cUdrRFQELbtKp9hMQ&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "https://media.istockphoto.com/id/1146263300/ko/%EB%B2%A1%ED%84%B0/%EA%B0%80-%EC%9C%84-%EB%B2%A1%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=612x612&w=0&k=20&c=tvVxRZQlHbhDeDBObE2kRMT3D_wogwuhaJe97CD722A=",
  },
  paper: {
    name: "Paper",
    img: "https://as1.ftcdn.net/v2/jpg/01/30/82/92/1000_F_130829242_7RUj2Q4CLzvLZEnKIlvVZNGO9XbSUjES.jpg",
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };
  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <img
            onClick={() => this.play("rock")}
            className="btn"
            alt="rock"
            src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
          />
          <img
            onClick={() => this.play("scissors")}
            className="btn"
            alt="scissors"
            src="https://blackbearwow.github.io/image/rockPaperScissors/scissors.png"
          />
          <img
            onClick={() => this.play("paper")}
            className="btn"
            alt="paper"
            src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
          />
        </div>
      </div>
    );
  }
}
