import React, { useState } from 'react';

import { Grid, IconButton, Select, MenuItem, Stack, Box, FormControl, InputLabel, Button } from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import './index.scss';
import { questionActions } from 'redux/slides/questionSlice';

const SUBJECTS = [
    {
        id: 1,
        name: 'Maths'
    },
    {
        id: 2,
        name: 'English'
    },
    {
        id: 3,
        name: 'Physics'
    }
];

const QUESTION_TYPE = [
    {
        id: 1,
        name: 'Quiz'
    },
    {
        id: 2,
        name: 'Essay'
    }
];

const answers = ['a', 'b', 'c', 'd'];

export const CreateQuestion = (props) => {
    const dispatch = useDispatch();
    const [questionType, setQuestionType] = useState(1);
    const [subject, setSubject] = useState(1);

    const formik = useFormik({
        initialValues: {
            question: '',
            a: '',
            b: '',
            c: '',
            d: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const handleBlur = () => {
        console.log(formik.values);
    };

    const handleChangeType = (event) => {
        const {
            target: { value }
        } = event;
        setQuestionType(value);
    };

    const handleChangeSubject = (event) => {
        const {
            target: { value }
        } = event;
        setSubject(value);
    };

    const saveQuestion = () => {
        const question = {
            ...formik.values,
            type: questionType,
            subject: subject
        };

        dispatch(questionActions.createQuestion(question));
        console.log('submit', question);
    };

    return (
        <div className="test-creator">
            <Box sx={{ width: 'fit-content', marginLeft: 'auto', padding: '10px 20px' }}>
                <Stack spacing={2} direction="row">
                    <Box sx={{ heightMax: 40, minWidth: 150, display: 'flex' }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="type-select-label">Type</InputLabel>
                            <Select labelId="type-select" id="type-select" value={questionType} label="Type" onChange={handleChangeType}>
                                {QUESTION_TYPE.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ heightMax: 40, minWidth: 150, display: 'flex' }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="select-label">Subject</InputLabel>
                            <Select
                                labelId="subject-select"
                                id="subject-select"
                                value={subject}
                                label="Subject"
                                onChange={handleChangeSubject}
                            >
                                {SUBJECTS.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Button variant="contained" color="success" onClick={() => saveQuestion()}>
                        Save
                    </Button>
                </Stack>
            </Box>
            <div className="wrapper-create-question">
                <form noValidate onSubmit={formik.handleSubmit}>
                    <div className="test-form-wrapper">
                        <div className="question-form">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className="text-answer">
                                        <div className="textarea-input">
                                            <textarea
                                                id="question"
                                                rows={4}
                                                placeholder="Type your question"
                                                onChange={formik.handleChange}
                                                value={formik.values.question}
                                                onBlur={handleBlur}
                                            />
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <input hidden accept="image/*" type="file" />
                                                <AddPhotoAlternateIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="question-item"></div>
                                </Grid>
                                <Grid item xs={12} spacing={3} container>
                                    {answers.map((answer, index) => (
                                        <Grid key={index} item xs={6}>
                                            <div className="text-answer">
                                                <div className="label-test">
                                                    <label htmlFor="correct-answer">{answer.toUpperCase()}</label>
                                                    <input
                                                        className="correct-answer"
                                                        type="radio"
                                                        id={`correctAnswer`}
                                                        name="correctAnswer"
                                                        onChange={formik.handleChange}
                                                        value={answer}
                                                    />
                                                </div>
                                                <div className="textarea-input">
                                                    <textarea
                                                        id={answer}
                                                        rows={4}
                                                        placeholder={`Add answer ${answer}`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.answer}
                                                        onBlur={handleBlur}
                                                    />
                                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                                        <input hidden accept="image/*" type="file" />
                                                        <AddPhotoAlternateIcon />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
