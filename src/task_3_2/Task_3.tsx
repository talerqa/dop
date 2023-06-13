import {ChangeEvent, memo, useCallback, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';

//find the problem and fix it as part of composition optimization, memo, children

export const Task_3_2 = () => {
  console.log('Task 3')
  return (
    <Wrapper>
      <div>Lags when change value</div>
      <SlowComponent/>
    </Wrapper>
  );
}

const Wrapper = ({children } : any) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), [value])
  return (
    <div>
      <input type="text" value={value} onChange={onChange}/>
      {children}
    </div>
  )
}
