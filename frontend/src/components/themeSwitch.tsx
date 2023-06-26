import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setTheme, changeTheme, resetTheme } from '../redux/reducers/themeSlice';

const ThemeSwitch = (): JSX.Element => {
    const theme = useAppSelector(setTheme)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        theme.payload > 0 ? dispatch(resetTheme()) : dispatch(changeTheme())
    }

    return (
        <div className='flex justify-center'>
            <button onClick={handleClick}>
                {theme ? '🌒':'🌔'}
            </button>
        </div>
    )
}

export default ThemeSwitch