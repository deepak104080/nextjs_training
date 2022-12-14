import React, { useEffect } from "react";
import {useRouter} from 'next/router';

// ssg - build
export const getStaticProps = async () => {
    //api call
    const response = await fetch(process.env.API_URL);
    // console.log(response);
    const data = await response.json(); //to convert stringified json to parsed json
    // console.log(data);
    return {
        props: {productData: data}
    }
}

const Courses = (props) => {
    const router = useRouter();
    useEffect(() => {
        let loginStatus = localStorage.getItem('loginStatus');
        if(!loginStatus) {
            router.push('/login');
        }
    })
    console.log('props', props);
    const {productData} = props;
    return(
        <div>
            <h2>This is courses file.</h2>
            {productData.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}

export default Courses;


// npm run build - deploying our code - getstaticprops
// page visiting - get serversideprops