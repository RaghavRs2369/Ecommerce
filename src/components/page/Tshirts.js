import { Grid } from '@mui/material'
import React from 'react'

function Tshirts() {
  return (
    <Grid container>
      <Grid md={6} xs={6} xl={6} sx={{
        padding: '10%',
        fontSize: '2rem',
        listStyle: 'none'
      }} >
        <li style={{
          margin: '2%'
        }}>Brand: <span style={{
          color:'rgb(90, 159, 33)'
        }}>OTTO</span> </li>
        <li style={{
          margin: '2%'
        }}>Size: <span style={{
          color:'rgb(90, 159, 33)'
        }}>XXL</span> </li>
        <li style={{
          margin: '2%'
        }}>Price:  <span style={{
          color:'rgb(90, 159, 33)'
        }}>$23</span> </li>
      </Grid>
      <Grid md={6} xs={6} xl={6}>
        <img alt='Tshirts' src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
      </Grid>
    </Grid>
  )
}

export default Tshirts