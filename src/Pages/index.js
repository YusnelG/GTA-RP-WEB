import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import "../styles/App.css";

export const Index = () => {

    return (
        <>
        <Header />
        <div className="banner">
			<h1 className='text-banner'>GTA RP-RPG CUBA</h1>
		</div>
        <div className="about" id='about'>
		<div className='title'>
			<h3>Sobre RP</h3>
		</div>
		<div className="container">
			<div>
				<div className="col-md-6 about-grid-1">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="col-md-6 about-grid-2">
				</div>
			</div>
		</div>
	</div>
	<div className='about-2'>
		<div className='title' id='platform'>
			<h3>Plataformas</h3>
		</div>
		<div className='plataforms'>
			<div className='PC'>
				<h3 className='text-platform'>PC</h3>
			</div>
			<div className='Android'>
				<h3 className='text-platform'>Android</h3>
			</div>
			<div className='prox'>
				<h3 className='text-platform'>?</h3>
			</div>
		</div>
	</div>
	<div className='gallery'>
		<div className='title' id='gallery'>
			<h3>Galeria</h3>
		</div>
		<div className='gallery-img'>
			<Gallery id={1}/>
			<Gallery id={2}/>
			<Gallery id={3}/>
			<Gallery id={4}/>
		</div>
		<div className='gallery-img'>
			<Gallery id={1}/>
			<Gallery id={2}/>
			<Gallery id={3}/>
			<Gallery id={4}/>
		</div>
	</div>
        <Footer />
        </>
    );
}