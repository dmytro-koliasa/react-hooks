import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppState } from '@/shared/config/store/makeStore';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
