# Node 이미지 사용
FROM node:20-alpine

# 작업 디렉토리
WORKDIR /app

# 의존성 설치
# COPY package*.json ./
RUN npm install

# 프로젝트 복사
COPY . .

# 포트 오픈 (Vite 기본 5173)
EXPOSE 5173

# 개발 서버 실행
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]