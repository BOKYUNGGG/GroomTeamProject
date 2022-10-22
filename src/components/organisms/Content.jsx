import React, {useState, useEffect} from 'react'
import SearchCourseTab from '../molecules/tabs/SearchCourseTab'
import StudentCourseTab from '../molecules/tabs/StudentCourseTab'
import PutEnrollmentTab from '../molecules/tabs/PutEnrollmentTab'
import ProfessorCourseTab from '../molecules/tabs/ProfessorCourseTab'
import CreateCourseTab from '../molecules/tabs/CreateCourseTab'

const Content = ({tabsInfo}) => {
    const selectedTab = tabsInfo.find(element=>element.selected==true)
    

    return (
        <div>
            {selectedTab.menu=="Search Course" ? <SearchCourseTab/> : null}
            {selectedTab.menu=="Student's Course" ? <StudentCourseTab/> : null}
            {selectedTab.menu=="Put Enrollment" ? <PutEnrollmentTab/> : null}
            {selectedTab.menu=="Professor's Course" ? <ProfessorCourseTab/> : null}
            {selectedTab.menu=="Create Course" ? <CreateCourseTab/> : null}
        </div>
    )
}

export default Content