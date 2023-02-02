import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "바위",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEhEz4kJVAo-ApFTt3cUdrRFQELbtKp9hMQ&usqp=CAU",
  },
  scissors: {
    name: "가위",
    img: "https://media.istockphoto.com/id/1146263300/ko/%EB%B2%A1%ED%84%B0/%EA%B0%80-%EC%9C%84-%EB%B2%A1%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=612x612&w=0&k=20&c=tvVxRZQlHbhDeDBObE2kRMT3D_wogwuhaJe97CD722A=",
  },
  paper: {
    name: "보",
    img: "https://as1.ftcdn.net/v2/jpg/01/30/82/92/1000_F_130829242_7RUj2Q4CLzvLZEnKIlvVZNGO9XbSUjES.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "비김";
    } else if (user.name === "바위")
      return computer.name === "가위" ? "승" : "패";
    else if (user.name === "가위") return computer.name === "보" ? "승" : "패";
    else if (user.name === "보") return computer.name === "바위" ? "승" : "패";
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <img
          className="btn"
          onClick={() => play("rock")}
          src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
          alt="Rock"
        />
        <img
          className="btn"
          onClick={() => play("scissors")}
          src="https://blackbearwow.github.io/image/rockPaperScissors/scissors.png"
          alt="Scissor"
        />
        <img
          className="btn"
          onClick={() => play("paper")}
          src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
          alt="Paper"
        />
      </div>
    </div>
  );
}

export default App;
