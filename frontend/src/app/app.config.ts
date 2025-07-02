// Importamos tipos y funciones necesarias de Angular
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';   // Nuestro array de rutas definido en app.routes.ts

// Configuración global de la aplicación Angular (sin NgModule)
export const appConfig: ApplicationConfig = {
  // Aquí registramos los proveedores (services, routers, clientes HTTP, etc.)
  providers: [
    // 1. Cambio de detección optimizado:
    //    provideZoneChangeDetection() reemplaza la detección de cambios clásica
    //    por una basada en zonas que agrupa múltiples eventos (coalescing)
    //    para mejorar el rendimiento. 
    //    Con { eventCoalescing: true } activamos esta agrupación.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // 2. Enrutamiento:
    //    provideRouter(routes) inicializa el Router de Angular con nuestro
    //    conjunto de rutas. Permite usar <router-outlet> y directivas
    //    como [routerLink] en componentes.
    provideRouter(routes),

    // 3. Cliente HTTP:
    //    provideHttpClient() registra HttpClient en el inyector global,
    //    haciendo posible inyectarlo en servicios y componentes
    //    para realizar peticiones HTTP (GET, POST, etc.).
    provideHttpClient()
  ]
};

