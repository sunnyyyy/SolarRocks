import { CgScreen } from 'react-icons/cg';

import { useModal } from '@/modules/modal';

import BackgroundModal from '../modals/BackgroundModal';

import { Tooltip } from '@mui/material';

const BackgroundPicker = () => {
  const { openModal } = useModal();

  return (
    <Tooltip title="Change Background">
    <button className="btn-icon" onClick={() => openModal(<BackgroundModal />)}>
      <CgScreen />
    </button>
    </Tooltip>
  );
};

export default BackgroundPicker;
