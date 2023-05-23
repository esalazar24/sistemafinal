import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HipotesisService {

  constructor(private firestore: AngularFirestore) { }

  AgregarHipotesis(arregloHipotesis: any): Promise<any>{
    return this.firestore.collection('TablaHipotesis').add(arregloHipotesis);
  }

  getHipotesis():Observable<any>{
    return  this.firestore.collection('TablaHipotesis', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  
  eliminarHipotesis(id: string): Promise<any>{
    return this.firestore.collection('TablaHipotesis').doc(id).delete();
  }

  gethipotesi(id: string): Observable<any>{
   return this.firestore.collection('TablaHipotesis').doc(id).snapshotChanges();
  }

  DesabitlitarItmes():Observable<any>{
    return  this.firestore.collection('TablaplanteamientoProblema', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  actualizarHipotesis(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaHipotesis').doc(id).update(data);
  }


}
