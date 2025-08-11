import React from 'react';

/**
 * 
 * 십계명
 * 여리고성
 * 홍해
 * 
 */

const Team: React.FC = () => {
    return (
        <div className="team-page w-100 h-100">
            <div className="container w-100 h-100" >
                <h1>주님이 주신 땅으로</h1>
                <h2>홍해</h2>
                <p>조를 입력하세요</p>
                <div className="input-group">
                    <textarea className="answer-box" placeholder="ex) 숫자 + 조"></textarea>
                    <button className="submit-button">확인</button>
                </div>
            </div>
        </div>
    );
};

export default Team; 