console.log('app')

var appkey = 'ecd7255e2bacd58422b4763ef4feb4f9';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;

var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK ecd7255e2bacd58422b4763ef4feb4f9');
var options = {
  headers: myHeaders
};

fetch(url, options).then(function(response) {
  response.json().then(function(data) {
    console.log('json data:', data);
  });
});