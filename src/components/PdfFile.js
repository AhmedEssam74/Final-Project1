import React, { useState } from 'react';
// import sss from './/../Results/Overhang.pdf'

const PdfFile = () => {
    const [pdfData, setPdfData] = useState(null);

    const handleFileChange = (event) => {
        const pdfFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(pdfFile);
        reader.onloadend = () => {
            const base64data = reader.result;
            setPdfData(base64data);
            localStorage.setItem('myPDFFile', base64data);
        };
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {pdfData && (
                <div>
                    <embed src={pdfData} type="application/pdf" width="100%" height="600px" />
                    <a href={pdfData} target="_blank" rel="noopener noreferrer">Open PDF</a>
                </div>
            )}
        </div>
    );
}

export default PdfFile
