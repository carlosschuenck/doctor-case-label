import React, { useState } from 'react';
import MainBarComponent from '../../components/MainBar.component';
import YouAreDoneComponent from '../../components/YouAreDone.component';
import ElectronicHealthRecordForm from './ElectronicHealthRecordForm';

function ElectronicHealthRecordPage(){

  const [isThereNext, setIsThereNext] = useState<boolean>(true);
  return(
    <>
      <MainBarComponent></MainBarComponent>
      { 
        isThereNext ?
          <ElectronicHealthRecordForm setIsThereNext={setIsThereNext}/> : 
          <YouAreDoneComponent />
      }
    </>
  )
}

export default ElectronicHealthRecordPage;