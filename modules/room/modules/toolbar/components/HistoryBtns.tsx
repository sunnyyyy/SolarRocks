import { FaRedo, FaUndo } from 'react-icons/fa';

import { useMyMoves } from '@/common/recoil/room';
import { useSavedMoves } from '@/common/recoil/savedMoves';

import { useRefs } from '../../../hooks/useRefs';

import { Tooltip } from '@mui/material';

const HistoryBtns = () => {
  const { redoRef, undoRef } = useRefs();

  const { myMoves } = useMyMoves();
  const savedMoves = useSavedMoves();

  return (
    <>
    <Tooltip title="Redo">
      <button
        className="btn-icon text-xl"
        ref={redoRef}
        disabled={!savedMoves.length}
      >
        <FaRedo />
      </button>
      </Tooltip>
      <Tooltip title="Undo">
      <button
        className="btn-icon text-xl"
        ref={undoRef}
        disabled={!myMoves.length}
      >
        <FaUndo />
      </button>
      </Tooltip>
    </>
  );
};

export default HistoryBtns;
