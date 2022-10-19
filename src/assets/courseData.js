// 사용법 : import {courseData} from ''

export const courseData= [
  // {
  //   courseId : "1",
  //   department : "asdasd",
  //   title : "Programming 1",
  //   professorName : "Kim",
  //   credit : "3",
  //   numberOfStudents : "15",
  //   spare : "5",
  //   capacity : "20",
  //   year : "2022",
  //   semester : "",
  // }
]
export const courseColumns = [
  {
    Header: '학수번호',
    accessor: 'courseId'
  },
  {
    Header: '학과',
    accessor: 'department'
  },
  {
    Header: '강의명',
    accessor: 'title'
  },
  {
    Header: '교수명',
    accessor: 'professorName'
  },
  {
    Header: '학점',
    accessor: 'credit'
  },
  {
    Header: '신청학생수',
    accessor: 'numberOfStudents'
  },
  {
    Header: '여석',
    accessor: 'spare'
  },
  {
    Header: '정원',
    accessor: 'capacity'
  },
  {
    Header: '년도',
    accessor: 'year'
  },
  {
    Header: '학기',
    accessor: 'semester'
  }
]


function makeData(){
  for(var i =0; i<1000; i++){
    courseData.push(
      {
        courseId : i,
        department : "ACCOUNTING",
        title : `Programming ${i}`,
        professorName : "Kim",
        credit : "3",
        numberOfStudents : "15",
        spare : "5",
        capacity : "20",
        year : "2022",
        semester : "SPRING",
      }
    )
  }
}
makeData()
