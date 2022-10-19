import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import SearchCourseTab from '../molecules/tabs/SearchCourseTab'
import StudentCourseTab from '../molecules/tabs/StudentCourseTab'
import PutEnrollmentTab from '../molecules/tabs/PutEnrollmentTab'
import ProfessorCourseTab from '../molecules/ProfessorCourseTab'
import CreateEnrollmentTab from '../molecules/tabs/CreateEnrollmentTab'

const Content = () => {
    // redux
    const tabInfo = useSelector((state)=>state.tabMenuReducer)
    const {reservedCourses, createdCourses, searchedCourses} =
    useSelector(state => ({
        reservedCourses : state.reservedCoursesReducer,
        createdCourses : state.createdCoursesReducer,
        searchedCourses : state.searchedCoursesReducer
    }))


    const [selected, setSelected] = useState(null)
    var id = null
    var selectedTab = null

    useEffect(()=>{
        id = tabInfo.selectedId
        selectedTab = tabInfo.menuItems.find(element=>element.id==id)
        setSelected(selectedTab.value)
    })
   

    

    return (
        <div>
            {selected=="Search Course" ? <SearchCourseTab/> : null}
            {selected=="Student's Course" ? <StudentCourseTab/> : null}
            {selected=="Put Enrollment" ? <PutEnrollmentTab/> : null}
            {selected=="Professor's Course" ? <ProfessorCourseTab/> : null}
            {selected=="Create Enrollment" ? <CreateEnrollmentTab/> : null}
        </div>
    )
}

export default Content