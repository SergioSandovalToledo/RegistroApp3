import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private cliente: HttpClient) {}
    getAll(){
      return this.cliente.get("http://localhost:1337/alumnos");
    }
}
