# berry-datepicker   

## STACK   
### WEBPACK     
### BABEL   
### #REACT   
### YARN BERRY   

## 실행   
    yarn dev

## 제작 의도   
평소 node_modules의 비효율적인 의존성 검색에 불만을 품던 차, PNP방식을 사용하는 berry를 발견하였고,   
실효성에 궁금증이 생겨 시작된 프로젝트.   
거대한 프로젝트가 아니기에 의미 없게 무거워지는 것을 방지하기 위해 최소화.   
CRA가 아닌, Webpack, yarn-berry의 zero-install을 사용하여 빌드시간을 줄임.

## PNP ?   

node_modules에 패키지가 저장되는 형식이 아닌, .yarn/cache 폴더에 의존성의 정보가 저장됨.   
.pnp.js 파일에 의존성을 찾을 수 있는 정보가 기록된다.   
따라서 .pnp.js에 명시된 정보들만을 따라서 참조하면 되기 때문에 트리 형식의 node_modules 폴더를 순회할 필요가 없어짐.   
검색 속도 증가. 더불어 .yarn 폴더 자체를 원격 저장소에 업로드 하는 zero-install 방식을 사용하여   
git clone을 실행하면 추가 설치가 필요 없이 바로 실행할 수 있다.

참조 : 
https://velog.io/@altmshfkgudtjr/yarn2%EC%99%80-%ED%95%A8%EA%BB%98-Plug-n-Play%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90

## react datepicker ?   
calendar를 간편하게 나타낼 수 있는 라이브러리.  
본 프로젝트는 datepicker를 보기 좋게 수정함. 
참조 : 
https://github.com/Hacker0x01/react-datepicker
