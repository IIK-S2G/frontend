import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { selectTheme, changeTheme, resetTheme } from '../redux/reducers/themeSlice';

const ThemeSwitch = (): JSX.Element => {
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        theme > 0 ? dispatch(resetTheme()) : dispatch(changeTheme())
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