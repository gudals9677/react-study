import { useReducer } from "react";

// 상태를 변환하는 역할
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state + action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다
  // -> 상태 변화를 알리는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 상태 변화를 어떻게 시킬지 정의
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    // 상태 변화를 어떻게 시킬지 정의
    dispatch({
      type: "DECREASE",
      data: -1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
