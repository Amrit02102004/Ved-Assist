import {useState , useEffect} from 'react';
import axios from 'axios';
function App() {
    const [token , setToken] = useState("");
    const gettoken = () =>{
        return token;
    }
    const fetchtoken = async () =>{
        await axios({
            method : 'POST',
            url : 'http://127.0.0.1:8000/get_csrf',
            headers : {
                'accept' : 'application/json',
                'content-type' :'multipart/form-data',
            },
        }).then(res=>{
            console.log(res.data.csrf_token);
            setToken(res.data.csrf_token);
        }).catch(err => console.log(err));
    }
//   Call fetchToken when the component mounts or when needed
    useEffect(() => {
      fetchtoken();
    }, []);
    
}

export default App;