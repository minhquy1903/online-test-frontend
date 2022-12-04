import React, { useEffect } from 'react';
import { ToolBox } from './ToolBox';
import { Link, Outlet } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

import './index.scss';
import { Button, Stack, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { questionActions } from 'redux/slides/questionSlice';

const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'question', headerName: 'question', flex: 10, sortable: false },
    { field: 'type', headerName: 'Type', flex: 1.5, sortable: false },
    {
        field: 'subject',
        headerName: 'Subject',
        flex: 1.5,
        sortable: false
    },
    {
        field: 'action',
        headerName: 'Action',
        flex: 3,
        renderCell: () => {
            return (
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" color="info">
                        view
                    </Button>
                    <Button variant="outlined" color="error">
                        Delete
                    </Button>
                </Stack>
            );
        }
    }
];

const rows = [
    { id: 1, title: 'Snow', type: 'Jon', subject: 'Math' },
    { id: 2, title: 'Lannister', type: 'Cersei', subject: 'Math' },
    { id: 3, title: 'Lannister', type: 'Jaime', subject: 'Math' },
    { id: 4, title: 'Stark', type: 'Arya', subject: 'Math' },
    { id: 5, title: 'Targaryen', type: 'Daenerys', subject: 'Math' },
    { id: 6, title: 'Melisandre', type: null, subject: 'Math' },
    { id: 7, title: 'Clifford', type: 'Ferrara', subject: 'Math' },
    { id: 8, title: 'Frances', type: 'Rossini', subject: 'Math' },
    { id: 9, title: 'Roxie', type: 'Harvey', subject: 'Math' }
];

export const Question = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.question.questions);

    useEffect(() => {
        dispatch(questionActions.getQuestions({}));
    }, [dispatch]);

    return (
        <Box>
            <ToolBox />
            <Box sx={{ height: 'auto', overflow: 'auto', width: '100%', marginTop: 2 }}>
                <DataGrid rows={questions} columns={columns} pageSize={10} checkboxSelection disableColumnMenu autoHeight={true} />
            </Box>
            {/* <Outlet /> */}
        </Box>
    );
};

// const QuestionTableTitle = () => {
//     return <div className="question-table-title"></div>;
// };

// const QuestionListItem = () => {
//     return <div className="question-list-item"></div>;
// };
