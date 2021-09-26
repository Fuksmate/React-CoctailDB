import { useState } from 'react'
import { useQuery } from 'react-query'
import React from 'react';

import Item from './components/Item'
import Grid from '@material-ui/core/Grid';
import { Wrapper} from './App.style';

import './App.style.ts';
//components



const getProducts = async () =>
  await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')).json();


const App = () => {
  const { data, isLoading, error } = useQuery(
    'products',
    getProducts

  );
  data?.drinks.map((item: string) =>
    console.log(item)
  );


  return (
    <Wrapper>
    <Grid container spacing={5}>
    {data?.drinks.map((item: any) =>
      <Grid item key={item.id} xs={12} sm={4}>
        <Item item={item}/>
      </Grid>
      )}
    </Grid>
  </Wrapper>
  );
}

export default App;