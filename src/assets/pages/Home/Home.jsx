import React, { useEffect, useState } from 'react'
import Box from '../../Components/Box/Box'
import './home.css'
import axios from 'axios'


const Home = () => {
    const [allData, setAllData] = useState([]);

    const getApi = async () => {
        try {
            await axios
                .get("https://fakestoreapi.com/products")
                .then((res) => {
                    setAllData(res.data);
                });
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {

        getApi();

    }, [])




    return (
        <>
            <header>
                <h1>Product Page</h1>
            </header>
            <main>
                <section className='Product-page'>
                    <div className="container">
                        {
                            allData && allData.map((item,index) => (
                                <Box key={index} item ={item} />


                            ))
                        }



                    </div>
                </section>
            </main>

        </>
    )
}

export default Home