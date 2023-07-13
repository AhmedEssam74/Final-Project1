import React, { useEffect, useState } from 'react'
import { Col, Row, Tooltip } from 'react-bootstrap'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { getStatusData } from '../../services/api';

const NumRecordAndUsers = () => {
    const [statusUserYear, setStatuseUserYear] = useState('')
    const [statusRecordsYear, setStatuseRecordsYear] = useState('')

    const AdminStatus = async () => {
        try {
            const res = await getStatusData();
            setStatuseUserYear(res.data.response.usersYearGraph)
            setStatuseRecordsYear(res.data.response.recordsYearGraph)
        } catch (error) {
            console.log("Error", error);
        }
    }
    useEffect(() => {
        AdminStatus()
    }, [])

    const data = [
        {
            "name": "january",
            "usersYearGraph": statusUserYear.january,
            "recordsYearGraph": statusRecordsYear.january
        },
        {
            "name": "february",
            "usersYearGraph": statusUserYear.february,
            "recordsYearGraph": statusRecordsYear.february
        },
        {
            "name": "march",
            "usersYearGraph": statusUserYear.march,
            "recordsYearGraph": statusRecordsYear.march
        },
        {
            "name": "april",
            "usersYearGraph": statusUserYear.april,
            "recordsYearGraph": statusRecordsYear.april
        },
        {
            "name": "may",
            "usersYearGraph": statusUserYear.may,
            "recordsYearGraph": statusRecordsYear.may
        },
        {
            "name": "june",
            "usersYearGraph": statusUserYear.june,
            "recordsYearGraph": statusRecordsYear.june
        },
        {
            "name": "july",
            "usersYearGraph": statusUserYear.july,
            "recordsYearGraph": statusRecordsYear.july
        },
        {
            "name": "august",
            "usersYearGraph": statusUserYear.august,
            "recordsYearGraph": statusRecordsYear.august
        },
        {
            "name": "september",
            "usersYearGraph": statusUserYear.september,
            "recordsYearGraph": statusRecordsYear.september
        },
        {
            "name": "october",
            "usersYearGraph": statusUserYear.october,
            "recordsYearGraph": statusRecordsYear.october
        },
        {
            "name": "november",
            "usersYearGraph": statusUserYear.november,
            "recordsYearGraph": statusRecordsYear.november
        },
        {
            "name": "december",
            "usersYearGraph": statusUserYear.december,
            "recordsYearGraph": statusRecordsYear.december
        },
    ]

    return (
        <Row>
            <Col lg='12' md='12' sm='12'>
                <BarChart width={1000} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickCount='6' type="number" domain={[0, 50]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="usersYearGraph" fill="#8884d8" />
                    <Bar dataKey="recordsYearGraph" fill="#82ca9d" />
                </BarChart>
            </Col>
        </Row>
    )
}

export default NumRecordAndUsers
