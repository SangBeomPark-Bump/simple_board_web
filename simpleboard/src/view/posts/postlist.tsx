import {Post } from "../../model/Post.tsx";

export default function Board() {
const posts = [
    new Post("첫 번째 글", "홍길동", "2025-08-22"),
    new Post("두 번째 글", "김철수", "2025-08-21"),
    new Post("세 번째 글", "이영희", "2025-08-20"),
    new Post("네 번째 글", "박상범", "2025-08-19")
];

    return (
        <div>
            <h2>게시판</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <strong>{post.title}</strong> - {post.author} ({post.date})
                    </li>
                ))}
            </ul>
        </div>
    );
}