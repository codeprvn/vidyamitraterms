import React from 'react';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { Container } from 'react-bootstrap';

const TermsNConditions = () => {
    const[data, setData] = useState('');
    const [loding, setLoding ] = useState(true)

    useEffect(() => {
        fetch('https://manage.vidyamitraguide.com:8082/student/getTermsAndConditions')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setLoding(false);
            setData(data.termsAndConditions);
            
          });
      }, []);

  return (
    <Container className='my-3'>
      {loding?<div className='text-center text-secondary loading'>Loading...</div>: parse(data)}
    </Container>
  )
}

export default TermsNConditions
