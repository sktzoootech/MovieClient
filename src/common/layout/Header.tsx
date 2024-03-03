import movielogo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>                        
            <div className="text-center"><img src={movielogo} className="mx-auto w-72 mt-5" /></div>
        </header>
    )
}

export default Header;