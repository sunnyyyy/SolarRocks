import { useRef, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineSmile} from 'react-icons/ai';
import {GiStoneStack}  from 'react-icons/gi';
import { GiBarbedSun } from 'react-icons/gi';
import { useClickAway } from 'react-use';
import { useEffect } from 'react';
import { useBoardPosition } from '../../board/hooks/useBoardPosition';
import { optimizeImage } from '@/common/lib/optimizeImage';
import { getPos } from '@/common/lib/getPos';
import { useMoveImage } from '../../../hooks/useMoveImage';
import { CANVAS_SIZE } from '@/common/constants/canvasSize';

import { useOptions } from '@/common/recoil/options';
import { useViewportSize } from '@/common/hooks/useViewportSize';
import { useModal } from '@/modules/modal';

import { useRefs } from '../../../hooks/useRefs';
import { useRouter } from 'next/router';

import { Tooltip } from '@mui/material';
import { useCtx } from '../../board/hooks/useCtx';
import Stickerimg from '@/public/stickersimg';

const StickerSelector = () => {
    

 
    const handleImageInput = () => {
          if (MouseEvent) {
            const img = Stickerimg.stickers.rocks;
            const { setMoveImage } = useMoveImage();         
         }
      };
  

  return (
      <Tooltip title="Sticker">
      <button
        className="btn-icon text-xl"
        onClick = {handleImageInput}
      >
        <AiOutlineSmile />
      </button>
      </Tooltip>
        );
};

export default StickerSelector;
