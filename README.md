# 팀프로젝트 지피지기
## 1. 프로젝트 개요
- '지피지기면 백전불태'. 적을 알고 나를 알면 백 번 싸워도 위태롭지 않다는 뜻으로, COVID-19를 알고 우리에게 끼친 영향을 알면 우리가 더 나은 가치 판단을 할 수 있을 것이라는 아이디어에서 프로젝트와 그 이름을 떠올렸습니다.
- 교통(서울 주요 지하철역), 문화(영화, 공연), 소비(온오프라인 매출), 생활(유명 포털 사이트 검색 키워드) 등에 걸친 데이터를 시각화 및 분석하여 정보를 제공하는 서비스 프로젝트입니다.

## 2. 프로젝트 특징
1. 메인 페이지의 두 화면은 서로 위 또는 아래 드래그 한 번만으로 매끄럽게 애니메이션 효과를 보여주며 이동됩니다.
2. 리액트의 axios 라이브러리를 통해 API URL로부터 데이터를 받아옵니다.
3. 받아온 데이터를 React ApexCharts.js를 통해 그래프로써 시각화합니다.
4. 각각의 그래프와 분석 페이지를 리액트의 Component로 만들어두고, 각각의 버튼으로 useState, 임의의 function 등을 통해 화면에서 변경될 부분반 매끄럽게 전환되도록 구현했습니다.

## 3. 기여한 부분
1. React UI Framework, React Bootstrap, React Material UI 등을 적극 이용하여, 팀원의 의견들에 부합하는 UI를 최대한 구현했습니다.
2. React의 useState, 임의로 생성한 function 등을 통해 사용자가 보고 싶은 그래프 페이지, 분석 페이지 등을 선택할 수 있는 버튼을 구현했습니다.
3. 각 그래프 페이지, 분석 페이지 등을 리액트의 특성인 Component 요소로써 미리 작성해두고, 3-2에서 언급한 버튼 선택에 따라 해당 요소만 매끄럽게 전환될 수 있도록 구현했습니다.

## 4. 프로젝트 후기
https://as-j.tistory.com/119

## 5. 프로젝트 UI
1. 메인 페이지 첫 번째 화면
![jipijigi main1](https://github.com/sjan137/Jipi-jigi/blob/main/UI%20%EB%B0%8F%20%EC%99%80%EC%9D%B4%EC%96%B4%20%ED%94%84%EB%A0%88%EC%9E%84/%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%B2%84%EC%A0%84%EB%B3%84%20UI/%EC%A7%80%ED%94%BC%EC%A7%80%EA%B8%B0%205%EB%B2%88%EC%A7%B8%20UI(1).png?raw=true)

2. 메인 페이지 두 번째 화면
![jipijigi main2](https://github.com/sjan137/Jipi-jigi/blob/main/UI%20%EB%B0%8F%20%EC%99%80%EC%9D%B4%EC%96%B4%20%ED%94%84%EB%A0%88%EC%9E%84/%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%B2%84%EC%A0%84%EB%B3%84%20UI/%EC%A7%80%ED%94%BC%EC%A7%80%EA%B8%B0%205%EB%B2%88%EC%A7%B8%20UI(2).png?raw=true)

3. 차트 페이지 기본 화면(문화 파트 예시)
![jipijigi chart1](https://github.com/sjan137/Jipi-jigi/blob/main/UI%20%EB%B0%8F%20%EC%99%80%EC%9D%B4%EC%96%B4%20%ED%94%84%EB%A0%88%EC%9E%84/%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%B2%84%EC%A0%84%EB%B3%84%20UI/%EC%A7%80%ED%94%BC%EC%A7%80%EA%B8%B0%205%EB%B2%88%EC%A7%B8%20UI(3).png?raw=true)

4. 차트 페이지 분석 화면 열기 후(문화 파트 예시)
![jipijigi chart2](https://github.com/sjan137/Jipi-jigi/blob/main/UI%20%EB%B0%8F%20%EC%99%80%EC%9D%B4%EC%96%B4%20%ED%94%84%EB%A0%88%EC%9E%84/%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%B2%84%EC%A0%84%EB%B3%84%20UI/%EC%A7%80%ED%94%BC%EC%A7%80%EA%B8%B0%205%EB%B2%88%EC%A7%B8%20UI(4).png?raw=true)

5. 화면 해상도 및 크기에 따라 반응하는 사이트로써 구현(문화 파트 예시)
![jipijigi mobile1](https://github.com/sjan137/Jipi-jigi/blob/main/UI%20%EB%B0%8F%20%EC%99%80%EC%9D%B4%EC%96%B4%20%ED%94%84%EB%A0%88%EC%9E%84/%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%B2%84%EC%A0%84%EB%B3%84%20UI/%EC%A7%80%ED%94%BC%EC%A7%80%EA%B8%B0%205%EB%B2%88%EC%A7%B8%20UI(5).png?raw=true)

6. 화면 해상도 및 크기에 따라 반응하는 사이드바 구현(문화 파트 예시)
![jipijigi mobile2](https://github.com/sjan137/Jipi-jigi/blob/main/UI%20%EB%B0%8F%20%EC%99%80%EC%9D%B4%EC%96%B4%20%ED%94%84%EB%A0%88%EC%9E%84/%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%B2%84%EC%A0%84%EB%B3%84%20UI/%EC%A7%80%ED%94%BC%EC%A7%80%EA%B8%B0%205%EB%B2%88%EC%A7%B8%20UI(6).png?raw=true)
