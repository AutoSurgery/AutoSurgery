import React from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from "axios"
import AppBar from '@mui/material/AppBar';
import { Grid } from "@mui/material";
import Legend from './legend';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Homepage = (props) => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [detected, setDetected] = useState()
    const [semantic, setSemantic] = useState()
    const [toolslist, setTools] = useState()
    const [processing1, setProcessing1] = useState(false)
    const [processing2, setProcessing2] = useState(false)


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setDetected();
        setSemantic();
        console.log("yo" + e.target.files)
        setSelectedFile(e.target.files[0])
    }


    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        console.log(selectedFile);
        const objectUrl = URL.createObjectURL(selectedFile)
        console.log(objectUrl);
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function detect() {
        // setProcessing(true);
        // console.log("sleep completed");
        // console.log("processing", new_processing, processing)
        console.log(selectedFile)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        let formData = new FormData();
        formData.append(
            "file",
            selectedFile
        )

        axios.post('http://localhost:8000/object-to-img', formData, config)
            // axios.post('http://18.176.111.18:8000/object-to-img', formData, config)
            .then(res => {
                // console.log(res.data.result);
                setProcessing1(true);
                setTools(res.data.result);
                var encode_image = JSON.parse(res.data.img.body)['image'];
                var image = new Image();
                image.src = 'data:image/png;base64,' + encode_image;
                console.log(typeof image)
                setDetected('data:image/png;base64,' + encode_image);
                setProcessing1(false)
            })
            .catch(err => console.log(err));
        axios.post('http://localhost:8000/image-segmentation', formData, config)
            .then(res => {
                setProcessing2(true)
                console.log(res)
                var encode_image = JSON.parse(res.data[1].body)['image'];
                var image = new Image();
                image.src = 'data:image/png;base64,' + encode_image;
                console.log(typeof image)
                setSemantic('data:image/png;base64,' + encode_image);
                setProcessing2(false)
            })
            .catch(err => console.log(err))
        
    }


    return (
        <div className="home">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Auto-Surgery
                    </Typography>
                    <Button color="inherit" onClick={() => props.details.setLoginUser({})}>Logout</Button>
                </Toolbar>
            </AppBar>
            <br />
            <Grid container spacing={2} style={{ paddingLeft: "30px", paddingTop: "10px" }}>
                <Grid xs={11}>
                    <Typography align="center" variant="h3">
                        Welcome {props.details.user.name} !!!
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <div className="homepage">
                    <input type='file' onChange={onSelectFile} /> <br /><br />
                    {selectedFile && <img src={preview} style={{ maxWidth: "800px", maxHeight: "600px" }} />}<br /> <br />
                    <Button variant="contained" color="secondary" onClick={detect} >
                        Detect
                    </Button><br /><br />
                </div>
            </Box>
            {processing1 && processing2 ? (<h1>processing.......</h1>) :
                (<div>
                    {detected && <h1 style={{ paddingLeft: "50px" }}>Detected Image:</h1>}
                    <Grid container spacing={2} style={{ paddingLeft: "200px", paddingTop: "10px" }}>
                        <Grid xs={8}>
                            <div>
                                {detected && <img src={detected} style={{ maxWidth: "800px", maxHeight: "600px" }} />}
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <div>
                                {detected && <h2>Detected tools:</h2>}
                                {detected &&
                                    <ul>{toolslist.length > 0 && toolslist.map((item) => <li key={item}> <h3>{item}</h3> </li>)}</ul>
                                }
                            </div>
                        </Grid>
                    </Grid>
                    {semantic && <h1 style={{ paddingLeft: "50px" }}>Segmented Image:</h1>}<br />
                    <Grid container spacing={2} style={{ paddingLeft: "200px", paddingTop: "10px" }}>
                        <Grid xs={8}>
                            <div>
                                {semantic && <img src={semantic} style={{ maxWidth: "800px", maxHeight: "600px" }} />}
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <div>
                                {semantic && <Legend />}
                            </div>
                        </Grid>
                    </Grid>
                </div>)}
        </div>
    )
}

export default Homepage