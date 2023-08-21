
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//function으로 하는 방법
//class보다는 간단하다는 점

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// Square를 state 없이 render 함수만을 가지는 함수 컴포넌트로 변경한다.

// class Square extends React.Component {
//   // constructor(props) {
//   //   //생성자 추가
//   //   super(props);
//   //   //모든 React 컴포넌트 클래스는 생성자를 가질 때
//   //   //super(props) 호출 구문부터 작성해야 한다.
//   //   this.state = {
//   //     value: null, //state 초기화
//   //   };
//   // }
//   //게임의 상태 유지할 필요 없으니까 constructor 지움
//   //square component-> boardComponent 제어로 바꿈

//   // ??  상속 -> 생성자 왜 필요해?

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
//   //square는 사각형을 클릭할때 onClick 함수 호출
// }
//square는 value prop, onclick prop을 받는다
// 컴포넌트는 자신이 정의한 state에만 접근할 수 있으므로 Square에서 Board의 state를 직접 변경할 수 없다

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      //배열
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    //slice()복제해서 배열 반환, 원본 배열 건들지않음

    if (calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    //i번째 배열에 X or O의 값이 들어감

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    //state 재정의
    //바뀐 squares의 값 들어간다
    //xIsNext의 값을 바꿔줌 => 다음 turn으로
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
      //?? 태그 안에 있는 Square
      // this.handlClick=> "X"의 값이 드감 -> this.state.squares[i] value => "X"
      //화살표가 뭔지는 모르지만 지우면 계속 깜빡거림
    );
  }

  //Board에서 Square로 handleClick 함수를 전달

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      //winner != null
      status = "Winner : " + winner;
    } else {
      // winner == null
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    // const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //가로 & 대각선

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
      //"O" or "X"로 채워져있다면 "O"//"X"의 값을 반환
    }
  }

  return null;
  //만약 해당사항이 없다면 빈값을 반환
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
