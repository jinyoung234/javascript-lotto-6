import { LOTTO_RULES } from '../constants/lottoGame.js';
import AppError from '../error/customErrors/AppError.js';

export const BONUS_NUMBER_VALIDATION_TYPES = {
  bonusNumberRange: {
    isValid({ bonusNumber }) {
      return bonusNumber >= LOTTO_RULES.minNumber && bonusNumber <= LOTTO_RULES.maxNumber;
    },
    errorMessage: `보너스 번호의 범위는 ${LOTTO_RULES.minNumber} ~ ${LOTTO_RULES.maxNumber}이여야 합니다.`,
  },

  duplicateBonusNumber: {
    isValid({ bonusNumber, winningLottoNumber }) {
      return !winningLottoNumber.includes(bonusNumber);
    },
    errorMessage: '당첨 번호와 보너스 번호가 서로 중복되는 번호가 있습니다.',
  },
};

export const validateBonusNumber = ({ bonusNumber, winningLottoNumber }) => {
  Object.values(BONUS_NUMBER_VALIDATION_TYPES).forEach(({ isValid, errorMessage }) => {
    if (!isValid({ bonusNumber, winningLottoNumber })) {
      throw new AppError(errorMessage);
    }
  });
};