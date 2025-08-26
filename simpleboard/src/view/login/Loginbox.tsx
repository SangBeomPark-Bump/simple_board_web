


export default function Loginbox(){
    return (
        <div>
            ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="userId" placeholder="ID 입력"></input>
            <br></br>
            비밀번호 &nbsp;&nbsp;
            <input type="password" name="pw" placeholder="비밀번호 입력"></input>
            <br></br>
            <button className="login" onClick={() => {} }>
                Log in
            </button>
            <button className="Sign in" onClick={() => {} }>
                Sign in
            </button>
        </div>
    );
}

