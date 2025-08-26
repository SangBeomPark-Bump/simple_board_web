import { useState } from "react";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([
        "결과 1",
        "결과 2",
        "결과 3"
    ]); // 로직은 비워둬도 일단 결과창은 떠있음

    return (
        <div>
            <h2>검색 페이지</h2>
            <div>
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => { /* 검색 로직 비워둠 */ }}>검색</button>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h3>검색 결과</h3>
                <ul>
                    {results.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
