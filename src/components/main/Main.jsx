import "./Main.css"
import LargeTable from '../tables/LargeTable'
import { useMemo } from "react";
import DefaultForm from "../forms/DefaultForm";

const Main = () => {


    const columns = useMemo(()=>[
        {
            accessor : "name",
            Header : "Name"
        },
        {
            accessor : "email",
            Header : "Email"
        },
        {
            accessor : "phone",
            Header : "Phone"
        }
    ],[]);
    const data = useMemo(()=>[
        {
            name : "철수",
            email : "철수@naver.com",
            phone : "001514511"
        },
        {
            name : "영희",
            email : "영희@naver.com",
            phone : "474444121"
        },
        {
            name : "민수",
            email : "민수@naver.com",
            phone : "89974111"
        }
    ],[]);
    

  return (
    <div>
        Main
        {/* <LargeTable columns={columns} data={data}></LargeTable> */}
        <DefaultForm></DefaultForm>
    </div>
  )
}

export default Main