import { Container, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainBarComponent from '../../components/MainBar.component';
import YouAreDoneComponent from '../../components/YouAreDone.component';
import { ElectronicHealthRecord } from '../../interfaces/electronic-health-record.interface';
import { findNoLabeled } from '../../services/electronic-health-record.service';
import ElectronicHealthRecordForm from './ElectronicHealthRecordForm';

function ElectronicHealthRecordPage(){

  const [isThereNext, setIsThereNext] = useState<boolean | undefined>(undefined);
  const [ehr, setEhr] = useState<ElectronicHealthRecord | undefined>();

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await findNoLabeled();
    if(response.status === 200){
      setEhr(response.data);
      setIsThereNext(true);
    } else {
      setEhr(undefined);
      setIsThereNext(false)
    } 
  }

  const layoutSkeleton = () => {
    return <>
      <Skeleton variant={'text'} animation={'wave'} height={200} />
      <Skeleton variant={'text'} animation={'wave'} />
      <Skeleton variant={'text'} animation={'wave'} />
      <Skeleton variant={'text'} animation={'wave'} />
    </>
  }
  const enableLoading = () => {
    setIsThereNext(undefined);
  }
  return(
    <>
      <MainBarComponent></MainBarComponent>
      <Container maxWidth="xl">
      { 
        isThereNext === undefined ? layoutSkeleton() :
        (isThereNext ?
          <ElectronicHealthRecordForm findNextEhr={fetchData} enableLoading={enableLoading} ehr={ehr}/> : 
          <YouAreDoneComponent />)
      }
      </Container>
    </>
  )
}

export default ElectronicHealthRecordPage;