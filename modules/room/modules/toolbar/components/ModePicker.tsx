import { useEffect, useState } from 'react';

import { AiOutlineSelect } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { FaEraser } from 'react-icons/fa';
import { AiOutlineSmile} from 'react-icons/ai';

import { useOptions, useSetSelection } from '@/common/recoil/options';

import { Tooltip } from '@mui/material';

const ModePicker = () => {
  const [options, setOptions] = useOptions();
  const { clearSelection } = useSetSelection();


  useEffect(() => {
    clearSelection();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.mode]);

  return (
    <>
    <Tooltip title="Draw">
      <button
        className={`btn-icon text-xl ${
          options.mode === 'draw' && 'bg-green-400'
        }`}
        onClick={() => {
          setOptions((prev) => ({
            ...prev,
            mode: 'draw',
          }));
        }}
      >
        <BsPencilFill />
      </button>
      </Tooltip>
      <Tooltip title="Eraser">
      <button
        className={`btn-icon text-xl ${
          options.mode === 'eraser' && 'bg-green-400'
        }`}
        onClick={() => {
          setOptions((prev) => ({
            ...prev,
            mode: 'eraser',
          }));
        }}
      >
        <FaEraser />
      </button>
      </Tooltip>
      <Tooltip title="Area select">
      <button
        className={`btn-icon text-2xl ${
          options.mode === 'select' && 'bg-green-400'
        }`}
        onClick={() => {
          setOptions((prev) => ({
            ...prev,
            mode: 'select',
          }));
        }}
      >
        <AiOutlineSelect />
      </button>
      </Tooltip>
      
    </>
  );
};

export default ModePicker;
