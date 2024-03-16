import Info from './Widgets/Info'
import MenuButton from './MenuButton'
import QR from './Widgets/QR'
import ToggleMenuButton from './ToggleMenuButton'
import './style.css'
import Exit from './Widgets/Exit'
import Null from './Widgets/Null'

const Menu = () => {

  return (
    <div className='Menu'>
      <ToggleMenuButton />
      <MenuButton widget={<Null />} childName='Null'>
        <svg width="60.000000" height="70.000000" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs/>
          <path id="path" d="M30 15C29.1 15 28.21 15.08 27.33 15.24C26.46 15.4 25.6 15.63 24.78 15.95C23.95 16.26 23.16 16.65 22.42 17.1C21.67 17.56 20.99 18.08 20.35 18.66C19.72 19.24 19.15 19.87 18.66 20.55C18.16 21.23 17.74 21.95 17.4 22.71C17.05 23.47 16.8 24.25 16.62 25.06C16.45 25.86 16.36 26.67 16.36 27.5C16.36 28.32 16.45 29.13 16.62 29.93C16.8 30.74 17.05 31.52 17.4 32.28C17.74 33.04 18.16 33.76 18.66 34.44C19.15 35.12 19.72 35.75 20.35 36.33C20.99 36.91 21.67 37.43 22.42 37.89C23.16 38.34 23.95 38.73 24.78 39.04C25.6 39.36 26.46 39.6 27.33 39.76C28.21 39.92 29.1 40 30 40C30.89 40 31.78 39.92 32.66 39.76C33.53 39.6 34.39 39.36 35.21 39.04C36.04 38.73 36.83 38.34 37.57 37.89C38.32 37.43 39 36.91 39.64 36.33C40.27 35.75 40.84 35.12 41.33 34.44C41.83 33.76 42.25 33.04 42.59 32.28C42.94 31.52 43.19 30.74 43.37 29.93C43.54 29.13 43.63 28.32 43.63 27.5C43.63 26.67 43.54 25.86 43.37 25.06C43.19 24.25 42.94 23.47 42.59 22.71C42.25 21.95 41.83 21.23 41.33 20.55C40.84 19.87 40.27 19.24 39.64 18.66C39 18.08 38.32 17.56 37.57 17.1C36.83 16.65 36.04 16.26 35.21 15.95C34.39 15.63 33.53 15.4 32.66 15.24C31.78 15.08 30.89 15 30 15ZM30 35C29.46 35 28.93 34.95 28.4 34.85C27.87 34.76 27.36 34.61 26.86 34.42C26.37 34.24 25.9 34 25.45 33.73C25 33.46 24.59 33.15 24.21 32.8C23.83 32.45 23.49 32.07 23.19 31.66C22.89 31.25 22.64 30.82 22.44 30.37C22.23 29.91 22.08 29.44 21.97 28.96C21.87 28.48 21.81 27.99 21.81 27.5C21.81 27 21.87 26.52 21.97 26.03C22.08 25.55 22.23 25.08 22.44 24.63C22.64 24.17 22.89 23.74 23.19 23.33C23.49 22.92 23.83 22.54 24.21 22.19C24.59 21.84 25 21.53 25.45 21.26C25.9 20.99 26.37 20.75 26.86 20.57C27.36 20.38 27.87 20.24 28.4 20.14C28.93 20.04 29.46 20 30 20C30.53 20 31.06 20.04 31.59 20.14C32.12 20.24 32.63 20.38 33.13 20.57C33.62 20.75 34.09 20.99 34.54 21.26C34.99 21.53 35.4 21.84 35.78 22.19C36.16 22.54 36.5 22.92 36.8 23.33C37.1 23.74 37.35 24.17 37.55 24.63C37.76 25.08 37.91 25.55 38.02 26.03C38.12 26.52 38.18 27 38.18 27.5C38.18 27.99 38.12 28.48 38.02 28.96C37.91 29.44 37.76 29.91 37.55 30.37C37.35 30.82 37.1 31.25 36.8 31.66C36.5 32.07 36.16 32.45 35.78 32.8C35.4 33.15 34.99 33.46 34.54 33.73C34.09 34 33.62 34.24 33.13 34.42C32.63 34.61 32.12 34.76 31.59 34.85C31.06 34.95 30.53 35 30 35ZM30 0C29.01 0 28.03 0.04 27.06 0.13C26.08 0.22 25.11 0.35 24.14 0.53C23.18 0.7 22.23 0.92 21.29 1.19C20.35 1.45 19.43 1.75 18.52 2.1C17.61 2.44 16.73 2.83 15.86 3.25C14.99 3.68 14.15 4.14 13.34 4.64C12.52 5.14 11.73 5.68 10.97 6.25C10.21 6.82 9.49 7.42 8.79 8.06C8.1 8.7 7.44 9.36 6.82 10.06C6.19 10.75 5.61 11.48 5.06 12.22C4.52 12.97 4.01 13.74 3.55 14.54C3.08 15.33 2.66 16.14 2.29 16.98C1.91 17.81 1.58 18.65 1.29 19.52C1.01 20.38 0.77 21.25 0.58 22.13C0.38 23.02 0.24 23.9 0.14 24.8C0.05 25.7 0 26.59 0 27.5C0 37.31 4.94 47.71 14.31 57.57C18.54 62.05 23.25 66.04 28.44 69.54C28.91 69.84 29.44 70 30.01 70C30.58 70 31.1 69.84 31.57 69.54C36.76 66.03 41.46 62.04 45.68 57.57C55.04 47.71 60 37.31 60 27.5C59.99 26.59 59.95 25.7 59.85 24.8C59.75 23.9 59.61 23.02 59.41 22.13C59.22 21.25 58.98 20.38 58.7 19.52C58.41 18.65 58.08 17.81 57.7 16.98C57.33 16.14 56.91 15.33 56.44 14.54C55.98 13.74 55.47 12.97 54.93 12.22C54.38 11.48 53.8 10.75 53.17 10.06C52.55 9.36 51.89 8.7 51.2 8.06C50.5 7.42 49.78 6.82 49.02 6.25C48.26 5.68 47.47 5.14 46.65 4.64C45.84 4.14 45 3.68 44.13 3.25C43.26 2.83 42.38 2.44 41.47 2.1C40.56 1.75 39.64 1.45 38.7 1.19C37.76 0.92 36.81 0.7 35.85 0.53C34.88 0.35 33.91 0.22 32.93 0.13C31.96 0.04 30.98 0 30 0ZM30 64.37C24.36 60.31 5.45 45.39 5.45 27.5C5.45 26.76 5.49 26.02 5.57 25.29C5.65 24.56 5.76 23.83 5.92 23.11C6.08 22.38 6.27 21.67 6.51 20.96C6.74 20.26 7.01 19.57 7.32 18.88C7.63 18.2 7.97 17.54 8.35 16.89C8.73 16.24 9.14 15.61 9.59 14.99C10.03 14.38 10.51 13.79 11.02 13.22C11.53 12.65 12.07 12.11 12.64 11.59C13.21 11.06 13.8 10.57 14.42 10.1C15.04 9.63 15.69 9.2 16.36 8.79C17.03 8.38 17.72 8 18.42 7.65C19.13 7.3 19.86 6.99 20.6 6.71C21.34 6.43 22.1 6.18 22.87 5.96C23.64 5.75 24.42 5.57 25.21 5.43C26 5.28 26.79 5.18 27.59 5.1C28.39 5.03 29.19 5 30 5C30.8 5 31.6 5.03 32.4 5.1C33.2 5.18 34 5.28 34.78 5.43C35.57 5.57 36.35 5.75 37.12 5.96C37.89 6.18 38.65 6.43 39.39 6.71C40.13 6.99 40.86 7.3 41.57 7.65C42.27 8 42.96 8.38 43.63 8.79C44.3 9.2 44.95 9.63 45.57 10.1C46.19 10.57 46.78 11.06 47.35 11.59C47.92 12.11 48.46 12.65 48.97 13.22C49.48 13.79 49.96 14.38 50.4 14.99C50.85 15.61 51.26 16.24 51.64 16.89C52.02 17.54 52.36 18.2 52.67 18.88C52.98 19.57 53.25 20.26 53.48 20.96C53.72 21.67 53.91 22.38 54.07 23.11C54.23 23.83 54.34 24.56 54.42 25.29C54.5 26.02 54.54 26.76 54.54 27.5C54.54 45.38 35.63 60.31 30 64.37Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
      </MenuButton>
      <MenuButton widget={<Null />} childName='Null'>
        <svg width="65.000000" height="70.000000" viewBox="0 0 65 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs/>
          <path id="path" d="M55.59 9.58C54.09 8.07 52.46 6.72 50.7 5.53C48.94 4.34 47.08 3.33 45.12 2.51C43.16 1.69 41.14 1.07 39.05 0.64C36.97 0.22 34.87 0 32.74 0L32.5 0C31.43 0 30.37 0.05 29.31 0.15C28.25 0.26 27.2 0.41 26.15 0.62C25.11 0.83 24.08 1.09 23.06 1.39C22.04 1.7 21.04 2.06 20.06 2.47C19.07 2.88 18.11 3.33 17.17 3.83C16.24 4.33 15.32 4.88 14.44 5.47C13.55 6.06 12.7 6.7 11.88 7.37C11.05 8.05 10.27 8.76 9.51 9.51C8.76 10.27 8.05 11.05 7.37 11.88C6.7 12.7 6.06 13.55 5.47 14.44C4.88 15.32 4.33 16.24 3.83 17.17C3.33 18.11 2.88 19.07 2.47 20.06C2.06 21.04 1.7 22.04 1.39 23.06C1.09 24.08 0.83 25.11 0.62 26.15C0.41 27.2 0.26 28.25 0.15 29.31C0.05 30.37 0 31.43 0 32.5L0 50C0 50.49 0.04 50.98 0.14 51.46C0.24 51.94 0.38 52.41 0.57 52.87C0.75 53.32 0.99 53.75 1.26 54.16C1.53 54.57 1.84 54.95 2.19 55.3C2.54 55.65 2.92 55.96 3.33 56.23C3.74 56.5 4.17 56.74 4.62 56.92C5.08 57.11 5.55 57.25 6.03 57.35C6.51 57.45 7 57.5 7.5 57.5L12.5 57.5C12.99 57.5 13.48 57.45 13.96 57.35C14.44 57.25 14.91 57.11 15.37 56.92C15.82 56.74 16.25 56.5 16.66 56.23C17.07 55.96 17.45 55.65 17.8 55.3C18.15 54.95 18.46 54.57 18.73 54.16C19 53.75 19.24 53.32 19.42 52.87C19.61 52.41 19.75 51.94 19.85 51.46C19.95 50.98 20 50.49 20 50L20 37.5C20 37 19.95 36.51 19.85 36.03C19.75 35.55 19.61 35.08 19.42 34.62C19.24 34.17 19 33.74 18.73 33.33C18.46 32.92 18.15 32.54 17.8 32.19C17.45 31.84 17.07 31.53 16.66 31.26C16.25 30.99 15.82 30.75 15.37 30.57C14.91 30.38 14.44 30.24 13.96 30.14C13.48 30.04 12.99 30 12.5 30L5.11 30C5.23 28.7 5.44 27.42 5.74 26.15C6.04 24.88 6.43 23.64 6.91 22.43C7.39 21.22 7.95 20.05 8.59 18.92C9.23 17.79 9.95 16.7 10.75 15.68C11.55 14.65 12.41 13.68 13.35 12.77C14.28 11.86 15.28 11.03 16.33 10.26C17.38 9.5 18.49 8.81 19.64 8.2C20.79 7.59 21.97 7.06 23.2 6.62C24.42 6.18 25.67 5.83 26.95 5.56C28.23 5.3 29.51 5.13 30.81 5.05C32.11 4.97 33.41 4.98 34.71 5.08C36.01 5.18 37.29 5.38 38.56 5.66C39.83 5.95 41.08 6.32 42.29 6.78C43.51 7.25 44.69 7.79 45.83 8.42C46.97 9.05 48.06 9.76 49.1 10.54C50.14 11.32 51.12 12.18 52.04 13.1C54.3 15.37 56.1 17.95 57.45 20.86C58.8 23.76 59.61 26.81 59.89 30L52.5 30C52 30 51.51 30.04 51.03 30.14C50.55 30.24 50.08 30.38 49.62 30.57C49.17 30.75 48.74 30.99 48.33 31.26C47.92 31.53 47.54 31.84 47.19 32.19C46.84 32.54 46.53 32.92 46.26 33.33C45.99 33.74 45.75 34.17 45.57 34.62C45.38 35.08 45.24 35.55 45.14 36.03C45.04 36.51 45 37 45 37.5L45 50C45 50.49 45.04 50.98 45.14 51.46C45.24 51.94 45.38 52.41 45.57 52.87C45.75 53.32 45.99 53.75 46.26 54.16C46.53 54.57 46.84 54.95 47.19 55.3C47.54 55.65 47.92 55.96 48.33 56.23C48.74 56.5 49.17 56.74 49.62 56.92C50.08 57.11 50.55 57.25 51.03 57.35C51.51 57.45 52 57.5 52.5 57.5L60 57.5C60 57.99 59.95 58.48 59.85 58.96C59.75 59.44 59.61 59.91 59.42 60.37C59.24 60.82 59 61.25 58.73 61.66C58.46 62.07 58.15 62.45 57.8 62.8C57.45 63.15 57.07 63.46 56.66 63.73C56.25 64 55.82 64.24 55.37 64.42C54.91 64.61 54.44 64.75 53.96 64.85C53.48 64.95 52.99 65 52.5 65L35 65C34.66 65 34.34 65.06 34.04 65.19C33.73 65.31 33.46 65.49 33.23 65.73C32.99 65.96 32.81 66.23 32.69 66.54C32.56 66.84 32.5 67.16 32.5 67.5C32.5 67.83 32.56 68.15 32.69 68.45C32.81 68.76 32.99 69.03 33.23 69.26C33.46 69.5 33.73 69.68 34.04 69.8C34.34 69.93 34.66 70 35 70L52.5 70C53.32 70 54.13 69.91 54.93 69.75C55.74 69.59 56.52 69.36 57.28 69.04C58.04 68.73 58.76 68.34 59.44 67.89C60.12 67.43 60.75 66.91 61.33 66.33C61.91 65.75 62.43 65.12 62.89 64.44C63.34 63.76 63.73 63.04 64.04 62.28C64.36 61.52 64.59 60.74 64.75 59.93C64.91 59.13 65 58.32 65 57.5L65 32.5C65 30.37 64.8 28.26 64.4 26.18C63.99 24.09 63.38 22.06 62.57 20.1C61.77 18.13 60.77 16.26 59.6 14.49C58.42 12.72 57.08 11.08 55.59 9.58ZM12.5 35C12.83 35 13.15 35.06 13.45 35.19C13.76 35.31 14.03 35.49 14.26 35.73C14.5 35.96 14.68 36.23 14.8 36.54C14.93 36.84 15 37.16 15 37.5L15 50C15 50.33 14.93 50.65 14.8 50.95C14.68 51.26 14.5 51.53 14.26 51.76C14.03 52 13.76 52.18 13.45 52.3C13.15 52.43 12.83 52.5 12.5 52.5L7.5 52.5C7.16 52.5 6.84 52.43 6.54 52.3C6.23 52.18 5.96 52 5.73 51.76C5.49 51.53 5.31 51.26 5.19 50.95C5.06 50.65 5 50.33 5 50L5 35L12.5 35ZM52.5 52.5C52.16 52.5 51.84 52.43 51.54 52.3C51.23 52.18 50.96 52 50.73 51.76C50.49 51.53 50.31 51.26 50.19 50.95C50.06 50.65 50 50.33 50 50L50 37.5C50 37.16 50.06 36.84 50.19 36.54C50.31 36.23 50.49 35.96 50.73 35.73C50.96 35.49 51.23 35.31 51.54 35.19C51.84 35.06 52.16 35 52.5 35L60 35L60 52.5L52.5 52.5Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
      </MenuButton>
      <MenuButton widget={<Info />} childName={'Info'}>
        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs/>
          <path id="path" d="M35 0C33.85 0 32.71 0.05 31.56 0.16C30.42 0.28 29.29 0.44 28.17 0.67C27.04 0.89 25.93 1.17 24.83 1.5C23.74 1.83 22.66 2.22 21.6 2.66C20.54 3.1 19.51 3.59 18.5 4.13C17.49 4.67 16.5 5.26 15.55 5.89C14.6 6.53 13.68 7.21 12.79 7.94C11.91 8.67 11.06 9.44 10.25 10.25C9.44 11.06 8.67 11.91 7.94 12.79C7.21 13.68 6.53 14.6 5.89 15.55C5.26 16.5 4.67 17.49 4.13 18.5C3.59 19.51 3.1 20.54 2.66 21.6C2.22 22.66 1.83 23.74 1.5 24.84C1.17 25.93 0.89 27.04 0.67 28.17C0.44 29.29 0.28 30.42 0.16 31.56C0.05 32.71 0 33.85 0 35C0 36.14 0.05 37.28 0.16 38.43C0.28 39.57 0.44 40.7 0.67 41.82C0.89 42.95 1.17 44.06 1.5 45.16C1.83 46.25 2.22 47.33 2.66 48.39C3.1 49.45 3.59 50.48 4.13 51.49C4.67 52.5 5.26 53.49 5.89 54.44C6.53 55.39 7.21 56.31 7.94 57.2C8.67 58.08 9.44 58.93 10.25 59.74C11.06 60.55 11.91 61.32 12.79 62.05C13.68 62.78 14.6 63.46 15.55 64.1C16.5 64.73 17.49 65.32 18.5 65.86C19.51 66.4 20.54 66.89 21.6 67.33C22.66 67.77 23.74 68.16 24.83 68.49C25.93 68.82 27.04 69.1 28.17 69.32C29.29 69.55 30.42 69.71 31.56 69.83C32.71 69.94 33.85 70 35 70C36.14 70 37.29 69.94 38.43 69.83C39.57 69.71 40.7 69.55 41.82 69.32C42.95 69.1 44.06 68.82 45.16 68.49C46.25 68.16 47.33 67.77 48.39 67.33C49.45 66.89 50.48 66.4 51.49 65.86C52.5 65.32 53.49 64.73 54.44 64.1C55.39 63.46 56.31 62.78 57.2 62.05C58.08 61.32 58.93 60.55 59.74 59.74C60.55 58.93 61.32 58.08 62.05 57.2C62.78 56.31 63.46 55.39 64.1 54.44C64.73 53.49 65.32 52.5 65.86 51.49C66.4 50.48 66.89 49.45 67.33 48.39C67.77 47.33 68.16 46.25 68.49 45.16C68.82 44.06 69.1 42.95 69.32 41.82C69.55 40.7 69.71 39.57 69.83 38.43C69.94 37.28 70 36.14 70 35C69.99 33.85 69.94 32.71 69.82 31.57C69.71 30.43 69.54 29.29 69.32 28.17C69.09 27.05 68.81 25.94 68.48 24.84C68.15 23.74 67.76 22.67 67.32 21.61C66.88 20.55 66.39 19.51 65.85 18.5C65.31 17.49 64.72 16.51 64.08 15.56C63.45 14.61 62.77 13.69 62.04 12.8C61.31 11.92 60.54 11.07 59.73 10.26C58.92 9.45 58.07 8.68 57.19 7.95C56.3 7.22 55.38 6.54 54.43 5.9C53.48 5.27 52.5 4.68 51.49 4.14C50.48 3.6 49.44 3.11 48.38 2.67C47.33 2.23 46.25 1.84 45.15 1.51C44.05 1.18 42.94 0.9 41.82 0.67C40.7 0.45 39.56 0.28 38.42 0.17C37.28 0.05 36.14 0 35 0ZM35 64.61C34.03 64.61 33.06 64.56 32.09 64.47C31.13 64.37 30.17 64.23 29.22 64.04C28.27 63.85 27.33 63.62 26.4 63.34C25.47 63.05 24.56 62.73 23.66 62.36C22.77 61.98 21.89 61.57 21.03 61.11C20.18 60.66 19.35 60.16 18.54 59.62C17.74 59.08 16.96 58.5 16.21 57.89C15.46 57.27 14.74 56.62 14.05 55.94C13.37 55.25 12.72 54.53 12.1 53.78C11.49 53.03 10.91 52.25 10.37 51.45C9.83 50.64 9.33 49.81 8.88 48.96C8.42 48.1 8 47.22 7.63 46.33C7.26 45.43 6.94 44.52 6.66 43.59C6.37 42.66 6.14 41.72 5.95 40.77C5.76 39.82 5.62 38.86 5.52 37.9C5.43 36.93 5.38 35.96 5.38 35C5.38 34.03 5.43 33.06 5.52 32.09C5.62 31.13 5.76 30.17 5.95 29.22C6.14 28.27 6.37 27.33 6.66 26.4C6.94 25.47 7.26 24.56 7.63 23.66C8 22.77 8.42 21.89 8.88 21.03C9.33 20.18 9.83 19.35 10.37 18.54C10.91 17.74 11.49 16.96 12.1 16.21C12.72 15.46 13.37 14.74 14.05 14.05C14.74 13.37 15.46 12.72 16.21 12.1C16.96 11.49 17.74 10.91 18.54 10.37C19.35 9.83 20.18 9.33 21.03 8.88C21.89 8.42 22.77 8.01 23.66 7.63C24.56 7.26 25.47 6.94 26.4 6.65C27.33 6.37 28.27 6.14 29.22 5.95C30.17 5.76 31.13 5.62 32.09 5.52C33.06 5.43 34.03 5.38 35 5.38C35.96 5.38 36.93 5.43 37.9 5.52C38.86 5.62 39.82 5.76 40.77 5.95C41.72 6.14 42.66 6.37 43.59 6.65C44.52 6.94 45.43 7.26 46.33 7.63C47.22 8.01 48.1 8.42 48.96 8.88C49.81 9.33 50.64 9.83 51.45 10.37C52.25 10.91 53.03 11.49 53.78 12.1C54.53 12.72 55.25 13.37 55.94 14.05C56.62 14.74 57.27 15.46 57.89 16.21C58.5 16.96 59.08 17.74 59.62 18.54C60.16 19.35 60.66 20.18 61.11 21.03C61.57 21.89 61.99 22.77 62.36 23.66C62.73 24.56 63.05 25.47 63.33 26.4C63.62 27.33 63.85 28.27 64.04 29.22C64.23 30.17 64.37 31.13 64.47 32.09C64.56 33.06 64.61 34.03 64.61 35C64.61 35.96 64.56 36.93 64.46 37.9C64.37 38.86 64.23 39.82 64.04 40.77C63.85 41.72 63.61 42.66 63.33 43.59C63.05 44.52 62.72 45.43 62.35 46.32C61.98 47.22 61.56 48.09 61.1 48.95C60.65 49.8 60.15 50.63 59.61 51.44C59.07 52.25 58.49 53.02 57.88 53.77C57.26 54.52 56.61 55.24 55.93 55.93C55.24 56.61 54.52 57.26 53.77 57.88C53.02 58.49 52.25 59.07 51.44 59.61C50.63 60.15 49.8 60.65 48.95 61.1C48.09 61.56 47.22 61.98 46.32 62.35C45.43 62.72 44.52 63.05 43.59 63.33C42.66 63.61 41.72 63.85 40.77 64.04C39.82 64.23 38.86 64.37 37.9 64.46C36.93 64.56 35.96 64.61 35 64.61ZM40.38 51.15C40.38 51.51 40.31 51.85 40.17 52.18C40.04 52.51 39.84 52.8 39.59 53.05C39.34 53.31 39.05 53.5 38.72 53.64C38.39 53.77 38.04 53.84 37.69 53.84C36.97 53.84 36.29 53.7 35.63 53.43C34.97 53.16 34.38 52.77 33.88 52.26C33.37 51.76 32.99 51.18 32.71 50.52C32.44 49.86 32.3 49.17 32.3 48.46L32.3 35C31.95 35 31.6 34.93 31.27 34.79C30.94 34.65 30.65 34.46 30.4 34.21C30.15 33.95 29.95 33.66 29.82 33.33C29.68 33 29.61 32.66 29.61 32.3C29.61 31.95 29.68 31.6 29.82 31.27C29.95 30.94 30.15 30.65 30.4 30.4C30.65 30.15 30.94 29.95 31.27 29.82C31.6 29.68 31.95 29.61 32.3 29.61C33.02 29.61 33.7 29.75 34.36 30.02C35.02 30.29 35.61 30.68 36.11 31.19C36.62 31.69 37 32.27 37.28 32.93C37.55 33.59 37.69 34.28 37.69 35L37.69 48.46C38.04 48.46 38.39 48.52 38.72 48.66C39.05 48.8 39.34 48.99 39.59 49.25C39.84 49.5 40.04 49.79 40.17 50.12C40.31 50.45 40.38 50.79 40.38 51.15ZM29.61 20.19C29.61 19.65 29.71 19.14 29.92 18.64C30.12 18.15 30.41 17.71 30.79 17.33C31.17 16.95 31.61 16.66 32.1 16.46C32.6 16.25 33.11 16.15 33.65 16.15C34.18 16.15 34.7 16.25 35.19 16.46C35.69 16.66 36.13 16.95 36.5 17.33C36.88 17.71 37.17 18.15 37.38 18.64C37.58 19.14 37.69 19.65 37.69 20.19C37.69 20.72 37.58 21.24 37.38 21.73C37.17 22.23 36.88 22.66 36.5 23.04C36.13 23.42 35.69 23.71 35.19 23.92C34.7 24.12 34.18 24.23 33.65 24.23C33.11 24.23 32.6 24.12 32.1 23.92C31.61 23.71 31.17 23.42 30.79 23.04C30.41 22.66 30.12 22.23 29.92 21.73C29.71 21.24 29.61 20.72 29.61 20.19Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
      </MenuButton>

      <MenuButton widget={<QR />} childName='QR'>
        <svg width="65.000000" height="65.000000" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs/>
          <path id="path" d="M23.63 0L5.9 0C5.12 0 4.37 0.14 3.64 0.44C2.92 0.74 2.28 1.17 1.73 1.73C1.17 2.28 0.75 2.92 0.45 3.64C0.15 4.37 0 5.12 0 5.9L0 23.63C0 24.42 0.15 25.17 0.45 25.89C0.75 26.62 1.17 27.26 1.73 27.81C2.28 28.36 2.92 28.79 3.64 29.09C4.37 29.39 5.12 29.54 5.9 29.54L23.63 29.54C24.41 29.54 25.17 29.39 25.89 29.09C26.62 28.79 27.26 28.36 27.81 27.81C28.36 27.26 28.79 26.62 29.09 25.89C29.39 25.17 29.54 24.42 29.54 23.63L29.54 5.9C29.54 5.12 29.39 4.37 29.09 3.64C28.79 2.92 28.36 2.28 27.81 1.73C27.26 1.17 26.62 0.74 25.89 0.44C25.17 0.14 24.41 0 23.63 0ZM23.63 23.63L5.9 23.63L5.9 5.9L23.63 5.9L23.63 23.63ZM23.63 35.45L5.9 35.45C5.12 35.45 4.37 35.6 3.64 35.9C2.92 36.2 2.28 36.63 1.73 37.18C1.17 37.73 0.75 38.37 0.45 39.1C0.15 39.82 0 40.58 0 41.36L0 59.09C0 59.87 0.15 60.62 0.45 61.35C0.75 62.07 1.17 62.71 1.73 63.26C2.28 63.82 2.92 64.25 3.64 64.55C4.37 64.85 5.12 65 5.9 65L23.63 65C24.41 65 25.17 64.85 25.89 64.55C26.62 64.25 27.26 63.82 27.81 63.26C28.36 62.71 28.79 62.07 29.09 61.35C29.39 60.62 29.54 59.87 29.54 59.09L29.54 41.36C29.54 40.58 29.39 39.82 29.09 39.1C28.79 38.37 28.36 37.73 27.81 37.18C27.26 36.63 26.62 36.2 25.89 35.9C25.17 35.6 24.41 35.45 23.63 35.45ZM23.63 59.09L5.9 59.09L5.9 41.36L23.63 41.36L23.63 59.09ZM59.09 0L41.36 0C40.58 0 39.82 0.14 39.1 0.44C38.37 0.74 37.73 1.17 37.18 1.73C36.63 2.28 36.2 2.92 35.9 3.64C35.6 4.37 35.45 5.12 35.45 5.9L35.45 23.63C35.45 24.42 35.6 25.17 35.9 25.89C36.2 26.62 36.63 27.26 37.18 27.81C37.73 28.36 38.37 28.79 39.1 29.09C39.82 29.39 40.58 29.54 41.36 29.54L59.09 29.54C59.87 29.54 60.62 29.39 61.35 29.09C62.07 28.79 62.71 28.36 63.26 27.81C63.82 27.26 64.25 26.62 64.54 25.89C64.84 25.17 65 24.42 65 23.63L65 5.9C65 5.12 64.84 4.37 64.54 3.64C64.25 2.92 63.82 2.28 63.26 1.73C62.71 1.17 62.07 0.74 61.35 0.44C60.62 0.14 59.87 0 59.09 0ZM59.09 23.63L41.36 23.63L41.36 5.9L59.09 5.9L59.09 23.63ZM35.45 50.22L35.45 38.4C35.45 38.01 35.52 37.64 35.67 37.27C35.82 36.91 36.04 36.59 36.32 36.31C36.59 36.04 36.91 35.82 37.27 35.67C37.64 35.52 38.01 35.45 38.4 35.45C38.8 35.45 39.17 35.52 39.54 35.67C39.9 35.82 40.22 36.04 40.49 36.31C40.77 36.59 40.98 36.91 41.13 37.27C41.28 37.64 41.36 38.01 41.36 38.4L41.36 50.22C41.36 50.61 41.28 50.99 41.13 51.35C40.98 51.71 40.77 52.03 40.49 52.31C40.22 52.59 39.9 52.8 39.54 52.95C39.17 53.1 38.8 53.18 38.4 53.18C38.01 53.18 37.64 53.1 37.27 52.95C36.91 52.8 36.59 52.59 36.32 52.31C36.04 52.03 35.82 51.71 35.67 51.35C35.52 50.99 35.45 50.61 35.45 50.22ZM65 44.31C65 44.71 64.92 45.08 64.77 45.44C64.62 45.81 64.41 46.13 64.13 46.4C63.85 46.68 63.53 46.89 63.17 47.04C62.81 47.19 62.43 47.27 62.04 47.27L53.18 47.27L53.18 62.04C53.18 62.43 53.1 62.81 52.95 63.17C52.8 63.53 52.59 63.85 52.31 64.13C52.03 64.41 51.71 64.62 51.35 64.77C50.99 64.92 50.61 65 50.22 65L38.4 65C38.01 65 37.64 64.92 37.27 64.77C36.91 64.62 36.59 64.41 36.32 64.13C36.04 63.85 35.82 63.53 35.67 63.17C35.52 62.81 35.45 62.43 35.45 62.04C35.45 61.65 35.52 61.27 35.67 60.91C35.82 60.55 36.04 60.23 36.32 59.95C36.59 59.67 36.91 59.46 37.27 59.31C37.64 59.16 38.01 59.09 38.4 59.09L47.27 59.09L47.27 38.4C47.27 38.01 47.34 37.64 47.49 37.27C47.64 36.91 47.86 36.59 48.13 36.31C48.41 36.04 48.73 35.82 49.09 35.67C49.45 35.52 49.83 35.45 50.22 35.45C50.61 35.45 50.99 35.52 51.35 35.67C51.71 35.82 52.03 36.04 52.31 36.31C52.59 36.59 52.8 36.91 52.95 37.27C53.1 37.64 53.18 38.01 53.18 38.4L53.18 41.36L62.04 41.36C62.43 41.36 62.81 41.43 63.17 41.58C63.53 41.73 63.85 41.95 64.13 42.22C64.41 42.5 64.62 42.82 64.77 43.18C64.92 43.54 65 43.92 65 44.31ZM65 56.13L65 62.04C65 62.43 64.92 62.81 64.77 63.17C64.62 63.53 64.41 63.85 64.13 64.13C63.85 64.41 63.53 64.62 63.17 64.77C62.81 64.92 62.43 65 62.04 65C61.65 65 61.27 64.92 60.91 64.77C60.55 64.62 60.23 64.41 59.95 64.13C59.67 63.85 59.46 63.53 59.31 63.17C59.16 62.81 59.09 62.43 59.09 62.04L59.09 56.13C59.09 55.74 59.16 55.36 59.31 55C59.46 54.64 59.67 54.32 59.95 54.04C60.23 53.77 60.55 53.55 60.91 53.4C61.27 53.25 61.65 53.18 62.04 53.18C62.43 53.18 62.81 53.25 63.17 53.4C63.53 53.55 63.85 53.77 64.13 54.04C64.41 54.32 64.62 54.64 64.77 55C64.92 55.36 65 55.74 65 56.13Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
      </MenuButton>  

      <MenuButton widget={<Null />} childName='Null'>
        <svg width="70.000000" height="50.000000" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs/>
          <path id="path" d="M64.84 0L5.15 0C4.47 0 3.81 0.13 3.18 0.39C2.55 0.65 1.99 1.02 1.51 1.5C1.02 1.99 0.65 2.54 0.39 3.18C0.13 3.81 0 4.46 0 5.15L0 44.84C0 45.52 0.13 46.18 0.39 46.81C0.65 47.44 1.02 48 1.5 48.48C1.99 48.97 2.54 49.34 3.18 49.6C3.81 49.86 4.46 49.99 5.15 50L64.84 50C65.52 50 66.18 49.86 66.81 49.6C67.44 49.34 68 48.97 68.48 48.49C68.97 48 69.34 47.45 69.6 46.81C69.86 46.18 69.99 45.53 70 44.84L70 5.15C70 4.47 69.86 3.81 69.6 3.18C69.34 2.55 68.97 1.99 68.49 1.51C68 1.02 67.45 0.65 66.81 0.39C66.18 0.13 65.53 0 64.84 0ZM65 44.84C65 44.94 64.94 45 64.84 45L5.15 45C5.05 45 5 44.94 5 44.84L5 5.15C5 5.05 5.05 5 5.15 5L64.84 5C64.94 5 65 5.05 65 5.15L65 44.84ZM60 25C60 25.33 59.93 25.65 59.8 25.95C59.68 26.26 59.5 26.53 59.26 26.76C59.03 27 58.76 27.18 58.45 27.3C58.15 27.43 57.83 27.5 57.5 27.5L12.5 27.5C12.16 27.5 11.84 27.43 11.54 27.3C11.23 27.18 10.96 27 10.73 26.76C10.49 26.53 10.31 26.26 10.19 25.95C10.06 25.65 10 25.33 10 25C10 24.66 10.06 24.34 10.19 24.04C10.31 23.73 10.49 23.46 10.73 23.23C10.96 22.99 11.23 22.81 11.54 22.69C11.84 22.56 12.16 22.5 12.5 22.5L57.5 22.5C57.83 22.5 58.15 22.56 58.45 22.69C58.76 22.81 59.03 22.99 59.26 23.23C59.5 23.46 59.68 23.73 59.8 24.04C59.93 24.34 60 24.66 60 25ZM60 15C60 15.33 59.93 15.65 59.8 15.95C59.68 16.26 59.5 16.53 59.26 16.76C59.03 17 58.76 17.18 58.45 17.3C58.15 17.43 57.83 17.5 57.5 17.5L12.5 17.5C12.16 17.5 11.84 17.43 11.54 17.3C11.23 17.18 10.96 17 10.73 16.76C10.49 16.53 10.31 16.26 10.19 15.95C10.06 15.65 10 15.33 10 15C10 14.66 10.06 14.34 10.19 14.04C10.31 13.73 10.49 13.46 10.73 13.23C10.96 12.99 11.23 12.81 11.54 12.69C11.84 12.56 12.16 12.5 12.5 12.5L57.5 12.5C57.83 12.5 58.15 12.56 58.45 12.69C58.76 12.81 59.03 12.99 59.26 13.23C59.5 13.46 59.68 13.73 59.8 14.04C59.93 14.34 60 14.66 60 15ZM17.5 35C17.5 35.33 17.43 35.65 17.3 35.95C17.18 36.26 17 36.53 16.76 36.76C16.53 37 16.26 37.18 15.95 37.3C15.65 37.43 15.33 37.5 15 37.5L12.5 37.5C12.16 37.5 11.84 37.43 11.54 37.3C11.23 37.18 10.96 37 10.73 36.76C10.49 36.53 10.31 36.26 10.19 35.95C10.06 35.65 10 35.33 10 35C10 34.66 10.06 34.34 10.19 34.04C10.31 33.73 10.49 33.46 10.73 33.23C10.96 32.99 11.23 32.81 11.54 32.69C11.84 32.56 12.16 32.5 12.5 32.5L15 32.5C15.33 32.5 15.65 32.56 15.95 32.69C16.26 32.81 16.53 32.99 16.76 33.23C17 33.46 17.18 33.73 17.3 34.04C17.43 34.34 17.5 34.66 17.5 35ZM47.5 35C47.5 35.33 47.43 35.65 47.3 35.95C47.18 36.26 47 36.53 46.76 36.76C46.53 37 46.26 37.18 45.95 37.3C45.65 37.43 45.33 37.5 45 37.5L25 37.5C24.66 37.5 24.34 37.43 24.04 37.3C23.73 37.18 23.46 37 23.23 36.76C22.99 36.53 22.81 36.26 22.69 35.95C22.56 35.65 22.5 35.33 22.5 35C22.5 34.66 22.56 34.34 22.69 34.04C22.81 33.73 22.99 33.46 23.23 33.23C23.46 32.99 23.73 32.81 24.04 32.69C24.34 32.56 24.66 32.5 25 32.5L45 32.5C45.33 32.5 45.65 32.56 45.95 32.69C46.26 32.81 46.53 32.99 46.76 33.23C47 33.46 47.18 33.73 47.3 34.04C47.43 34.34 47.5 34.66 47.5 35ZM60 35C60 35.33 59.93 35.65 59.8 35.95C59.68 36.26 59.5 36.53 59.26 36.76C59.03 37 58.76 37.18 58.45 37.3C58.15 37.43 57.83 37.5 57.5 37.5L55 37.5C54.66 37.5 54.34 37.43 54.04 37.3C53.73 37.18 53.46 37 53.23 36.76C52.99 36.53 52.81 36.26 52.69 35.95C52.56 35.65 52.5 35.33 52.5 35C52.5 34.66 52.56 34.34 52.69 34.04C52.81 33.73 52.99 33.46 53.23 33.23C53.46 32.99 53.73 32.81 54.04 32.69C54.34 32.56 54.66 32.5 55 32.5L57.5 32.5C57.83 32.5 58.15 32.56 58.45 32.69C58.76 32.81 59.03 32.99 59.26 33.23C59.5 33.46 59.68 33.73 59.8 34.04C59.93 34.34 60 34.66 60 35Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>

      </MenuButton>
      <MenuButton widget={<Exit />} childName='Exit'>
        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs/>
          <path id="path" d="M29.16 67.08C29.16 67.47 29.09 67.84 28.94 68.19C28.79 68.55 28.58 68.87 28.31 69.14C28.03 69.41 27.72 69.62 27.36 69.77C27 69.92 26.63 70 26.24 70L5.83 70C5.05 70 4.31 69.85 3.6 69.55C2.88 69.25 2.25 68.83 1.7 68.29C1.16 67.74 0.74 67.11 0.44 66.39C0.14 65.68 0 64.94 0 64.16L0 5.83C0 5.05 0.14 4.31 0.44 3.6C0.74 2.88 1.16 2.25 1.7 1.7C2.25 1.16 2.88 0.74 3.6 0.44C4.31 0.14 5.05 0 5.83 0L26.24 0C26.63 0 27 0.07 27.36 0.22C27.72 0.37 28.03 0.58 28.31 0.85C28.58 1.12 28.79 1.44 28.94 1.8C29.09 2.15 29.16 2.52 29.16 2.91C29.16 3.3 29.09 3.67 28.94 4.03C28.79 4.39 28.58 4.7 28.31 4.97C28.03 5.25 27.72 5.46 27.36 5.61C27 5.75 26.63 5.83 26.24 5.83L5.83 5.83L5.83 64.16L26.24 64.16C26.63 64.16 27 64.24 27.36 64.38C27.72 64.53 28.03 64.74 28.31 65.02C28.58 65.29 28.79 65.6 28.94 65.96C29.09 66.32 29.16 66.69 29.16 67.08ZM69.14 32.93L54.56 18.35C54.28 18.07 53.97 17.86 53.61 17.72C53.25 17.57 52.88 17.49 52.49 17.49C52.11 17.49 51.73 17.57 51.38 17.72C51.02 17.86 50.7 18.07 50.43 18.35C50.16 18.62 49.95 18.94 49.8 19.29C49.65 19.65 49.58 20.02 49.58 20.41C49.58 20.8 49.65 21.17 49.8 21.53C49.95 21.89 50.16 22.2 50.43 22.48L60.04 32.08L26.24 32.08C25.86 32.08 25.49 32.15 25.13 32.3C24.77 32.45 24.46 32.66 24.18 32.93C23.91 33.21 23.7 33.52 23.55 33.88C23.4 34.24 23.33 34.61 23.33 35C23.33 35.38 23.4 35.75 23.55 36.11C23.7 36.47 23.91 36.78 24.18 37.06C24.46 37.33 24.77 37.54 25.13 37.69C25.49 37.84 25.86 37.91 26.24 37.91L60.04 37.91L50.43 47.51C50.16 47.79 49.95 48.1 49.8 48.46C49.65 48.82 49.58 49.19 49.58 49.58C49.58 49.97 49.65 50.34 49.8 50.7C49.95 51.05 50.16 51.37 50.43 51.64C50.7 51.92 51.02 52.13 51.38 52.27C51.73 52.42 52.11 52.5 52.49 52.5C52.88 52.5 53.25 52.42 53.61 52.27C53.97 52.13 54.28 51.92 54.56 51.64L69.14 37.06C69.41 36.79 69.62 36.47 69.77 36.11C69.92 35.75 70 35.38 70 35C70 34.61 69.92 34.24 69.77 33.88C69.62 33.52 69.41 33.21 69.14 32.93Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>

      </MenuButton>

    </div>
  )
}

export default Menu
