// hooks.ts
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from './configureStore';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
