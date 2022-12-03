import React from 'react';
import Box from '@mui/material/Box';

import { Grid, IconButton } from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

const answers = ['a', 'b', 'c', 'd'];

const QuestionCreator = (props) => {
    const dispatch = useDispatch();

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

    const saveQuestion = (value) => {
        console.log('question', value.target.value);
    };

    return (
        <div className="test-creator">
            <div className="wrapper-create-question">
                <form noValidate onSubmit={formik.handleSubmit}>
                    <div className="test-form-wrapper">
                        <div className="question-form">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className="text-answer">
                                        <label className="label-question" htmlFor="question">
                                            Question Description
                                        </label>

                                        <div className="textarea-input">
                                            <textarea
                                                id="question"
                                                rows={4}
                                                placeholder="Type your question"
                                                onChange={formik.handleChange}
                                                value={formik.values.question}
                                                onBlur={saveQuestion}
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
                                    {answers.map((answer) => (
                                        <Grid item xs={6}>
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

                        <div className="test-form">fasdfsafasdfd</div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuestionCreator;
