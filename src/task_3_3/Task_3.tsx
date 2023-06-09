import {ChangeEvent, useEffect, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';

//find the problem and fix it as part of composition optimization, memo, children

export const Task_3_3 = () => {
  console.log('Task 3')
  const [value, setValue] = useState('');

  let onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <div>Lags when change value</div>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  );
}

