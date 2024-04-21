import React, { useState, useEffect, useCallback } from 'react';
import parse from 'html-react-parser';
import { Container } from 'react-bootstrap';

const TermsNConditions = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchData = useCallback(() => {
        fetch(`${apiUrl}/admin/getAllPages`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                const termsAndConditionsPage = data.data.find(page => page.pageName === "termsAndConditions");
                setData(termsAndConditionsPage?.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container className='my-3'>
            {loading ? <div className='text-center text-secondary loading'>Loading...</div> : parse(data)}
        </Container>
    );
}

export default TermsNConditions;
