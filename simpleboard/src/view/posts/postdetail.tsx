export default function PostDetail() {
    return (
        <div>
            <h2>글 작성</h2>
            <div>
                <textarea 
                    placeholder="글 내용을 입력하세요" 
                    style={{ width: "100%", height: "300px" }} 
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <button type="button">등록</button>
                <button type="button" style={{ marginLeft: "10px" }}>취소</button>
            </div>
        </div>
    );
}