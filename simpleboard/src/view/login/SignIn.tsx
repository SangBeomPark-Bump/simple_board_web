export default function SignIn() {
    return (
        <div>
            <h2>회원가입</h2>
            <form>
                <div>
                    <label>아이디</label>
                    <input type="text" />
                </div>

                <div>
                    <label>비밀번호</label>
                    <input type="password" />
                </div>

                <div>
                    <label>이름</label>
                    <input type="text" />
                </div>

                <div>
                    <label>이메일</label>
                    <input type="email" />
                </div>

                <button type="submit">가입</button>
            </form>
        </div>
    );
}

