import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import SearchCourseTab from '../molecules/tabs/SearchCourseTab'
import StudentCourseTab from '../molecules/tabs/StudentCourseTab'
import PutEnrollmentTab from '../molecules/tabs/PutEnrollmentTab'
import ProfessorCourseTab from '../molecules/tabs/ProfessorCourseTab'
import CreateCourseTab from '../molecules/tabs/CreateCourseTab'
const Wrapper = styled.div`
    border : solid 2px var(--indigo);
    border-top-right-radius : 10px;
    border-bottom-left-radius : 10px;
    border-bottom-right-radius : 10px;
`
const Content = ({tabsInfo}) => {
    const selectedTab = tabsInfo.find(element=>element.selected==true)
    

    return (
        <Wrapper>
            {selectedTab.menu=="Search Course" ? <SearchCourseTab/> : null}
            {selectedTab.menu=="Student's Course" ? <StudentCourseTab/> : null}
            {selectedTab.menu=="Put Enrollment" ? <PutEnrollmentTab/> : null}
            {selectedTab.menu=="Professor's Course" ? <ProfessorCourseTab/> : null}
            {selectedTab.menu=="Create Course" ? <CreateCourseTab/> : null}
        </Wrapper>
    )
}

export default Content