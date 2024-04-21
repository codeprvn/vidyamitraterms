import React, { useState, useEffect, useCallback } from "react";
import { Container } from 'react-bootstrap';
import parse from 'html-react-parser';
import './About.css';

export function AboutPage() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(() => {
        fetch('https://manage.vidyamitraguide.com:8081/admin/getAllPages')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                const aboutUsPage = data.data.find(page => page.pageName === "aboutUs");
                setData(aboutUsPage?.data);
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
