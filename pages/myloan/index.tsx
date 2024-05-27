import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Index = () => {

    const router = useRouter();
    const { query } = router;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (query.data) {
            setData(JSON.parse(query.data));
        }
    }, [query.data])

    return (
        <div>
            <h1>MyLoan Page</h1>
            {data && (
                <>
                    <p>ID: {data.id}</p>
                    <p>Name: {data.name}</p>
                </>
            )}
        </div>
    )
}

export default Index