import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ChildSampleComponent from '../../components/ChildSampleComponent'

const Index = () => {

    const [message, setMessage] = useState("Hello from parent")

    const router = useRouter();
    const { query } = router;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (query.data) {
            setData(JSON.parse(query.data));
        }
    }, [query.data])

    const updateMessage = (newMessage) => {
        setMessage(newMessage)
    }

    return (
        <div>
            <h1>MyLoan Page</h1>
            {data && (
                <>
                    <p>ID: {data.id}</p>
                    <p>Name: {data.name}</p>
                </>
            )}

            <ChildSampleComponent message={message} updateMessage={updateMessage} />
        </div>
    )
}

export default Index