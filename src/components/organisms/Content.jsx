import React from 'react'
import styled from 'styled-components'
import SearchCourseTab from '../molecules/tabs/SearchCourseTab'
import StudentCourseTab from '../molecules/tabs/StudentCourseTab'
import PutEnrollmentTab from '../molecules/tabs/PutEnrollmentTab'
import ProfessorCourseTab from '../molecules/tabs/ProfessorCourseTab'
import CreateCourseTab from '../molecules/tabs/CreateCourseTab'
const Wrapper = styled.div`
    padding : 40px;
    border : solid 2px var(--indigo);
    border-top-right-radius : 10px;
    border-bottom-left-radius : 10px;
    border-bottom-right-radius : 10px;
`
const Content = ({tabsInfo}) => {
    const selectedTab = tabsInfo.find(element=>element.selected==true)
    
    return (
        <Wrapper>
            {selectedTab.menu=="강의검색" ? <SearchCourseTab/> : null}
            {selectedTab.menu=="신청강의조회" ? <StudentCourseTab/> : null}
            {selectedTab.menu=="수강신청" ? <PutEnrollmentTab/> : null}
            {selectedTab.menu=="나의개설강의" ? <ProfessorCourseTab/> : null}
            {selectedTab.menu=="강의개설" ? <CreateCourseTab/> : null}
        </Wrapper>
    )
}

export default Content