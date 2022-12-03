import { SearchBar } from 'components/SearchBar/index';
import { Link } from 'react-router-dom';
import { Box, FormControl, Select, MenuItem, InputLabel, Stack, Button } from '@mui/material';

import React from 'react';

export const ToolBox = () => {
    const [questionType, setQuestionType] = React.useState('');
    const [subject, setSubject] = React.useState('');

    const handleChangeType = (event) => {
        setQuestionType(event.target.value);
    };

    const handleChangeSubject = (event) => {
        setQuestionType(event.target.value);
    };

    return (
        <Box className="tool-box" sx={{ display: 'flex' }}>
            <SearchBar />
            <Stack spacing={2} direction="row">
                <Box sx={{ heightMax: 40, minWidth: 150, display: 'flex' }}>
                    <FormControl size="small" fullWidth>
                        <InputLabel id="type-select-label">Type</InputLabel>
                        <Select labelId="type-select" id="type-select" value={questionType} label="Type" onChange={handleChangeType}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ heightMax: 40, minWidth: 150, display: 'flex' }}>
                    <FormControl size="small" fullWidth>
                        <InputLabel id="select-label">Subject</InputLabel>
                        <Select labelId="subject-select" id="subject-select" value={subject} label="Subject" onChange={handleChangeSubject}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Link to={'/question/create'}>
                    <Button variant="contained" color="success">
                        Create
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
};
