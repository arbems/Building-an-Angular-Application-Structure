# Estructura de aplicación Angular

Este proyecto proporciona una estructura escalable, simple e intuitiva. La clave es hacer que el código sea más reutilizable, más fácil de leer y menos propenso a errores.

## Core
Núcleo real de la aplicación.
Solo se debe importar en app.module.

Contiene: 

1. componentes que son necesarios para la aplicación
2. servicios singleton
3. y otros componentes básicos centralizados de la aplicación (guards, interceptors).

## Shared
Contiene componentes compartidos, directivas y pipes que utilizan varios módulos y sus componentes.
A diferencia de core.module, puede (y debe) importarse en varios módulos cuando se deba reutilizar cualquiera de los componentes, directivas o pipes.

## Modules
Una aplicación consta de muchos módulos, que pueden o no tener submódulos de la misma estructura.

Un módulo siempre tendrá un nombre y, con el supuesto de enrutamiento, también tendrá {module-name}-routing.module


## References
https://medium.com/god-dev-blog/building-an-angular-application-structure-ef4cee9da934

## Enlaces
[Angular Styleguide](https://angular.io/guide/styleguide)