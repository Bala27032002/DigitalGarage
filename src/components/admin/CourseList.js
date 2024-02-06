  import React, { useState, useEffect } from "react";
  import { Button, Modal, Form } from "react-bootstrap";
  import axios from "axios";
  import Table from "react-bootstrap/Table";
  import Image from "react-bootstrap/Image";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  import "../admin/Addcourse.css";



  const baseUrl = "http://localhost:4001/api";

  const MyVerticallyCenteredModal = (props) => {
    const [editedTask, setEditedTask] = useState({
      courseName: "",
      description: "",
      duration: "",
      category: "",
      url: "",
    });

    const [imageUrl, setImageUrl] = useState("");
    

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === "url") {
        setImageUrl(value); // Update the image URL state when "Task URL" field is changed
      }
      setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const updateTask = async () => {
      try {
        const response = await axios.patch(
          `${baseUrl}/tasks/${props.selectedTask._id}`,
          editedTask
        );

        if (response.status === 200) {
          props.onHide();
        } else {
          console.error("Failed to update the task.");
        }
      } catch (error) {
        console.error("Error occurred while updating the task:", error);
      }
    };

    useEffect(() => {
      if (props.selectedTask && Object.keys(props.selectedTask).length !== 0) {
        const { courseName, description, duration, category, url } =
          props.selectedTask;
        setEditedTask({ courseName, description, duration, category, url });
      }
    }, [props.selectedTask]);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby=""
        centered
        style={{ zIndex: "1" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ border: "1px solid black" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Coursename</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course name"
                name="courseName"
                value={editedTask.courseName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course Description"
                name="description"
                value={editedTask.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Course Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course Duration"
                name="duration"
                value={editedTask.duration}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Course Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course Category"
                name="category"
                value={editedTask.category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Course Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task Url"
                name="url"
                value={editedTask.url}
                onChange={handleInputChange}
              />
              {imageUrl && <Image src={imageUrl} alt="Preview" thumbnail />}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-end">
            <Button variant="primary" type="button" onClick={updateTask}>
              Update Task
            </Button>
            <Button variant="danger" type="button" onClick={props.onHide} style={{margin:"10px"}} >
              Cancel
              <DeleteIcon />
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  const TasksList = () => {
    const [tasksList, setTasksList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredTasks, setFilteredTasks] = useState([]); // Use filteredTasks to display filtered results
    const handleSearchChange = (event) => {
      const keyword = event.target.value;
      setSearchKeyword(keyword);
  
      if (keyword) {
        const filtered = tasksList.filter(
          (task) =>
            task.courseName.toLowerCase().includes(keyword.toLowerCase()) ||
            task.category.toLowerCase().includes(keyword.toLowerCase())


        );
        setFilteredTasks(filtered);
      } else {
        setFilteredTasks(tasksList);
      }
    };
  
    useEffect(() => {
      fetchTasks(searchKeyword);
    }, [searchKeyword]);
  
  

    const exportToExcel = () => {
      const csvData = tasksList.map((task) => {
        return [
          task.courseName,
          task.description,
          task.category,
          task.url,
          task.duration,
        ];
      });
    
      const csvContent = csvData.map((row) => row.join(",")).join("\n");
      const csvBlob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    
      const csvFileName = "tasks.csv";
      
      const csvLink = document.createElement("a");
      csvLink.href = URL.createObjectURL(csvBlob);
      csvLink.setAttribute("download", csvFileName);
      document.body.appendChild(csvLink);
      csvLink.click();
      document.body.removeChild(csvLink);
    };
    

    const updateTask = (task) => {
      setSelectedTask(task);
      setModalShow(true);
    };

    const deleteTask = async (task) => {
      try {
        const response = await fetch(`${baseUrl}/tasks/${task._id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setTasksList((prevTasks) =>
            prevTasks.filter((t) => t._id !== task._id)
          );
        } else {
          console.error("Failed to delete the task.");
        }
      } catch (error) {
        console.error("Error occurred while deleting the task:", error);
      }
    };

    const fetchTasks = async (keyword = "") => {
      try {
        const response = await fetch(`${baseUrl}/tasks?search=${keyword}`);
        if (response.ok) {
          const tasks = await response.json();
          setTasksList(tasks);
        } else {
          console.error("Failed to fetch tasks from the server.");
        }
      } catch (error) {
        console.error("Error occurred while fetching tasks:", error);
      }
    };
  
    useEffect(() => {
      fetchTasks(searchKeyword);
    }, [searchKeyword]);


    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const showDeleteConfirmationModal = (task) => {
      setSelectedTask(task);
      setShowDeleteConfirmation(true);
    };
  
    const hideDeleteConfirmationModal = () => {
      setSelectedTask(null);
      setShowDeleteConfirmation(false);
    };
  
    const deleteConfirmedTask = async () => {
      if (selectedTask) {
        await deleteTask(selectedTask);
        hideDeleteConfirmationModal();
      }
    };

  


    return (
      <>
      
       <div className="d-flex justify-content-end ">
       <input
          type="text"
          placeholder="Search coursename,categroy"
          onChange={handleSearchChange}
          value={searchKeyword}
 style={{height:"30px",position:"relative",top:"25px"}}
       
        />
        <Button
          variant="success"
          onClick={exportToExcel}
          style={{ margin: "20px" }}
        >
          Export to Excel
        </Button>
        </div>

        <Table className="table-bordered">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Coursename</th>
              {/* <th>Description</th> */}
              <th>Category</th>
              <th>Url</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksList &&
              filteredTasks.map((task, index) => (
                <tr key={task._id}>
                  <td>{index + 1}</td>
                  <td>{task.courseName}</td>
                  {/* <td>{task.description}</td> */}
                  <td>{task.category}</td>
                  <td>
                    {task.url && (
                      <Image
                        src={task.url}
                        alt="Task Image"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                        thumbnail
                      />
                    )}
                  </td>
                  <td>{task.duration}</td>
                  <td>
                    <Button
                      style={{
                        margin: "20px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      variant="primary"
                      onClick={() => updateTask(task)}
                    >
                      <EditIcon />
                    </Button>{" "}
                    <Button
                      style={{
                        marginLeft: "20px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      variant="primary"
                      onClick={() => deleteTask(task)}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          selectedTask={selectedTask}
        />

<Modal
        show={showDeleteConfirmation}
        onHide={hideDeleteConfirmationModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the selected task?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideDeleteConfirmationModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteConfirmedTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };

  export default TasksList;
