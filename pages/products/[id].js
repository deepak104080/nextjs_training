import React from 'react';
import { useRouter } from 'next/router';

// make api call using id
// https://fakestoreapi.com/products/1
// SSR page - e commerce
export const getServerSideProps = async (context) => {
    console.log('context', context);
    // Do not use useRouter in serversideprops
    // const router = useRouter();
    // const {id} = router.query;
    const id = context.params.id;
    console.log('id' - id);
    //api call
    const response = await fetch(process.env.API_URL+id);
    // console.log(response);
    const data = await response.json(); //to convert stringified json to parsed json
    // console.log(data);
    return {
        props: {productData: data}
    }
}

const ProductId = ({productData}) => {
    // console.log(productData);
    const router = useRouter();
    const {id} = router.query;
    console.log('id' - id);
    return (
        <div>
                <h2>This is product page - {productData.title}</h2>
                {/* {productData.map(item => (
                    <div>{item.title}</div>
                ))} */}
            </div>
    )
}

export default ProductId
