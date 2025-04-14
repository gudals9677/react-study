function Controller({ onCount }) {
  return (
    <div>
      <button
        onClick={() => {
          onCount(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onCount(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onCount(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onCount(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onCount(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onCount(+1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Controller;
