import React, { useState } from 'react';
import { TextField, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CoursesForm() {
  const [courseData, setCourseData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const addTask = () => {
    if (title && description && image) {
      const newTask = {
        title: title,
        description: description,
        image: image
      };

      setCourseData([...courseData, newTask]);

      // Clear form fields
      setTitle('');
      setDescription('');
      setImage('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  const deleteTask = (index) => {
    const updatedData = [...courseData];
    updatedData.splice(index, 1);
    setCourseData(updatedData);
  };

  const editTask = (index) => {
    const task = courseData[index];
    setTitle(task.title);
    setDescription(task.description);
    setImage(task.image);
  };

  return (
    <div className="container">
      <h1 style={{textAlign:"center",color:"orangered"}}>Course Management</h1>

      <form className="form">
        <TextField label="Course Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth /><br/><br/>

        <TextField label="Course Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth multiline /><br/><br/>

        <TextField label="Image URL" type="url" value={image} onChange={(e) => setImage(e.target.value)} required fullWidth /><br/><br/>

        <Button variant="contained" onClick={addTask}>Add Task</Button>
      </form>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Title</TableCell>
            <TableCell>Course Description</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseData.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                <img src={task.image} alt={task.title} style={{ width: '100px' }} />
              </TableCell>
              <TableCell>
                <Button variant="outlined" style={{margin:"8px"}} startIcon={<DeleteIcon />} onClick={() => deleteTask(index)}>
                  Delete
                </Button>
                <Button variant="outlined" startIcon={<EditIcon />} onClick={() => editTask(index)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CoursesForm;
