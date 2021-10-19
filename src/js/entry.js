let rankingList = [
  { username: 'Bareum', record: { mm: 0, ss: 0, ms: 10 } },
  { username: 'Chaeyoung', record: { mm: 0, ss: 10, ms: 0 } },
  { username: 'Sohyeong', record: { mm: 0, ss: 20, ms: 0 } },
  { username: 'Hangyul', record: { mm: 0, ss: 30, ms: 0 } },
  { username: 'Fastcampus', record: { mm: 0, ss: 40, ms: 0 } }
];

/*
ranks 유무확인 (혹은 길이 반환 getRanksLength)
ranks 스토리지에 생성 (setRanks)
ranks 의 name 중복확인 (isNameExist)
ranks 에 새로운 기록 추가 (name 값 입력, record 초기값) (setRank)
닉네임 정규표현식 (isValidName)
*/

const getRankingListLength = () => rankingList.length;

// rankings 를 변수명으로 하는 것이 어떨까
const setRankingList = ({ username, record = { mm: 0, ss: 0, ms: 0 } }) => {
  rankingList = [...rankingList, { username, record }];
};

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('rankingList'))
    localStorage.setItem('rankingList', []);
});
