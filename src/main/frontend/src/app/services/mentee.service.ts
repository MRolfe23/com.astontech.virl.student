import { Mentee } from './../types/mentee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class MenteeService {

    menteeUrl = '/api/mentee/'

    constructor (private http: HttpClient) { }

    getMentees(): Observable<Mentee[]> {
        return this.http.get<Mentee[]>(this.menteeUrl)
        .pipe(
            catchError(this.handleError)
        );
    }

    addMentee (mentee: Mentee): Observable<Mentee> {
        console.log(mentee);
        return this.http.post<Mentee>(this.menteeUrl, mentee, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }


    deleteMentee (id: string): Observable<{}> {
        const url = `${this.menteeUrl}/${id}`;
        return this.http.delete(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it accordingly
            console.error('An error occurred: ',  error.error.message);
        } else {
            // The backend returned an unsuccessful response code
            // The response body may contain clues to what went wrong
            console.error(
                `Backend returned code: ${error.status}, ` +
                `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError (
            'Something bad happened; please try again later.'
        );
    }

}