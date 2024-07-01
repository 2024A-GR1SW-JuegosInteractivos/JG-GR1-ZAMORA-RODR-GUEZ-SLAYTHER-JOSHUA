# Diseño del Juego: Asteroids

## Concepto General del Juego

**Título del Juego:** Asteroids

**Descripción:** El jugador controla una nave espacial en un entorno bidimensional. El objetivo es destruir asteroides que amenazan con invadir el planeta del jugador. La nave puede moverse y disparar proyectiles en todas direcciones. A medida que los asteroides son destruidos, se dividen en asteroides más pequeños que también deben ser destruidos.

## Transfondo

El planeta natal del jugador está bajo amenaza de una lluvia incesante de asteroides. Como el último piloto de defensa, tu misión es destruir todos los asteroides antes de que impacten la superficie y causen una catástrofe. Tu nave espacial es la última línea de defensa.

## Mecánicas del Juego

**Movimiento de la Nave:**

- **Teclas de Flecha (↑←→) o WAD:** Mover la nave en diferentes direcciones.
- **Nota:** No se puede retroceder; solo se puede avanzar y girar.

**Disparar:**

- **Barra Espaciadora:** Disparar proyectiles.

**Física:**

- La nave tiene inercia, continuando en movimiento hasta que se aplica una fuerza opuesta.
- Los asteroides se mueven en líneas rectas hasta que se destruyen o salen de la pantalla.

**Destrucción de Asteroides:**

- Los asteroides grandes se dividen en asteroides más pequeños al ser disparados.
- Los asteroides más pequeños se destruyen completamente cuando son disparados.

**Colisiones:**

- Si la nave colisiona con un asteroide, el jugador pierde una vida.
- Los proyectiles colisionan con los asteroides para destruirlos.

**Vidas y Puntuación:**

- El jugador tiene un total de 3 vidas.
- Se otorgan puntos por cada asteroide destruido, con puntos adicionales por asteroides más pequeños.

## Controles

- **Movimiento:** Flechas del teclado (↑←→) o WAD
- **Disparar:** Barra espaciadora

## Gráficos y Estilo Visual

**Estilo:** Retro, con gráficos vectoriales simples que imitan el estilo del arcade clásico.

**Elementos:**

- **Nave Espacial:** Un triángulo simple que puede rotar y moverse en todas direcciones.
- **Asteroides:** Formas poligonales irregulares.
- **Proyectiles:** Pequeñas líneas o puntos brillantes.

## Sonido

**Nota:** No se incluirán efectos de sonido ni música de fondo para mantener la simplicidad del juego.

## Niveles y Dificultad

**Nota:** No habrá niveles ni incrementos de dificultad. El juego continúa hasta que el jugador pierde todas sus vidas.

## Interfaz de Usuario (UI)

**Durante el Juego:**

- Contador de vidas en la esquina superior izquierda.
- Puntuación actual en la esquina superior derecha.

**Pantalla de Fin de Juego:**

- Puntuación final.
- Opción de "Reiniciar" para volver a iniciar la partida.

## Desarrollo y Herramientas

**Motor de Juego:** Unity

**Lenguaje de Programación:** C#

**Recursos:**

- Sprites para la nave y los asteroides.
