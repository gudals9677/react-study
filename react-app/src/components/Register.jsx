import { useState, useRef } from 'react';

function Register() {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    const countRef = useRef(9);
    const inputRef = useRef();

    function onChange(e) {
        countRef.current++;
        console.log(countRef.current);

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    function onSubmit() {
        if (input.name === '') {
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    value={input.name}
                    name="name"
                    onChange={onChange}
                    type="text"
                    placeholder="이름"
                />
            </div>

            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                ></textarea>
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}

export default Register;
