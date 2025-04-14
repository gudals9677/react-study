import useInput from '../hooks/useInput';
// hook tips
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로는 호출 될 수 없다. ex) if, for
// 3. 나만의 훅(custom hook) 직접 만들 수 있다.

function HookExam() {
    const [input, onChange] = useInput();

    return (
        <div>
            <input type="text" value={input} onChange={onChange} />
        </div>
    );
}

export default HookExam;
