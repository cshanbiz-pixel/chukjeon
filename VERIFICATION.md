# 검증 결과

- npm ci: 통과 (첨부 ZIP의 package-lock.json 사용)
- npm run check: 오류 0 / 경고 0 / 힌트 0
- npm run build: 통과 / 정적 HTML 37개 + robots.txt
- 검증 실행 환경: Node 24.22.1 및 Node 22.23.4. 두 버전에서 npm run check와 npm run build 모두 통과했습니다.
- 원본 data/festivals.json: 바이트 단위 동일, 가상 축제 10개와 모든 필드·값 보존
- 기존 타입, 날짜·데이터 함수, package.json/lock, Astro 설정, 기존 홈/월별 페이지 소스: 동일
- 기존 프로젝트 파일과 폴더: 삭제·이동 없음. 새 폴더 없음
- 추가: 기존 lib 폴더의 site-config.ts, pages 폴더의 robots.txt.ts, public/images 안 로고·사진 5개
- 승인된 시안 CSS: 원문을 그대로 유지, 끝에 Astro 보조 스타일만 추가
- 시안 로고·사진: 원본과 바이트 단위 동일
- HTML 37개 모두 noindex, nofollow와 샘플 데이터 문구 확인
- /robots.txt: User-agent: * / Disallow: /
- sampleMode=false 별도 빌드: HTML 37개 noindex 제거 및 샘플 데이터 문구 제거, robots Allow: / 확인
- 배포본 설정: sampleMode=true로 복원한 뒤 재검사·재빌드 완료
- 모든 내부 페이지·이미지·CSS·JS 링크: 대상 파일 존재
- 홈: 카드 10개, 첫 카드 featured, 광고는 6번째 카드 뒤
- 모든 HTML 버튼: type=button, aria-disabled=true. 필터·검색·상세 액션 이벤트 핸들러 없음
- HTML에 전체 카드와 상세 내용 포함: 클라이언트 렌더링 의존 없음
- 브라우저 QA: 홈/상세 화면 표시, 기존 /f/sample-001/ 이동, 칩 클릭 후 무변경 확인
- 브라우저 QA: app-shell 및 상세 고정 액션바 너비 390px, 가로 넘침 없음, 대표 이미지 로드 성공
- 전체 클라이언트 JavaScript 크기: 1601 bytes (압축 전)
- API 호출·공개 배포·GitHub 저장소 수정: 실행하지 않음
- 실기기별 화면·Lighthouse 점수·검색엔진 색인 제외 결과: 별도 측정하지 않음

JSON을 보존하므로 축제 제목·카드 정렬·관련 축제 개수는 기존 데이터 기준입니다. 디자인 시안의 가상 콘텐츠를 JSON에 덮어쓰지 않았습니다.
