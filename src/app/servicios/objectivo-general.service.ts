import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectivoGeneralService {

  constructor(private firestore: AngularFirestore) { }

  DesabitlitarItmes():Observable<any>{
    return  this.firestore.collection('TablaHipotesis', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  getObjectivoGeneral():Observable<any>{
    return  this.firestore.collection('TablaObjectivoGeneral', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  getobjectivogeneral(id: string): Observable<any>{
    return this.firestore.collection('TablaObjectivoGeneral').doc(id).snapshotChanges();
   }

   AgregarObjectivoGeneral(arregloObjectivoGeneral: any): Promise<any>{
    return this.firestore.collection('TablaObjectivoGeneral').add(arregloObjectivoGeneral);
  }
  
  actualizarObjectivoGeneral(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaObjectivoGeneral').doc(id).update(data);
  }

  
  eliminarObjectivoGeneral(id: string): Promise<any>{
    return this.firestore.collection('TablaObjectivoGeneral').doc(id).delete();
  }
 

}
