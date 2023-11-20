import { Console, MissionUtils } from "@woowacourse/mission-utils";
import BaseballController from "./controller/BaseballController.js";

class App {
  #controller;
  constructor() {
    this.#controller = new BaseballController();
  }
  async play() {
    try {
      await this.#controller.gameStart();
    } catch (error) {
      console.log(error.message);
    }
    // const randoms = randomNumber();
    // await Console.print("숫자 야구 게임을 시작합니다.");
    // while (true) {
    //     const answers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    //     if(answers === undefined|| answers.length != randoms.length){
    //       throw new Error("[ERROR] 규칙에 맞는 수를 입력하세요.");
    //     }
    //     const user = answers.split('').map(Number);
    //     if(validator(randoms,user) == 0) {
    //       await Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    //       break;
    //     }else{
    //       continue;
    //     } 
    // }
    // const status = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    // if(status == 1){
    //   await Console.print("1입력");
    //   await app.play();
    // }else if(status == 2){
    //   await Console.print("게임 종료");
    // }else{
    //   throw new Error("[ERROR] 1과 2중 하나를 입력하세요.");
    // }
  }
}
const randomNumber = ()=> {
  const computer = [];
  while (computer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

const validator = (computer, user) => {
  let score = [0,0];
  for(let i=0;i<3;i++){
    if(computer[i]===user[i]){
      score[0]+=1;
    }else if(computer.includes(user[i])){
      score[1]+=1;
    }
  }
  if(score[0]==0 && score[1]==0){
    Console.print("낫싱");
  }else if(score[0]==3){
    Console.print(`${score[0]}스트라이크`);
    return 0;
  }else if(score[0]==0 && score[1]>0){
    Console.print(`${score[1]}볼`);
  }else if(score[0]>0 && score[1]==0){
    Console.print(`${score[0]}스트라이크`);
  }else{
    Console.print(`${score[1]}볼 ${score[0]}스트라이크`);
  }
}
export default App;
