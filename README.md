# Estructura de aplicación Angular

Este proyecto proporciona una estructura escalable, simple e intuitiva. La clave es hacer que el código sea más reutilizable, más fácil de leer y menos propenso a errores.

La primera capa de directorios contiene directamente dos módulos ( core/ y shared/ ) y otro directorio para todos los demás ( modules/ ).

## Core
Mientras que app.module es el que se inicia, core.module es el centro real de la aplicación. Se debe importar en app.module.

Uno de los puntos más cruciales de core.module es su comportamiento de carga: queremos que se cargue exactamente una vez para evitar problemas de importación o duplicación. Para lograr este comportamiento, se debe implementar una protección dentro del constructor, con este código la aplicación falla si core.module se carga más de una vez.

Contiene: 

1. componentes que son necesarios para la aplicación (pero que no deben compartirse, como un encabezado o pie de página) y otros componentes básicos centralizados de la aplicación. 
2. servicios singleton
3. y otros componentes básicos centralizados de la aplicación (guards, interceptors).
4. Desde el punto de vista funcional no hay mejor lugar para que residan los modelos centrales que en el núcleo de la aplicación.

## Shared
Contiene componentes compartidos, directivas y pipes que utilizan varios módulos y sus componentes.
A diferencia de core.module, puede (y debe) importarse en varios módulos cuando se deba reutilizar cualquiera de sus componentes, directivas o pipes.
Como shared.module normalmente se carga junto con app.module, también se Carga de manera apresurada "Eager Loading", como core.module. Mientra que Lazy-Loading consiste en retrasar la carga o inicialización, Eager Loading consiste en una carga apresurada.

## Modules
Una aplicación consta de muchos módulos, que pueden o no tener submódulos de la misma estructura.
Un módulo siempre tendrá un nombre y, con el supuesto de enrutamiento, también tendrá {module-name}-routing.module.

Dentro de un modulo tenemos páginas y componentes, ambos son componentes pero la diferencia es que las páginas no tienen un selector, porque no lo necesitan.
Las páginas son componentes que se cargan cuando son un objetivo de enrutamiento, lo que hace que se carguen en una salida de enrutador. Los componentes reales necesitan el selector ya que se utilizan en las plantillas de las páginas que se mostrarán.

Los servicios dentro de dicho módulo solo se cargan cuando se carga el propio módulo.

##Assets


## References


## Enlaces
[Angular Styleguide](https://angular.io/guide/styleguide)
