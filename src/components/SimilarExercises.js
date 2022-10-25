import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

    const targetMuscle = targetMuscleExercises.slice(0, 6)
    const withEquipment = equipmentExercises.slice(0, 6)

    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative', overflowX: 'auto' }}>
                {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscle} /> : <Loader />}
            </Stack>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative', overflowX: 'scroll' }}>
                {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={withEquipment} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises