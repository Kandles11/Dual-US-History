import react from 'react';
import '../index.css'
import { usHist1302Data } from './data/usHist1302Data.js'

import Table from './Table'



function usHist1302() {
  return (
    <div className="TestPage">
      <body> 
        <h1>US History 1302!</h1>
        <h2>Voice-Overs</h2>
          <h3>Chapter 32 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 32']} />
          <h3>Chapter 17 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 17']} />
        <h2>Revel</h2>
          <h3>Chapter 32 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 32']} />
          <h3>Chapter 18 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 18']} />
          <h3>Chapter 19 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 19']} />
          <h3>Chapter 20 RE</h3>
      </body>
    </div>
  );
}

export default usHist1302;
