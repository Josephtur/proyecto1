// Importa el decorador Injectable para que Angular sepa que esta clase es un servicio
import { Injectable } from '@angular/core';
// Importa HttpClient para hacer peticiones HTTP
import { HttpClient } from '@angular/common/http';
// Importa Observable de RxJS para manejar flujos de datos asíncronos
import { Observable } from 'rxjs';

// Definición de la interfaz Contact con los campos de un contacto
export interface Contact {
  id?: number;   // ID opcional (JSON Server lo genera automáticamente al crear)
  name: string;  // Nombre del contacto (obligatorio)
  email: string; // Email del contacto (obligatorio)
  phone?: string;// Teléfono (opcional)
}

// Marca esta clase como un servicio inyectable en toda la aplicación
@Injectable({ providedIn: 'root' })
export class ContactService {
  // URL base de la API JSON Server donde se gestionan los contactos
  private api = 'http://localhost:3001/contacts';

  // Inyecta HttpClient para poder usar métodos HTTP dentro del servicio
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los contactos
   * @returns Observable que emite un array de Contact
   */
  getAll(): Observable<Contact[]> {
    // GET http://localhost:3001/contacts
    return this.http.get<Contact[]>(this.api);
  }

  /**
   * Añade un nuevo contacto
   * @param c Contacto a crear
   * @returns Observable que emite el Contact creado
   */
  add(c: Contact): Observable<Contact> {
    // POST http://localhost:3001/contacts con el cuerpo c
    return this.http.post<Contact>(this.api, c);
  }

  /**
   * Actualiza un contacto existente
   * @param c Contacto con datos nuevos (debe incluir id)
   * @returns Observable que emite el Contact actualizado
   */
  update(c: Contact): Observable<Contact> {
    // PUT http://localhost:3001/contacts/{id} con el cuerpo c
    return this.http.put<Contact>(`${this.api}/${c.id}`, c);
  }

  /**
   * Elimina un contacto por su ID
   * @param id Identificador del contacto a borrar
   * @returns Observable que emite void cuando se completa
   */
  delete(id: number): Observable<void> {
    // DELETE http://localhost:3001/contacts/{id}
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}



