import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionCreator from '../QuestionCreator/QuestionCreator';

export default function QuestionNav() {
    const [questions, setQuestions] = React.useState([{ index: 0 }]);
    const [tab, setTab] = React.useState(0);

    const handleAddQuestion = () => {
        const number = questions.length;
        setQuestions([...questions, { index: number + 1 }]);
    };

    const handleRemoveQuestion = (index) => {
        const list = [...questions];
        list.splice(index, 1);
        console.log(list);
        setQuestions(list);
    };

    const handleChangeTab = (index) => {
        setTab(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', display: 'flex', height: '100%' }}>
            <div className="question-nav">
                <div className="question-tabs">
                    {questions.map((question, index) => (
                        <div
                            className={tab === index ? 'question-list-item-active' : 'question-list-item'}
                            onClick={() => handleChangeTab(index)}
                            aria-hidden="true"
                        >
                            <span>Question {index + 1}</span>
                            {questions.length > 1 ? (
                                <IconButton sx={{ minWidth: 30 }}>
                                    <DeleteIcon onClick={() => handleRemoveQuestion(index)} sx={{ color: '#8c8c8c' }} />
                                </IconButton>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div style={{ padding: '0 20px', marginTop: 10 }}>
                    <IconButton variant="contained" onClick={handleAddQuestion}>
                        <AddBoxIcon />
                    </IconButton>
                </div>
            </div>

            <QuestionCreator tab={tab} />
        </Box>
    );
}
