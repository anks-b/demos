import { Injectable } from '@angular/core';
import { Article } from '../../../../Models/Blog/Article';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import { environment} from '../../../../environments/environment'
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable} from 'rxjs'
import { DocumentReference } from '@firebase/firestore-types';


@Injectable()
export class ArticlesService {

  db:any={};
  app:any ={};
  items: Observable<any[]>;
  constructor(public dbstore:AngularFirestore) {
    
    //this.app = firebase.initializeApp(environment.firebase)
    //this.db = this.app.firebase_.storage();    
    this.items = dbstore.collection('articles').valueChanges();
   }

  getArticle(id:number) { 


  }

  getArticles():Observable<any[]> {
    return this.dbstore.collection('articles').valueChanges()
  }

  updateArticle(article:Article) {  }

  addArticle( article:Article):Promise<DocumentReference> {
   return this.dbstore.collection("articles").add({
      title: article.title,
      content:article.content      
  });  
  }
  
}
