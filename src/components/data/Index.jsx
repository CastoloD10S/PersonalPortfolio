
import {
	FaGithub,
	FaRegBookmark,
	FaRegUser,
	FaSteam,
	FaInbox,
	FaEnvelope,
	FaBriefcase,
	FaBookOpen,
	FaPuzzlePiece,
	FaLightbulb,
} from 'react-icons/fa';
import { IoGridOutline } from 'react-icons/io5';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.jpeg';

//info
export const personalInfo = {
	name: 'Franco Leiva Silva',
	age: 28,
	location: 'Peñaflor, Santiago, Chile',
	occupation: 'Full-Stack Developer (full time) / Baterista (a veces)',
	education: 'Analista Programador - Duoc UC 2025 - presente',
	overview:
		'Hola, soy Franco Leiva Silva, soy un desarrollador full-stack apasionado por la tecnología que siempre busca proyectos desafiantes',
	socialLinks: [
		{
			id: 1,
			name: 'GitHub',
			url: 'https://github.com/CastoloD10S',
			icon: <FaGithub size={26} />,
		},
		{
			id: 2,
			name: 'Steam',
			url: 'https://steamcommunity.com/profiles/76561198084382525/',
			icon: <FaSteam size={26} />,
		},
		
	],
	contactEmail: 'fleiva977@gmail.com',
	phoneNumber: '+9 55132899',
	photoSrc: 'src/assets/profile.jpeg',
    
};

//tabs
export const tabs = [
	{
		id: 1,
		name: 'Proyectos',
		icon: FaPuzzlePiece,
	},
	{
		id: 2,
		name: 'Experiencia',
		icon: FaBriefcase,
	},
	{
		id: 3,
		name: 'Habilidades',
		icon: FaLightbulb,
	},
	{
		id: 4,
		name: 'Contacto',
		icon: FaEnvelope,
	},
];

//proyectos
export const projects = [

  { id: 1, 
	title: 'DreamySips', 
	img: project1, 
	tech: ['Java', 'spring boot', 'MySQL'], 
	url: 'https://github.com/bananaTerracotaPie10/dreamySips-Banares-Leiva-010D.git' },

  { id: 2, 
	title: 'TecnoFit', 
	img: project2, 
	tech: ['html', 'css', 'js'], 
	url: 'https://github.com/CastoloD10S/Prueba_TecnoFit.git' },

  { id: 3, 
	title: 'Prueba Formativa Perros y Gatos', 
	img: project3, 
	tech: ['html', 'css', 'js'], 
	url: 'https://github.com/IgnacioLobos-MC/PruebaFormativa_PerrosyGatos.git' 
},

	{ id: 4,
	  title: 'Sin Paciencia',
	  img: project4,
	  tech: ['(mi banda)'],
	  url: 'https://www.instagram.com/_sin.paciencia_/'  
	}


]

//experiencia
export const experience = [
	{
		id: 1,
		company: 'Industrias de alimentos Arcor Dos en Uno',
		position: 'Analista de exportaciones',
		period: '2021-2024',
		description: 'Encargado de gestionar y coordinar las exportaciones de productos alimenticios, asegurando el cumplimiento de normativas internacionales y optimizando los procesos logísticos para garantizar entregas eficientes y a tiempo.',
	},

	{
		id: 2,
		company: 'Homecenter Sodimac',
		position: 'Operativo prevencion perdidas',
		period: '2025-presente',
		description: 'Encargado de velar por el cumplimiento los protocolos de seguridad y prevencion de perdidas en la tienda',
	}
]

//habilidades
export const skills = [ 'Python', 'Java', 'JavaScript', 'React', 'Spring Boot']


