import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user-service.service";
import {User} from "./user";

export interface StorageData {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  storage: StorageData;
  constructor(private http: HttpClient, private createUser: UserService) {

  }

  user: User;


  gettingData() {
    this.http.get<any>("http://www.omdbapi.com/?i=tt3896198&apikey=5aaa7532").subscribe(response => {
    }),(error: { status: any; }) => {
      console.log(error.status);
    };
  }
}
