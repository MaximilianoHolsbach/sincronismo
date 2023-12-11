/**
 * Registrador de tickets de eventos
 * 
 * Definir la clase EventManager que contará con las siguientes propiedades y métodos:
 * 
 *  > events: variable privada de la clase que iniciará con un array vacío,
 *  luego se le agregarán los eventos nuevos.
 *  > perGain: variable privada de la clase que será del 30% del precio de la entrada.
 *  > totalGain: variable privada de la clase que sumará las ganancias de cada venta.
 *  > createEvent(data): método que recibirá un objeto con los parámetros:
 *      id (numérico y auto-incremental)
        name
        place
        price (si no se da: 10 por defecto)
        capacity (si no se da: 50 por defecto)
        date (si no se da: hoy por defecto)

 * Implementar “throw Error()” para generar un error en caso de que name y place no fueran ingresados
   por el usuario y manejar con try/catch.
 */
/**
 * > readEvents(): método para devolver todos los eventos.
 * Implementar “throw Error()” para generar un error en caso de que no existan eventos y manejar con try/catch.
 * > readEventById(id): método para devolver el evento buscado.
 * Implementar “throw Error()” para generar un error en caso de que no se encuentre el evento y manejar con try/catch.
 * > getGain(): método para devolver la ganancia hasta el momento.
 * Implementar “throw Error()” para generar un error en caso de que no exista ganancia y manejar con try/catch.
 * > removeEventById(id): método para quitar el evento buscado de la lista.
 * Implementar “throw Error()” para generar un error en caso de que no se encuentre el evento y manejar con try/catch.
 */

class EventManager {
  static #events = [];
  static #pergain = 0.3;
  static #totalgain = 0;
  constructor() {}
  createEvent(data) {
    try {
      if (!data.name || !data.place) {
        // Activa el catch en caso de que falte alguno de los dos datos
        throw new Error(`Inserte nombre y lugar del evento`);
      }
      const event = {
        id:
          EventManager.#events.length === 0
            ? 1
            : EventManager.#events[EventManager.#events.length - 1].id + 1,
        name: data.name,
        place: data.place,
        price: data.price || 50,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      EventManager.#events.push(event);
    } catch (error) {
      return error.message; // El error establecido en new Error se retorna con error.message
    }
  }

  readEvents() {
    try {
      if (EventManager.#events.length === 0) {
        throw new Error(`No se encontraron eventos que mostrar`);
      }
      return EventManager.#events;
    } catch (error) {
      return error.message;
    }
  }

  readEventById(id) {
    try {
      const event = EventManager.#events.find((each) => each.id === Number(id));
      if (event) {
        return event;
      } else {
        throw new Error(`El id: ${id} ingresado no pertenece a ningún evento`);
      }
    } catch (error) {
      return error.message;
    }
  }

  soldTicket(quantity, eventId) {
    try {
      if (!(quantity > 0)) {
        throw new Error(`Ingrese una cantidad: ${quantity}, valida`);
      }
      const event = this.readEventById(eventId);
      if (quantity > event.capacity) {
        throw new Error(
          `La cantidad: ${quantity}, solicitada superan las disponibles`
        );
      }
      event.capacity = event.capacity - quantity;
      EventManager.#totalgain =
        EventManager.#totalgain +
        event.price * quantity * EventManager.#pergain;
    } catch (error) {
      return error.message;
    }
  }

  getGain() {
    try {
      if (!(EventManager.#totalgain >= 0)) {
        throw new Error("No hay ganancias que mostrar");
      }
      return EventManager.#totalgain;
    } catch (error) {
      return error.message;
    }
  }

  removeEventById(id) {
    try {
      const eventIndex = EventManager.#events.findIndex(
        (each) => each.id === Number(id)
      );
      if (!eventIndex) {
        throw new Error(
          `El Id: ${id} ingresado no corresponde a ningún evento`
        );
      }
      EventManager.#events.splice(eventIndex, 1);
    } catch (error) {
      return error.message;
    }
  }
}

const pelicula = new EventManager();

//console.log(pelicula.readEvents());

pelicula.createEvent({
  name: "El viaje de Chijiro",
  place: "Shopping de la costa",
});
pelicula.createEvent({
  name: "Ponyo",
  place: "Paseo Libertad",
});

//console.log(pelicula.readEvents());

//console.log(pelicula.readEventById(2));

console.log(pelicula.readEventById(20));

/*/


pelicula.soldTicket(10, 1);

console.log(pelicula.getGain());

pelicula.removeEventById(2);

console.log(pelicula.readEvents());
*/
