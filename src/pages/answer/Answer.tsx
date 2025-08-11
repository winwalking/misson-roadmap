import React from 'react';

/**
 * 
 * 본관 3층숙소
 * 본관 4층숙소
 * 침례장
 * 대운동장
 * 베들레헴성전
 * 예루살렘성전
 * 
 */

const Answer: React.FC = () => {
  return (
    <div className="answer-page w-100 h-100">
      <div className="container w-100 h-100">
        <h1>주님이 주신 땅으로</h1>
        <p>조를 입력하세요</p>
        <div className="input-group">
          <textarea className="answer-box" placeholder="ex) 숫자 + 조"></textarea>
          <button className="submit-button">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Answer; 