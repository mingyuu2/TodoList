import React from 'react'
import styled from 'styled-components';


const TodoHeadStyle = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #E9ECEF;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .week {
        margin-top: 3px;
        color: #868e96;
        font-size: 21px;
    }
`;

const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[now.getDay()];
    
    // return todayYear + "년 " + todayMonth + "월 " + todayDate + "일 " + dayOfWeek + "요일";
    return ({
        year: todayYear,
        month: todayMonth,
        day: todayDate,
        week: dayOfWeek
    });
};

function TodoHead() {
  return (
    <TodoHeadStyle>
        <h1>{todayTime().year}년 {todayTime().month}월 {todayTime().day}일</h1>
        <div className='week'>{todayTime().week}요일</div>
    </TodoHeadStyle>
  )
}

export default TodoHead