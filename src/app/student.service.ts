import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from './student'
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

private url='http://localhost:8080/api/v1/students';

  constructor(private http:HttpClient) { }
  
  getStudentsList():Observable<Student[]>{
  
  return this.http.get<Student[]>(`${this.url}`);
  }
  
 
  createStudent(student:Student):Observable<Object>{
  return this.http.post(`${this.url}`,student);
  }
  
  getStudentById(id:number):Observable<Student>{
  return this.http.get<Student>(`${this.url}/${id}`)
  }
  
  updateStudent(id:number,student:Student):Observable<Object>{
  return this.http.put(`${this.url}/${id}`,student);
  }
  
  deleteStudent(id:number):Observable<Object>{
  return this.http.delete(`${this.url}/${id}`);
  }
}
