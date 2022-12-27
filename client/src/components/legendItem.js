import { Box, Grid } from '@mui/material';
import * as React from 'react'

const LegendItem = (props) => {
    const {title, color} = props;
    const cust_style =  {
        backgroundColor: color,
    }
    console.log(title, color);
    return (
        <React.Fragment>
            <Grid container sx={12} style={{paddingBottom: "2px"}}>
                <Grid item sx={10} display="flex" style={{ padding: '2px', minWidth: "200px", flexDirection: "column", justifyContent: "center" }}>
                    {title}
                </Grid>
                <Grid item sx={2}>
                    <Box sx={{ p: 2 }} style={cust_style}> </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default LegendItem;