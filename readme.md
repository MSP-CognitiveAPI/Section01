# Section01
Cognitive API를 이용한 별점 리뷰 비교 웹사이트 제작
![210.117.182.158:2500](https://raw.githubusercontent.com/cog-io/Section01/master/images/page.PNG)

## 웹 사이트 제작을 위한 필요사항
NodeJS 설치 - https://nodejs.org/en/download/releases/ <br>
Bing Translator Subscription 등록 - https://datamarket.azure.com/dataset/bing/microsofttranslator <br>
Azure 등록 - https://portal.azure.com/ <br>

## 필요 모듈
request - npm install request<br>
mstranslator - npm install mstranslator

## 웹서버 구동 방법
git clone https://github.com/cog-io/Section01.git <br>
cd Section01 <br>
nodejs bin/www <br>

브라우저 실행 후, localhost:2500 접속 <br>
테스트 페이지: 210.117.182.158:2500

## 핵심 코드 설명
#### Bing Translator API 관련 코드
![Bing Translator API 관련 코드](https://raw.githubusercontent.com/cog-io/Section01/master/images/Bing%20Translator.PNG) 
requestBingTranslate 함수를 이용하여 한글로 된 텍스트를 영어로 번역<br>
번역이 완료 되면 translate 함수가 호출된다.<br>
data 변수에 해당 언어(영어)로 번역된 텍스트가 담겨있음.

#### Cognitive API 관련 코드
![Cognitive API 관련 코드](https://raw.githubusercontent.com/cog-io/Section01/master/images/Cognitive%20API.PNG)
requestTextEmotionAPI 함수를 통해서 텍스트에서 감정을 추출한다.<br>
여기서 type은 의미 없으며, 사용자의 아이디, 감정을 추출하고자 하는 텍스트만 주면 된다.<br>
