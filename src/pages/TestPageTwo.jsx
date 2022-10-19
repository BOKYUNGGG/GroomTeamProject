import React, {useState, useEffect} from 'react'
import axios from 'axios'


const TestPageTwo = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateData  = (url) => {
        axios
        .get(url)
        .then((res)=> setData(res.data))

    }
    const fetchData = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setData(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            '/courses'
          );
          setData(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };

    
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;

    return (
        <div>
            Second Test Page 
            <button onClick={updateData('/courses')}>빈 요청</button>
            <button onClick={updateData('/courses?page=1&semester=SPRING&size=2000&type=TITLE&year=2022')}>쿼리파라미터 요청</button>
            
        </div>
    )
}

export default TestPageTwo