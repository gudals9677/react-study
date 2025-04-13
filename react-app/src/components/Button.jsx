function Button({ children, text, color = 'white' }) {
    // 이벤트 객체
    function onClickButton(e) {
        console.log(e);
        console.log(text);
    }

    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

export default Button;
