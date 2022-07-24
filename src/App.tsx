import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { todoListState } from './recoil/states';
import { useRecoilValue } from 'recoil';

function App() {

  const {pending, done} = useRecoilValue(todoListState)

  return (
   <>
    
   </>
  );
}

export default App;
