import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LegendItem from './legendItem';

const legend = () => {
    return (
        <div>
            <Grid container direction="column">
                <LegendItem title="Black Background" color="gray" />
                <LegendItem title="Abdominal" color="#D28C8C" />
                <LegendItem title="Liver" color="#FF7272" />
                <LegendItem title="Gastrointestinal Tract" color="#E7469C" />
                <LegendItem title="Fat" color="#BAB74B" />
                <LegendItem title="Grasper" color="#AAFF00" />
                <LegendItem title="Connective Tissue" color="#FF5500" />
                <LegendItem title="Blood" color="#FF0000" />
                <LegendItem title="Cystic Duct" color="#ffff00" />
                <LegendItem title="L-hook Electrocautery" color="#A9FFB8" />
                <LegendItem title="Gallbladder" color="#FFA0A5" />
                <LegendItem title="Hepatic Vein" color="#003280" />
                <LegendItem title="Liver Ligament" color="#6F4A00" />
            </Grid>

        </div >
    );
}

export default legend;