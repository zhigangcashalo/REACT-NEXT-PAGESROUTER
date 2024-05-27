import React from 'react'
import { useRouter } from 'next/router';



const Index = () => {
    const router = useRouter();

    const navigationPageMyLoan = () => {
        const data = { id: 10000, name: 'alex' }
        router.push({
            pathname: '/myloan',
            query: { data: JSON.stringify(data) }
        })
    }


    return (
        <div className='dashboard'>
            <div>DashBoard</div>
            <button onClick={navigationPageMyLoan}>Go to Page MyLoan</button>
        </div>
    )
}

export default Index