import React from 'react';
import { useRouter } from 'next/router';

//make api call using id
// https://fakestoreapi.com/products/1
// SSR page - e commerce
// export const getServerSideProps = async () => {
//     //api call
//     const response = await fetch('https://fakestoreapi.com/products');
//     // console.log(response);
//     const data = await response.json(); //to convert stringified json to parsed json
//     // console.log(data);
//     return {
//         props: {productData: data}
//     }
// }

const ProductId = (context) => {
    const router = useRouter();
    const {id} = router.query;
    console.log('id' - id);
    // console.log('props', props);
    // const {productData} = props;
    // console.log('ID - ', context.params.id);
    return (
        <div>
                <h2>This is product page - {id}</h2>
                {/* {productData.map(item => (
                    <div>{item.title}</div>
                ))} */}
            </div>
    )
}

export default ProductId
